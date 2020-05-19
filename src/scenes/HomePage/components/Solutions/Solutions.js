import React from 'react';
import style from './Solutions.module.scss';
import useGetImage from './useGetImage';
import Swiper from 'react-id-swiper';
import { Link } from 'gatsby';

const Solutions = () => {
  const {
    uk,
    brazil,
    california,
    eu,
    france,
    nevada,
    thailand,
    arrow,
  } = useGetImage();

  const solutionsList = [
    {
      flag: eu,
      title: 'General Data Protection Regulation',
      tag: 'GDPR',
      link: '/',
    },
    {
      flag: france,
      title: 'France',
      tag: 'CNIL',
      link: '/',
    },
    {
      flag: eu,
      title: 'Regulation on Privacy & Electronic Communications',
      tag: 'GePrivacyDPR',
      link: '/',
    },
    {
      flag: brazil,
      title: 'Brazilian General Data Protection Regulation',
      tag: 'LGPD',
      link: '/',
    },
    {
      flag: california,
      title: 'California Consumer Privacy Act',
      tag: 'CCAPD',
      link: '/',
    },
    {
      flag: thailand,
      title: 'Thailand',
      tag: 'PDPA',
      link: '/',
    },
    {
      flag: uk,
      title: 'United Kingdom',
      tag: 'ICO',
      link: '/',
    },
    {
      flag: nevada,
      title: 'Nevada Privacy Law',
      tag: 'ICO',
      link: 'SB-220',
    },
  ];

  return (
    <div className={style.solutions}>
      <div className={style.container}>
        <h2 className={style.title}>
          <span>Simplify Cookie</span>
          <br /> Compliance at Global Scale
        </h2>
        <p className={style.descr}>
          Meet the requirements of GDPR, CCPA, LGPD and other data privacy laws
          with one unified consent solution across different data privacy laws.
        </p>
        <Swiper {...params}>
          {solutionsList.map(({ title, tag, flag, link }) => {
            return (
              <div className={style.slide} key={title}>
                <Link to={link} className={style.item}>
                  <img src={flag.publicURL} alt="flag icon" />
                  <h3>{title}</h3>
                  <span>({tag})</span>
                  <img
                    className={style.arrow}
                    src={arrow.publicURL}
                    alt="arrow icon"
                  />
                </Link>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const params = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 32,
    },
    1024: {
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
};

export default Solutions;
