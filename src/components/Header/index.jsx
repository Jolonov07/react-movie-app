import React from "react"
import cls from './Header.module.scss'
import { NavLink } from "react-router-dom"
import { BiUser } from 'react-icons/bi'
import { IoMdSearch } from 'react-icons/io';
import Search from "../ModalSearch";

const navs = [
   {
       title: 'Главная',
       to: '/',
       id: 1,
   },
   {
       title: 'Фильмы',
       to: '/films',
       id: 2,
   },
   {
       title: 'Люди',
       to: '/persons',
       id: 3,
   },
   {
       title: 'Избранное',
       to: '/favorites',
       id: 4,
   },
]

const Header = () => {
   const [active, setActive] = React.useState(false)

   return (
         <div className={cls.header}>
            <div className={cls.container}>
               <div className={cls.content_left}> 
                  <img src="/img/logo512.png" alt="" />
                  <nav className={cls.links}>
                     <ul>
                        {
                           navs.map(( { title, to, id } ) => (
                              <li key={id}>
                                 <NavLink
                                 to={to}
                                 className={( { isActive } ) => {
                                    return isActive ? cls.active : null
                                 }}
                                 >{title}
                                 </NavLink>
                              </li>
                           ))
                        }
                     </ul>
                  </nav>
               </div>
               <div className={cls.content_right}>
                  <button 
                     type='text' 
                     className={cls.btn_search}
                     onClick={() => setActive(true)}
                  >
                     <IoMdSearch className={cls.search_icon} />
                     Search
                  </button>
                  <div className={cls.cabinet}>
                     <BiUser className={cls.bi_user} />
                  </div>
               </div>
            </div>
            {
               active && <Search close={setActive}/>
            }
         </div>
   )
}

export default Header