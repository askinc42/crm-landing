import React from "react";
import s from "./GalleryContainers.module.scss";
import picture from "../../assets/Picture.png";
import picture1 from "../../assets/Picture (1).png";
import picture2 from "../../assets/Picture (2).png";

const GalleryContainers = () => {
  return (
    <section id={s.GalleryContainers}>
      <div className={s.container}>
        <div className={s.topBlock}>
          <div className={s.item}></div>
          <div className={s.item}>
            <div className={s.wrapper}>
              <span>Контролируй!</span>
              <p>
                Нанимайте продавцов в свой <br /> контейнер и узнайте насколько{" "}
                <br />
                эффективно они работают
              </p>
              <button>Начать бесплатно</button>
            </div>
          </div>
        </div>
        <div className={s.bottomBlock}>
          <div className={s.item}></div>
          <div className={s.item}></div>
          <div className={s.item}></div>
          <div className={s.item}></div>
        </div>
      </div>
    </section>
  );
};

export default GalleryContainers;
