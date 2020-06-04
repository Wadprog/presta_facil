import React from 'react';
import PropTypes from 'prop-types';
import style from './SolutionPage.module.scss';
import 'swiper/swiper.scss';

import Hero from '@components/Hero';
import Projects from './components/Projects/Projects';
import Benefits from './components/Benefits/Benefits';
import Features from './components/Features/Features';
import Questions from './components/Questions/Questions';
import Agencies from '@components/Agencies';

const SolutionPage = ({ current, mainSection }) => {
  const body = current.body;
  const agenciesSection = mainSection[0].node.body2[0];
  console.log(mainSection);
  console.log(agenciesSection);

  return (
    <div className={style.SolutionPage}>
      {body.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return <Hero {...section} key={`${section.type}${index}`} />;
          case 'projects':
            return <Projects {...section} key={`${section.type}${index}`} />;
          case 'benefits':
            return <Benefits {...section} key={`${section.type}${index}`} />;
          case 'features':
            return <Features {...section} key={`${section.type}${index}`} />;
          case 'questions':
            return <Questions {...section} key={`${section.type}${index}`} />;
        }
      })}
      <Agencies {...agenciesSection} />
    </div>
  );
};

SolutionPage.propTypes = {
  current: PropTypes.object.isRequired,
  mainSection: PropTypes.array,
};

export default SolutionPage;
