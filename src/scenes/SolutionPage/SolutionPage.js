import React from 'react';
import PropTypes from 'prop-types';
import style from './SolutionPage.module.scss';
import 'swiper/swiper.scss';

import Hero from '@components/Hero';
import Projects from './components/Projects/Projects';
import Benefits from './components/Benefits/Benefits';
import Features from './components/Features/Features';
import Questions from '@components/Questions/Questions';
import Agencies from '@components/Agencies';
import Plans from '@components/Plans';
import Calendly from '@components/Calendly/Calendly';
import FaqSemanticMarkup from '@components/FaqSemanticMarkup/FaqSemanticMarkup';

const SolutionPage = ({ current: body, mainSection, pageUid }) => {
  const agenciesSection = mainSection[1].node.data.body2[0];
  const plansSection = mainSection[1].node.data.body2[1];
  const hospitalityPageUid = 'hospitality';
  const questions = body.filter((item) => item.slice_type === 'questions');
  const faqLists = questions.map((element) => element.items);
  const faqList = faqLists.flat();

  return (
    <div className={style.SolutionPage}>
      {body.map((section, index) => {
        switch (section.slice_type) {
          case 'hero':
            return <Hero {...section} key={`${section.slice_type}${index}`} />;
          case 'projects':
            return (
              <Projects {...section} key={`${section.slice_type}${index}`} />
            );
          case 'benefits':
            return (
              <Benefits {...section} key={`${section.slice_type}${index}`} />
            );
          case 'features':
            return (
              <Features {...section} key={`${section.slice_type}${index}`} />
            );
          case 'questions':
            return (
              <Questions {...section} key={`${section.slice_type}${index}`} />
            );
          case 'booking':
            return (
              <Calendly {...section} key={`${section.slice_type}${index}`} />
            );
          case 'plans':
            return (
              <Plans
                {...section}
                {...plansSection}
                key={`${section.type}${index}`}
              />
            );
        }
      })}
      {pageUid !== hospitalityPageUid && <Agencies {...agenciesSection} />}
      <FaqSemanticMarkup questions={faqList} />
    </div>
  );
};

SolutionPage.propTypes = {
  current: PropTypes.array.isRequired,
  mainSection: PropTypes.array,
  pageUid: PropTypes.string,
};

export default SolutionPage;
