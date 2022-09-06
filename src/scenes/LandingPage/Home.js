import React from 'react';
import PropTypes from 'prop-types';
import style from './HomePage.module.scss';
import Hero from './components/Hero';
import Testimonials from '@components/Testimonials';
import Solutions from './components/Solutions';
import Technologies from './components/Technologies';
import Features from './components/Features';
import FeaturesChecklist from './components/FeaturesCheckList';

import Works from '@components/Works';
import Plans from '@components/Plans';
import Articles from '@components/Articles/Articles';
import Subscribe from '@components/Subscribe';
import Agencies from '@components/Agencies';
import 'swiper/swiper.scss';

const Home = ({ content, currentLanguage, videoask }) => {
  return (
    <div className={style.HomePage}>
      {content.map((section, index) => {
        console.log(section.slice_type);
        switch (section.slice_type) {
          case 'hero1':
            return (
              <Hero
                {...section}
                videoask={videoask}
                key={`${section.slice_type}${index}`}
              />
            );
          case 'testimonials':
            return (
              <div
                className={style.testimonials}
                key={`${section.slice_type}${index}`}
              >
                <Testimonials {...section} />
              </div>
            );
          case 'solutions':
            return (
              <Solutions {...section} key={`${section.slice_type}${index}`} />
            );
          case 'technologies':
            return (
              <Technologies
                {...section}
                key={`${section.slice_type}${index}`}
              />
            );
          case 'features':
            return (
              <Features {...section} key={`${section.slice_type}${index}`} />
            );
          case 'featureschecklist':
            return (
              <FeaturesChecklist
                {...section}
                key={`${section.slice_type}${index}`}
              />
            );
          case 'works':
            return <Works {...section} key={`${section.slice_type}${index}`} />;
          case 'plans':
            return <Plans {...section} key={`${section.slice_type}${index}`} />;
          case 'articles':
            return (
              <Articles
                currentLanguage={currentLanguage}
                {...section}
                key={`${section.slice_type}${index}`}
              />
            );
          case 'subscribe':
            return (
              <Subscribe {...section} key={`${section.slice_type}${index}`} />
            );
          case 'agencies':
            return (
              <Agencies {...section} key={`${section.slice_type}${index}`} />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

Home.propTypes = {
  content: PropTypes.array.isRequired,
  currentLanguage: PropTypes.string.isRequired,
  videoask: PropTypes.object,
};

export default Home;
