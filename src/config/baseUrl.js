import axios from "axios";

// baseURL
export const baseURL = 'https://api.themoviedb.org/3'
// export const baseURL = 'ttps://api.kinopoisk.dev'
// api key
export const api_key = '4cdc77ade6d278c3a1b313cca08fa07f';
// export const api_key = '2WRJZQN-S2A47F3-MNWTKFF-RE3AQ7M';
// language
export const language = 'ru-RU';
// imgUrl
export const imgUrl = 'https://image.tmdb.org/t/p/original'

export const getMoviesRequest = (page, sortBy) => {
    return fetch(`${baseURL}/movie/${sortBy}?api_key=${api_key}&language=${language}&page=${page}&region=ru`)
    .then(res => res.json())
    .then(r => r)
}

export const getPersonsRequest = id => {
    return fetch(`${baseURL}/person/${id}/images?api_key=${api_key}&language=${language}`)
    .then(res => res.json())
    .then(r => r)
}

export const singleMovieRequest = id => {
    return fetch(`${baseURL}/movie/${id}?api_key=${api_key}&language=${language}&region=ru`)
    .then(res => res.json())
    .then(r => r)
}

export const similarMovieRequest = (id, page) => {
    return fetch(`${baseURL}/movie/${id}/similar?api_key=${api_key}&language=${language}&page=${page}&region=ru`)
    .then(res => res.json())
    .then(r => r)
}

export const singleMovieTrailerRequest = id => {
    return fetch(`${baseURL}/movie/${id}/videos?api_key=${api_key}&language=${language}&region=ru`)
    .then(res => res.json())
    .then(r => r)
}

export const searchMovieRequest = (page, query) => {
    return fetch(`${baseURL}/search/movie?api_key=${api_key}&language=${language}&page=${page}&query=${query}`)
    .then(res => res.json())
    .then(r => r)
}

// export const axiosRequest = () => {
//     return axios.create('baseURL')
// }

// axiosRequest.get('/movies')
