import { useState, useContext } from 'react'
import { BsBookmarkStar} from 'react-icons/bs'
import cls from './FavoriteIcon.module.scss'

export const FavoriteIcon = () => {
  const [isAdded, setIsAdded] = useState(false)
  // const { isItemAdded } = useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(null)

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <BsBookmarkStar className={isAdded ? cls.activeFavorite : cls.favorite}  onClick={onClickFavorite}/>
  )
}
