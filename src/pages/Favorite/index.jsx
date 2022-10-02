import React from "react"
import cls from './Favorite.module.scss'
import Tilt from 'react-parallax-tilt'
import { Link } from "react-router-dom"
import { imgUrl } from "../../config/baseUrl"
import classNames from 'classnames'
import img from './img/obrabotka.png'

export const Favorite = () => {
  // const { favorites, onAddToFavorite } = React.useContext(AppContext)

  return (
    <div className={cls.root}>
      <div className={cls.container}>
        <div className={cls.content}>
          <h1 style={{color: '#fff'}}>Страница в обработке</h1>
          <img src={img} alt="" width={700} />
          {/* {
            favorites.map(( id, poster_path ) => (
              <Tilt
									className={classNames(cls.cardItem, cls.bg_secondary)}
									key={id}
                  favorited={true} 
                  onFavorite={onAddToFavorite} 
									style={{
										background: `url('${ imgUrl + poster_path }') center / cover`,
									}}
							>
								<Link to={`/movie/${id}`} className={cls.btnMore}>
									О фильме
								</Link>
						  </Tilt>
            ))
          } */}
        </div>
      </div>
    </div>
    )
}
