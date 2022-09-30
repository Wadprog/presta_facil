import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './HomePage.module.scss';
import Hero from './components/Hero';
import Footer from './components/Footer';

import Testimonials from '@components/Testimonials';
import Solutions from './components/Solutions';
import Technologies from './components/Technologies';
import Features from './components/Features';
import FeaturesChecklist from './components/FeaturesCheckList';

import Works from '@components/Works';
import Plans from '@components/Plans';
import Articles from '@components/Articles/Articles';
import Subscribe from '@components/LandingPageCta';
import Agencies from '@components/Agencies';
import 'swiper/swiper.scss';
import Modal from './components/Modal';
import Form from './components/Modal/Form/Form';

const Home = ({
  content,
  currentLanguage,
  videoask,
  compliance_cta_active,
}) => {
  const option1cta = content.find((item) => item.slice_type === 'option_1_cta');

  const footer = content.find((item) => item.slice_type === 'footer');

  const [ctaIsOpen, setCtaIsOpen] = useState(false);
  const handleCloseCta = () => setCtaIsOpen(false);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setCtaIsOpen(!ctaIsOpen);
  // };

  return (
    <>
      <div className={style.HomePage}>
        {content.map((section, index) => {
          switch (section.slice_type) {
            case 'hero1':
              return (
                <Hero
                  {...section}
                  handleCTAClick={setCtaIsOpen}
                  compliance_cta_active={compliance_cta_active}
                  videoask={videoask}
                  key={`${section.slice_type}${index}`}
                />
              );
            case 'footer':
              return (
                <Footer
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
              return (
                <Works {...section} key={`${section.slice_type}${index}`} />
              );
            case 'plans':
              return (
                <Plans {...section} key={`${section.slice_type}${index}`} />
              );
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
                <div className={style.subscribeContainer}>
                  <Subscribe
                    {...section}
                    key={`${section.slice_type}${index}`}
                  />
                </div>
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
      <Modal open={ctaIsOpen} closeModal={handleCloseCta}>
        <div className={style.ctaContainer}>
          <div className={style.ctaContainerLeft}>
            <Footer {...footer} videoask={videoask} isModal={true} />
          </div>
          <div className={style.ctaContainerRight}>
            <Form content={option1cta?.primary} />
          </div>
        </div>
      </Modal>
    </>
  );
};

Home.propTypes = {
  content: PropTypes.array.isRequired,
  currentLanguage: PropTypes.string.isRequired,
  videoask: PropTypes.object,
  compliance_cta_active: PropTypes.boolean,
};

export default Home;
