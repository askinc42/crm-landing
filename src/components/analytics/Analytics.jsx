import React from "react";
import s from "./Analytics.module.scss";
import IMG from "../../assets/analytics.png";

const Analytics = () => {
  return (
    <section className={s.wrapper}>
      <div className={`${s.flexCenter} ${s.container}`}>
        <div className={s.col}>
          <h2 className={s.title}>
            Подробная <br /> аналитика продаж
          </h2>
          <p className={s.desc}>
            Узнайте точные цифры по обороту и чистой прибыли, по дням, неделям и
            месяцам.
          </p>
        </div>

        <div className={s.col}>
          <img className={s.img} src={IMG} alt="analytics" />
        </div>
      </div>
    </section>
  );
};

export default Analytics;
