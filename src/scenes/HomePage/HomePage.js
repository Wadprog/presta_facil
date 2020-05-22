import React, { Fragment } from 'react';

// import style from './HomePage.module.scss';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Solutions from './components/Solutions';
import Integration from './components/Integration';
import Features from './components/Features';
import PropTypes from 'prop-types';
import 'swiper/swiper.scss';

const HomePage = ({ data }) => {
  const body = data.prismic.allHomepages.edges[0].node.body;
  const hero = body[0].primary;
  const fieldsHero = body[0].fields;
  const fieldsTestimonial = body[1].fields;
  // console.log(body);
  return (
    <Fragment>
      <Hero {...hero} repeateble={fieldsHero} />
      <Testimonials repeateble={fieldsTestimonial} />
      <Solutions />
      <Integration />
      <Features />
    </Fragment>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;
