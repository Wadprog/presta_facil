import React, { Fragment } from 'react';

// import style from './HomePage.module.scss';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Solutions from './components/Solutions';
import Technologies from './components/Technologies';
import Features from './components/Features';
import Works from '@components/Works';
import Plans from '@components/Plans';
import PropTypes from 'prop-types';
import 'swiper/swiper.scss';

const HomePage = ({ data }) => {
  const body = data.prismic.allHomepages.edges[0].node.body;
  const hero = body[0].primary;
  const fieldsHero = body[0].fields;
  const fieldsTestimonial = body[1].fields;
  const solutions = body[2].primary;
  const solutionsTestimonial = body[2].fields;
  const technologies = body[3];
  const features = body[4];
  const works = body[5];
  const plans = body[6];

  console.log(plans);
  return (
    <Fragment>
      <Hero {...hero} repeateble={fieldsHero} />
      <Testimonials repeateble={fieldsTestimonial} />
      <Solutions {...solutions} repeateble={solutionsTestimonial} />
      <Technologies {...technologies} />
      <Features {...features} />
      <Works {...works} />
      <Plans {...plans} />
    </Fragment>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;
