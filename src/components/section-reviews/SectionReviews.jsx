// import React from 'react';
import s from './SectionReviews.module.scss'
import Slider from './SliderReviews';

const SectionReviews = () => {
  return (
    <section className={s.SectionReviews}>
      <div className={s.SectionReviews__cont}>
        <p>Отзывы покупателей</p>
        <Slider />
      </div>
    </section>
  );
};

export default SectionReviews;