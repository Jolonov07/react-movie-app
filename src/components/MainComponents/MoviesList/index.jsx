import React from 'react'
import { useEffect, useState } from 'react'
import { getMoviesRequest, searchMovieRequest } from '../../../config/baseUrl'
import { imgUrl } from '../../../config/baseUrl'
import cls from './MoviesList.module.scss'
import Tilt from 'react-parallax-tilt'
import { IoIosArrowBack, IoIosArrowForward, IoMdSearch } from 'react-icons/io'
import { paginationArray } from '../../../utils/functions'
import { Title } from '../../Title'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Loader from '../../Loader'

const MoviesList = () => {
	const [data, setData] = useState(null)
	const [totalPages, setTotalPages] = useState(null)
	const [page, setPage] = useState(1)
	const [slicedFrom, setSlicedFrom] = useState(0)
	const [slicedTo, setSlicedTo] = useState(5)
	const [sortBy, setSortBy] = useState('popular')
	const [searchString, setSearchString] = useState('')
	const totalPagesArray = paginationArray(totalPages).slice(
		slicedFrom,
		slicedTo
	)
	const pageTitle = sortBy == 'popular' ? 'Популярные на данный момент' : sortBy == 'upcoming' ? 'Ожидаемые фильмы' : 'Самые рейтинговые'

	useEffect(() => {
		if (searchString == '') {
			getMoviesRequest(page, sortBy)
			.then(res => {
				setData(res.results)
				console.log(res);
				setTotalPages(res.total_pages)
			})
		} else {
			setSlicedFrom(0)
			setSlicedTo(5)
			setPage(1)

			searchMovieRequest(page, searchString).then(res => {
				setData(res.results)
			})
		}
	}, [setData, page, sortBy, searchString])

	const nextPage = () => {
		setPage(prev => prev + 1)
		setSlicedFrom(prev => prev + 1)
		setSlicedTo(prev => prev + 1)
	}
	const prevPage = () => {
		setPage(prev => prev - 1)
		if (slicedTo > 5) {
			setSlicedFrom(prev => prev - 1)
			setSlicedTo(prev => prev - 1)
		}
	}
	const handlePage = item => {
		setPage(item)
		const midleItem = totalPagesArray[2]
		if (item - midleItem == 1) {
			setSlicedFrom(prev => prev + 1)
			setSlicedTo(prev => prev + 1)
		} else if (item - midleItem == 2) {
			setSlicedFrom(prev => prev + 2)
			setSlicedTo(prev => prev + 2)
		}

		if (slicedFrom > 1) {
			if (midleItem - item == 1) {
				setSlicedFrom(prev => prev - 1)
				setSlicedTo(prev => prev - 1)
			} else if (midleItem - item == 2) {
				setSlicedFrom(prev => prev - 2)
				setSlicedTo(prev => prev - 2)
			}
		}
	}

	const handleChangeFiltering = e => {
		setSortBy(e.target.value)
		setSlicedFrom(0)
		setSlicedTo(5)
		setPage(1)
	}

	const handleSearch = e => {
		setSearchString(e.target.value)
	}
	
	return (
		<div className={cls.root}>
			<div className={cls.content}>
				<div className={cls.filtering}>
					<div className={cls.filtering_box}>
						<Title title={pageTitle} />
						<form className={cls.filter_radios} onChange={handleChangeFiltering}>
							<input
								type='radio'
								name='grade'
								value='popular'
								id='popular'
								className={cls.popular}
							/>
							<label htmlFor='popular' value='popular'>
								Популярные на данный момент
							</label>

							<input
								type='radio'
								name='grade'
								id='newest'
								value='upcoming'
								className={cls.newest}
							/>
							<label htmlFor='newest' value='upcoming'>
								Ожидаемые
							</label>

							<input
								type='radio'
								name='grade'
								id='featured'
								value='top_rated'
								className={cls.featured}
							/>
							<label htmlFor='featured' value='top_rated'>
								Самые рейтинговые
							</label>
							<div className={cls.checked_radio_bg}></div>
						</form>
					</div>
				</div>
				<div className={cls.searching}>
					<input
						type='text'
						onChange={handleSearch}
						className='form-control'
						placeholder='Я ищу...'
					/>
					<div>
						<IoMdSearch className={cls.search_icon} />
					</div>
				</div>
				<div className={cls.cards}>
					{
						data ? data.map(({ id, poster_path}) => (
								<Tilt
									className={classNames(cls.cardItem, cls.bg_secondary)}
									key={id}
									style={{
										background: `url('${ imgUrl + poster_path }') center / cover`,
									}}
								>
									<Link to={`/movie/${id}`} className={cls.btnMore}>
										О фильме
									</Link>
								</Tilt>
						)): null
					}
				</div>
				<div className={cls.pagination}>
					<button
						disabled={page <= 1 ? true : false}
						onClick={prevPage}
						className={cls.pagePrev}
					>
						<IoIosArrowBack />
					</button>
					<ul className={cls.pageList}>
						{totalPagesArray.map(item => (
							<li key={item}>
								<button
									onClick={() => {
										handlePage(item)
									}}
									className={`${cls.pageItem} ${
										page == item ? cls.activePage : null
									}`}
								>
									{item}
								</button>
							</li>
						))}
					</ul>
					<button
						disabled={page === totalPages ? true : false}
						onClick={nextPage}
						className={cls.pageNext}
					>
						<IoIosArrowForward />
					</button>
				</div>
			</div>
		</div>
	)
}

export default MoviesList
