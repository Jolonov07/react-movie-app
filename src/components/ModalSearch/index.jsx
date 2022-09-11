import React from "react"
import cls from './ModalSearch.module.scss'
import { MdClose } from 'react-icons/md'
import { getMoviesRequest, searchMovieRequest } from "../../config/baseUrl"
import { useState, useEffect } from "react"
import { BiCameraMovie } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Search = ({ close }) => {
   const [data, setData] = React.useState(null)
   const [page, setPage] = useState(1)
   const [searchString, setSearchString] = useState('')
   const [sortBy, setSortBy] = useState('popular');

   useEffect(() => {
      if(searchString === "") {
         setData()
      } else {
         searchMovieRequest(page, searchString)
         .then(res => {
            setData(res.results);
         })
      }
  }, [setData, page, sortBy, searchString])

   const handleSearch = e => {
      setSearchString(e.target.value);
   }

   return (
      <div className={cls.container}>
         <div className={cls.modal}>
            <div className={cls.wrapper}>
               <MdClose onClick={() => close(false)} className={cls.close} />
               <div className={cls.search}>
                  <section className={cls.searchInput}>
                     <h1>Поиск</h1>
                     <input 
                        type="search" 
                        placeholder="Search Films" 
                        onChange={handleSearch}
                     />
                  </section>
                  <section className={cls.searchBlock}>
                        {
                           data ? data.map(({ id, title }) => (
                              <div className={cls.innerElement}>
                                 <Link to={`/movie/${id}`} onClick={() => close(false)} className={cls.hint_link}>
                                    <span>
                                       <BiCameraMovie className={cls.cameresMovie} />
                                    </span>
                                    <span className={cls.title}>
                                       {title}
                                    </span>
                                 </Link>
                              </div>
                           )) : null
                        }
                  </section>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Search
