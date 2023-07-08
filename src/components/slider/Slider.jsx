import React from "react";
import s from "./Slider.module.scss";
import WAVE1 from "../../assets/wave-1.svg";
import WAVE2 from "../../assets/wave-2.svg";
import MENU from "../../assets/menu.svg";
import MINI from "../../assets/slider-mini.svg";

const Fourth = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h2 className={s.title}>
          Знайте точное количество ваших товаров
        </h2>
        <p className={s.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          illum quas odio tempore vel, sapiente sit saepe placeat vero
          perspiciatis?
        </p>

        <div className={s.slidersGroup}>
          <img className={s.menuImg} src={MENU} alt="" />
          <div className={s.sliderContent}>
            <div className={s.sliderBg}></div>
            <div className={s.slider}></div>
          </div>
          <img className={s.sliderMini} src={MINI} alt="" />
        </div>

        <div className={s.waves}>
          <img className={s.darkWave} src={WAVE1} alt="" />
          <img className={s.lightWave} src={WAVE2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Fourth;
