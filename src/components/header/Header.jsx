import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import s from "./Header.module.scss";
import LOGO from "../../assets/logo.png";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 900) {
      return { top: !menuOpened && "-100%" };
    }
  };

  return (
    <section className={`${s.wrapper} ${s.container}`}>
      <div className={s.flexCenter}>
        <img className={s.img} src={LOGO} alt="logo" />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className={s.menu} style={getMenuStyles(menuOpened)}>
            <a href="">Мои товары</a>
            <button className={s.button}>Мои клиенты</button>
            <a href="">Инвентаризация</a>
            <a href="">Актуальные продажи</a>
            <a href="">Аналитика продаж</a>
            <a href="">Продать товар</a>
            <a href="">Помощь</a>
          </div>
        </OutsideClickHandler>

        <div
          className={s.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
