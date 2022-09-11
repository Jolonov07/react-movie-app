import React from 'react'
import { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import { getPersonsRequest } from '../../config/baseUrl'
import cls from './Persons.module.scss'
import { Link } from 'react-router-dom'

export const Persons = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    getPersonsRequest(66633)
     .then(res => setData(res.results))
  }, [])

  return (
        <div className={cls.container}>
          <div className={cls.cards}>
            {
              data ? data.map(({ id, file_path}) => (
                <Tilt
                  className={cls.cardItem}
                  key={id}
                  style={{
                  // background: `url('') center / cover`,
                  width: '100px',
                  height: '100px'
                  }}
                >
                  <Link to={`/movie/${id}`} className={cls.btnMore}>
                    О фильме
                  </Link>
                </Tilt>
               )): null
             }
          </div>
        </div>
  )
}
