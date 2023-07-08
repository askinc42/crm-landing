import React from "react";
import s from "./CounterCardsInfo.module.scss";
import greenComputer from "../../assets/green-computer.png";
import IconSchema from "../../assets/icon-schema.png";
import IconLike from "../../assets/icon-like.png";

const CounterCardsInfo = () => {
  const blocks = [
    {
      icon: IconLike,
      title: "Что такое Lorem Ipsum?",
      text: (
        <>
          Lorem Ipsum - это текст-"рыба", <br /> часто используемый в печати{" "}
          <br /> и вэб-дизайне. Lorem Ipsum является <br /> стандартной "рыбой"
          для текстов <br /> на латинице с начала XVI века
        </>
      ),
    },
    {
      icon: IconSchema,
      title: "Что такое Lorem Ipsum?",
      text: (
        <>
          Lorem Ipsum - это текст-"рыба", <br /> часто используемый в печати{" "}
          <br /> и вэб-дизайне. Lorem Ipsum является <br /> стандартной "рыбой"
          для текстов <br /> на латинице с начала XVI века
        </>
      ),
    },
    {
      icon: IconLike,
      title: "Что такое Lorem Ipsum?",
      text: (
        <>
          Lorem Ipsum - это текст-"рыба", <br /> часто используемый в печати{" "}
          <br /> и вэб-дизайне. Lorem Ipsum является <br /> стандартной "рыбой"
          для текстов <br /> на латинице с начала XVI века
        </>
      ),
    },
    {
      icon: IconLike,
      title: "Что такое Lorem Ipsum?",
      text: (
        <>
          Lorem Ipsum - это текст-"рыба", <br /> часто используемый в печати{" "}
          <br /> и вэб-дизайне. Lorem Ipsum является <br /> стандартной "рыбой"
          для текстов <br /> на латинице с начала XVI века
        </>
      ),
    },
  ];

  return (
    <section id={s.CounterCards}>
      <div id="container">
        <div className={s.infoBlock}>
          <h1>
            Знайте точное количество <br />
            ваших товаров
          </h1>
          <div className={s.cards}>
            {blocks.map(({ icon, title, text }, id) => (
              <div key={id} className={s.infoCards}>
                <img src={icon} alt="" />
                <h6>{title}</h6>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterCardsInfo;
