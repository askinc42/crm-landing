import React from "react";
import CountUp from "react-countup";
import s from "./Amount.module.scss";

const Amount = () => {
  return (
    <section>
      <div className={`${s.amountGroup} ${s.flexCenter}`}>
        <div className={`${s.amountGroupContent} ${s.flexCenter}`}>
          <CountUp
            className={s.totalAmount}
            start={10195900}
            end={10212010}
            duration={4}
          />
          <h3 className={s.amountTitle}>Общее количество товаров</h3>
        </div>
      </div>
    </section>
  );
};

export default Amount;
