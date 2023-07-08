// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import s from './SectionReviews.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import UserPhoto from '../../assets/user-reviwe.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderReviews = () => {

  const ReviwewsArr = [
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src:UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src: UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src: UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src: UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src: UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src:UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src:UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src:UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src:UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src:UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 
    {
      id: Math.random(),
      name: 'SectionReviews',
      comp: 'Financial Counselor',
      src:UserPhoto,
      message: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    }, 

  ]


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {ReviwewsArr.map((item) => (
          <SwiperSlide className={s.Slide} key={item.id}>
            <p className={s.Slide__message}>{item.message}</p>
            <img src={item.src} alt={item.message} />
            <div>
              <div className={s.item__name}>{item.name}</div>
              <div  className={s.item__comp}>{item.comp}</div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" style={{
        borderRadius: '100px',
        width: '70px',
        height: '70px',
        border: '2px solid #00A473',
        boxShadow:
          '0px 0px 2px 0px rgba(0, 0, 0, 0.07), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
        color: '#00A473',
      }}></div>
        <div className="swiper-button-prev" style={{
        borderRadius: '100px',
        width: '70px',
        height: '70px',
        border: '2px solid #00A473',
        boxShadow:
          '0px 0px 2px 0px rgba(0, 0, 0, 0.07), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
        color: '#00A473',
      }}>
      </div>
    </Swiper>
  );
};

export default SliderReviews;