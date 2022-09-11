import React from "react"
import cls from './Favorite.module.scss'
import Tilt from 'react-parallax-tilt'
import { Link } from "react-router-dom"
import { imgUrl } from "../../config/baseUrl"
import classNames from 'classnames'

export const Favorite = () => {
  // const { favorites, onAddToFavorite } = React.useContext(AppContext)

  return (
    <div className={cls.root}>
      <div className={cls.container}>
        <div className={cls.content}>
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
