import { useState, useEffect } from 'react'
import cls from './SingleMovie.module.scss'
import { imgUrl, singleMovieRequest } from '../../config/baseUrl'
import { useParams } from 'react-router'
import { BsPlay } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FavoriteIcon } from '../../components/FavoriteIcon'
import Persons from '../../components/MainComponents/MiniSlider'

export const SingleMovie = () => {
    const [data, setData] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        singleMovieRequest(id)
        .then(res => setData(res))
        return () => {}
    }, [setData, id])

    return(
        data ? (
            <div className={cls.root}>
                <div className={cls.container_flex}>
                    <div className={cls.contentLeft}>
                        {
                            <div 
                                className={cls.cardBg}
                                style={{
                                    background: `url('${ imgUrl + data.poster_path }') center / cover`
                                }}
                            >
                            </div>
                        }
                        <div className={cls.content}>
                            <div className={cls.content_videoTrailer}>
                                <Link to={`/movie/trailer/${data.id}`} className={cls.videoTrailer} ><BsPlay className={cls.play} />Трейлер</Link>
                            </div>
                            <div className={cls.cardFavorite}>
                                <FavoriteIcon onClickFavorites={(obj) => console.log(obj)} />
                            </div>
                        </div>
                    </div>
                    <div className={cls.contentRight}>
                        <h1 className={cls.title}>Фильм {data.title} смотреть онлайн</h1>
                        <p className={cls.originalTitle}>({data.original_title})</p>
                        <div className={cls.productionCompanies}>
                            {
                                data.production_companies && data.production_companies.length !== 0 && (
                                    data.production_companies.map(({id, name, logo_path}) => (
                                        logo_path && <img title={name} key={id} alt={name} src={imgUrl + logo_path} />
                                    ))
                                )
                            }
                        </div>
                        <div className={cls.contentDescription}>
                            <p className={cls.description}>{data.overview}</p>
                        </div>
                      <Persons />
                    </div>
                </div>
            </div>
        ) : null
    )
}
