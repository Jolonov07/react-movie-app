import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { imgUrl, singleMovieRequest, singleMovieTrailerRequest } from "../../config/baseUrl";
import cls from './MovieTrailer.module.scss';

export const MovieTrailer = () => {
    const [data, setData] = useState(null);
    const [movieTrailer, setMovieTrailer] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        singleMovieRequest(id)
        .then(res => setData(res));
        return () => {}
    }, [setData, id])

    useEffect(() => {
        singleMovieTrailerRequest(id)
        .then(res => setMovieTrailer(res.results));
        return () => {}
    }, [id, setMovieTrailer])

    return (
        data ? (
            <div className={cls.root}>
                <div 
                    className={cls.imageBg} 
                    style={{
                        background: `url('${imgUrl + data.backdrop_path}') center / cover`
                    }}
                >
                    {
                        movieTrailer ? (
                            <div className={cls.video}>
                                <iframe className={cls.video_t} width="700px" height="450" src={`https://www.youtube.com/embed/${movieTrailer[0].key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        ) : <h1 className={cls.loading}>Загрузка...</h1>
                    }
                </div>
            </div>
        ) : null
    )
}