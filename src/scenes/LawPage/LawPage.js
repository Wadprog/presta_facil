import React from 'react';
import PropTypes from 'prop-types';
import style from './LawPage.module.scss';
import 'swiper/swiper.scss';

import Hero from '@components/Hero';
import Calendly from '@components/Calendly/Calendly';
import Questions from './components/Questions/Questions';

const LawPage = ({ content }) => {
  const data = content.body;
  const heroSection = data[0];
  const bookingSection = data.filter((item) => item.type === 'booking')[0];
  // we take the first two sections from the solution page, because the content is duplicated
  const questionSection = data
    .filter((item) => item.type === 'questions')
    .slice(0, 2);

  return (
    <div className={style.LawPage}>
      <Hero {...heroSection} />
      <Questions data={questionSection} />
      <Calendly {...bookingSection} />
    </div>
  );
};

LawPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LawPage;
