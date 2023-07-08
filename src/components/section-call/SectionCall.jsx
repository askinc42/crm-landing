import React from 'react';
import s from './SectionCall.module.scss'

const SectionCall = () => {
  return (
    <section className={s.SectionCall}>
      <div>
        <h1>Призыв зарегаться</h1>
        <p>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
        <button>Sign Up Now</button>
      </div>
    </section>
  );
};

export default SectionCall;