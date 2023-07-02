import React from "react";
import s from "./Fourth.module.scss";
import WAVE1 from "../../assets/wave-1.svg";
import WAVE2 from "../../assets/wave-2.svg";

const Fourth = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h2 className={s.title}>
          Знайте точное кол-во товаров которое у вас есть
        </h2>
        <p className={s.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          illum quas odio tempore vel, sapiente sit saepe placeat vero
          perspiciatis?
        </p>

        {/* <div className={s.slaider}></div> */}
      </div>

      <div className={s.waves}>
        <img className={s.firstWave} src={WAVE1} alt="" />
        <img className={s.secondWave} src={WAVE2} alt="" />
      </div>

      <div className={s.amountGroup}>
        <div className={s.amountGroupContent}>
          <div className={s.totalAmount}>10,212,010</div>
          <h3 className={s.amountTitle}>Общее количество товаров</h3>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
