import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './SolutionPage.module.scss';
import 'swiper/swiper.scss';
import { FAQJsonLd } from 'gatsby-plugin-next-seo';

import Hero from '@components/Hero';
import Projects from './components/Projects/Projects';
import Benefits from './components/Benefits/Benefits';
import Features from './components/Features/Features';
import Questions from '@components/Questions/Questions';
import Agencies from '@components/Agencies';
import Plans from '@components/Plans';
import Calendly from '@components/Calendly/Calendly';
import { parseString } from '@helpers';

const SolutionPage = ({ current, mainSection, pageUid, questions }) => {
  const body = current.data.body;
  const agenciesSection = mainSection[1].node.data.body2[0];
  const plansSection = mainSection[1].node.data.body2[1];
  const hospitalityPageUid = 'hospitality';

  const [faqMarkup, setFaqMarkup] = useState(null);

  useEffect(() => {
    const faqLists = questions.map((element) => element.items);
    const faqList = faqLists.flat();

    const makeFaqMarkupList = (questionsList) => {
      if (questionsList.length === 0) {
        return;
      }

      const markupList = questionsList.map(({ title, content }) => {
        return {
          question: parseString(title.raw),
          answer: parseString(content.raw),
        };
      });

      return <FAQJsonLd questions={markupList} />;
    };

    setFaqMarkup(makeFaqMarkupList(faqList));
  }, []);

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
      {faqMarkup}
    </div>
  );
};

SolutionPage.propTypes = {
  current: PropTypes.object.isRequired,
  mainSection: PropTypes.array,
  pageUid: PropTypes.string,
  questions: PropTypes.array,
};

export default SolutionPage;
