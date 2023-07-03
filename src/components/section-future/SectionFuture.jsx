import React from 'react';
import s from './SectionFuture.module.scss'
import Map from '../../assets/future-map.svg'
import Schema from '../../assets/future-schema.svg'

const SectionFuture = () => {
  return (
    <section className={s.futureProjects}>
      <div className={s.futureProjects__img}></div>

      <div className={s.futureProjects__main}>
        <div className={s.futureProjects__cont}>
          <h2>Про будущее проекта</h2>
          <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
          <div>
            <div>
              <h4>1M+</h4>
              <p>Количество товаров</p>
            </div>

            <div>
              <h4>200K+</h4>
              <p>Прибыль за месяц</p>
            </div>

            <div>
              <h4>20K+</h4>
              <p>Количество продавцов</p>
            </div>
          </div>

          <img src={Map} alt="Графическая карта мира" />

          <h2>Про будущее проекта</h2>
          <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>

          <div className={s.futureProjects__schema}>
            <img src={Schema} alt="Картинка схемы" />
            <ul>
              <li>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </li>
              <li>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </li>
              <li>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </li>
              <li>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </li>

            </ul>
          </div>

        </div>
      </div>
      <div className={s.futureProjects__img}></div>
    </section>
  );
};

export default SectionFuture;