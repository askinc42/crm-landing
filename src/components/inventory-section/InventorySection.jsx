import React from "react";
import s from "./InventorySection.module.scss";
import peopleLaptop from "../../assets/peopleLaptop.png";

const InventorySection = () => {
  return (
    <section id={s.InventorySection}>
      <div className={s.textBlock}>
        <h3>
          Проводите инвентаризацию -
          <br /> чтобы не потерять
          <br /> ни одного товара
        </h3>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в <br /> печати и
          вэб-дизайне. Lorem Ipsum является стандартной <br /> "рыбой" для
          текстов на латинице с начала XVI века.
        </p>
      </div>
      <div className={s.image}>
        <img src={peopleLaptop} alt="" />
      </div>
    </section>
  );
};

export default InventorySection;
