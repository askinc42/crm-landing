import React from "react";
import s from "./Amount.module.scss"

const Amount = () => {
  return (
    <section>
      <div className={`${s.amountGroup} ${s.flexCenter}`}>
        <div className={`${s.amountGroupContent} ${s.flexCenter}`}>
          <div className={s.totalAmount}>10,212,010</div>
          <h3 className={s.amountTitle}>Общее количество товаров</h3>
        </div>
      </div>
    </section>
  );
};

export default Amount;
