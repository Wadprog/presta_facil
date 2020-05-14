import React, { Fragment } from 'react';

// import style from './HomePage.module.scss';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Testimonials />
    </Fragment>
  );
};

export default HomePage;
