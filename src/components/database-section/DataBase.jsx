import React from "react";
import s from "./DataBase.module.scss";
import socialImage from "../../assets/socials-image.png";

const DataBase = () => {
  return (
    <section id={s.DataBase}>
      <div className={s.titles}>
        <h4>
          Сохраняйте базу данных <br /> своих клиентов и держите <br /> с ними
          активный контакт
        </h4>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый <br /> в печати и
          вэб-дизайне. Lorem Ipsum является <br /> стандартной "рыбой" для
          текстов на латинице с <br /> начала XVI века.
        </p>
      </div>
      <div className={s.image}>
        <img src={socialImage} alt="image" />
      </div>
    </section>
  );
};

export default DataBase;
