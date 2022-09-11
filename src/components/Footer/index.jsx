import React from "react"
import cls from './Footer.module.scss'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
      <div className={cls.footer}>
         <div className={cls.footer_content}>
            <div className={cls.brand}>
               <img src="/img/logo512.png" alt="Logo" />
                 <p>React & Присоединиться:</p>
               <div className={cls.social_links}>
                  <BsFacebook />
                  <BsInstagram />
                  <BsTwitter />
                  <BsYoutube />
               </div>
            </div>
            <div className={cls.links}>
              <ul>
								<h4 className={cls.link_heading}>О нас</h4>
									<li>О компании</li>
									<li>Программа бета-тестирования</li>
									<li>Информация для партнёров</li>
									<li>Размещение рекламы</li>
							</ul>
							<ul>
								<h4 className={cls.link_heading}>Разделы</h4>
									<li>Что нового</li>
									<li>Аниме</li>
									<li>Фильмы</li>
									<li>Мультфильмы</li>
							</ul>
							<ul className={cls.support}>
								<h4 className={cls.link_heading}>Служба поддержки</h4>
									<li>Мы всегда готовы вам помочь.
									Наши операторы онлайн 24/7</li>
									<li className={cls.support_btn}>Написать в чате</li>
							</ul>
            </div>
         </div>
         <div className={cls.footer_copyright}>
            <div className={cls.copyright}>
							<p>© «Zholonov» 2022 Все права защищены.</p>
						</div>
						<div className={cls.wrapper}>
							<p>Политика конфиденциальности</p>
							<p>Условия и положения</p>
						</div>
         </div>
      </div>
  )
}

export default Footer