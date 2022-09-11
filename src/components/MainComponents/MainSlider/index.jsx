import { useEffect, useState } from 'react'
import { getMoviesRequest } from '../../../config/baseUrl';
import cls from './MainSlider.module.scss';
import { imgUrl } from '../../../config/baseUrl';
import { genresList } from '../../../utils/genres';
import { filterGenres } from '../../../utils/functions';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css"
import "swiper/css/navigation"

export const MainSlider = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getMoviesRequest(2, 'popular')
        .then(res => setData(res.results.slice(5, 20)));
    }, [setData])

    return (
       <div className={cls.container}>
         <div className={cls.root}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                rewind={true}
                navigation={true}
                autoplay={{delay: 3500, disableOnInteraction: false}}
                pagination={{ clickable: true }}
                className={cls.carouselContainer}
            >
                <div className={cls.carouselBox}>
                    {
                        data ? data.map(({id, backdrop_path, title, release_date, genre_ids}) => (
                            <SwiperSlide
                                key={id} 
                                style={{
                                    background: `url('${imgUrl}${backdrop_path}') center / cover`,
                                    borderRadius: '30px',
                                }}
                                className={cls.carouselItem}
                            >
                                {/* <div className={cls.content}>
                                    <h1 className={cls.title}>{title}</h1>
                                    <h2 className={cls.date}>Дата: {release_date}</h2>
                                    <h2 className={cls.genre_head}>Жанры: </h2>
                                    <div className={cls.genres}>
                                        {
                                            filterGenres(genresList, genre_ids).map(item => (
                                                <span className={`genre-${item.id}`} key={item.id}>{item.name}</span>
                                            ))
                                        }
                                    </div>
                                </div> */}
                            </SwiperSlide>
                        )) : null
                    }
                </div>
            </Swiper>
        </div>
       </div>
    )    
}