import React from "react";
import s from "./Subcover.module.scss";
import IMG from "../../assets/phone.png";

const Subcover = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.subCover}>
        <div className={`${s.flexCenter} ${s.container}`}>
          <div className={s.col}>
            <img className={s.img} src={IMG} alt="" />
          </div>

          <div className={s.col}>
            <h2 className={s.title}>На связи 24/7 -</h2>
            <p className={s.desc}>
              Контролируй свой контейнер, находясь <br/> в любой точке мира
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subcover;
