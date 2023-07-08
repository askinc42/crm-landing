import React from "react";
import s from "./ContainersInfo.module.scss";
import ContainerGroup from "../../assets/container-group.png";
const ContainersInfo = () => {
  return (
    <section id={s.ContainersInfo}>
      <div className={s.imageBlock}>
        <img src={ContainerGroup} alt="image" width={399} />
      </div>
      <div className={s.textBlocks}>
        <h2>
          Управляйте несколькими <br /> контейнерами одновременно
        </h2>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в <br /> печати и
          вэб-дизайне. Lorem Ipsum является стандартной <br /> "рыбой" для
          текстов на латинице с начала XVI века.
        </p>
      </div>
    </section>
  );
};

export default ContainersInfo;
