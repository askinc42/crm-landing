import React from "react";
import s from "./Header.module.scss";
import LOGO from "../../assets/logo.png";

const Header = () => {
  return (
    <section className={`${s.wrapper} ${s.container}`}>
      <div className={s.flexCenter}>
        <img className={s.img} src={LOGO} alt="logo" />
        <div className={s.menu}>
          <a href="">Мои товары</a>
          <button className={s.button}>Мои клиенты</button>
          <a href="">Инвентаризация</a>
          <a href="">Актуальные продажи</a>
          <a href="">Аналитика продаж</a>
          <a href="">Продать товар</a>
          <a href="">Помощь</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
