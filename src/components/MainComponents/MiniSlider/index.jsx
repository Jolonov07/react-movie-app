import cls from './Mini.module.scss'
import { getPersonsRequest, similarMovieRequest } from '../../../config/baseUrl'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Autoplay } from "swiper"
import { imgUrl } from '../../../config/baseUrl'


const Persons = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    similarMovieRequest(2, 2)
    .then(res => setData(res.results.slice(5, 20)))
}, [setData])

  return(
      <div className={cls.container}>
        <div className={cls.root}>
          <h1 style={{
            color: 'red'
          }}>Так же смотрите:</h1>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{delay: 3500, disableOnInteraction: false}}
            className={cls.carouselContainer}
          >
            {
              data ? data.map(({id, backdrop_path}) => (
                <SwiperSlide
                  key={id} 
                  style={{
                    background: `url('${imgUrl}${backdrop_path}') center / cover`,
                    borderRadius: '20px',
                  }}
                  className={cls.carouselItem}
                >
                </SwiperSlide>
              )) : null
            }
          </Swiper>
        </div>  
      </div>
  )
}

export default Persons
