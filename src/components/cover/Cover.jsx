import React from "react";
import s from "./Cover.module.scss";
import IMG from "../../assets/cover-img.png";
import WAVE from "../../assets/cover-wave.svg";

const Cover = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={`${s.flexCenter} ${s.row}`}>
          <div className={s.col}>
            <h1 className={s.title}>CRM</h1>
            <p className={s.subTitle}>
              платформа для развития вашего бизнеса
            </p>
            <p className={s.desc}>
              Уникальный и мощный набор программного обеспечения, который
              изменит ваш способ работы. Развивайте свою компанию еще успешнее.
            </p>
            <button className={s.button}>Начать бесплатно</button>
          </div>

          <div className={s.col}>
            <img className={s.coverImg} src={IMG} alt="" />
          </div>
        </div>
      </div>

      <img className={s.wave} src={WAVE} alt="" />
    </section>
  );
};

export default Cover;
