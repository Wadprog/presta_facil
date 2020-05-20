import React, { Fragment } from 'react';

// import style from './HomePage.module.scss';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Solutions from './components/Solutions';
import Integration from './components/Integration';
import Features from './components/Features';
import 'swiper/swiper.scss';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Testimonials />
      <Solutions />
      <Integration />
      <Features />
    </Fragment>
  );
};

export default HomePage;
