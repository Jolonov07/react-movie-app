import React from "react"
import { MainSlider } from "../../components/MainComponents/MainSlider"
import MoviesList from "../../components/MainComponents/MoviesList"
import cls from './Main.module.scss';

export const Main = () => {
    return (
        <div className={cls.root}>
            <MainSlider />
            <MoviesList />
        </div>
    )
}