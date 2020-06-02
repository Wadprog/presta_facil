import React from 'react';
import PropTypes from 'prop-types';
import style from './SolutionPage.module.scss';
import 'swiper/swiper.scss';

import Hero from '@components/Hero';
import Projects from './components/Projects/Projects';

const SolutionPage = ({ current }) => {
  const body = current.body;
  console.log(body);
  return (
    <div className={style.SolutionPage}>
      {body.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return <Hero {...section} key={`${section.type}${index}`} />;
          case 'projects':
            return <Projects {...section} key={`${section.type}${index}`} />;
        }
      })}
    </div>
  );
};

SolutionPage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default SolutionPage;
