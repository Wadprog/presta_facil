import React from 'react';
import PropTypes from 'prop-types';
import style from './HomePage.module.scss';
import Hero from './components/Hero';
import Testimonials from '@components/Testimonials';
import Solutions from './components/Solutions';
import Technologies from './components/Technologies';
import Features from './components/Features';
import Works from '@components/Works';
import Plans from '@components/Plans';
import Articles from '@components/Articles/Articles';
import Subscribe from '@components/Subscribe';
import Agencies from '@components/Agencies';
import 'swiper/swiper.scss';
import LangContext from '@contexts';

const Home = ({ content, currentLanguage }) => {
  const body = content.prismic.allHomepages.edges[0].node.body;
  return (
    <div className={style.HomePage}>
      {body.map((section, index) => {
        switch (section.type) {
          case 'hero1':
            return <Hero {...section} key={`${section.type}${index}`} />;
          case 'testimonials':
            return (
              <div
                className={style.testimonials}
                key={`${section.type}${index}`}
              >
                <Testimonials {...section} />
              </div>
            );
          case 'solutions':
            return <Solutions {...section} key={`${section.type}${index}`} />;
          case 'technologies':
            return (
              <Technologies {...section} key={`${section.type}${index}`} />
            );
          case 'features':
            return <Features {...section} key={`${section.type}${index}`} />;
          case 'works':
            return <Works {...section} key={`${section.type}${index}`} />;
          case 'plans':
            return <Plans {...section} key={`${section.type}${index}`} />;
          case 'articles':
            return (
              <LangContext.Provider value={currentLanguage}>
                <Articles {...section} key={`${section.type}${index}`} />
              </LangContext.Provider>
            );
          case 'subscribe':
            return <Subscribe {...section} key={`${section.type}${index}`} />;
          case 'agencies':
            return <Agencies {...section} key={`${section.type}${index}`} />;
        }
      })}
    </div>
  );
};

Home.propTypes = {
  content: PropTypes.object.isRequired,
  currentLanguage: PropTypes.string.isRequired,
};

export default Home;
