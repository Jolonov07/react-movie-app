import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { MovieTrailer } from './pages/MovieTrailer'
import { SingleMovie } from './pages/SingleMovie'
import { Favorite } from './pages/Favorite'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className='root'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}  />
        <Route path='/favorites' element={<Favorite />}  />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/movie/trailer/:id" element={<MovieTrailer />} />
        <Route to="/" />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
