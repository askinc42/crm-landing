import React from 'react'
import cl from './Header.module.css'

import LOGO from '../../../public/logo.png'

const Header = () => {
  return (
    <section className={cl.wrapper}>
      <div className={cl.container}>
        <img src={LOGO} alt="logo" />

        <div className={cl.menu}>
          <a href="">Мои товары</a>
          <button>Мои клиенты</button>
          <a href="">Инвентаризация</a>
          <a href="">Актуальные продажи</a>
          <a href="">Аналитика продаж</a>
          <a href="">Продать товар</a>
          <a href="">Помощь</a>
        </div>

        <img src="" alt="" />
      </div>
    </section>
  )
}

export default Header