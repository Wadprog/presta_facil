import React from 'react';
import { object } from 'prop-types';
import style from './EnterpricePage.module.scss';
import Hero from './components/Hero/Hero';
import Feature from './components/Feature/Feature';
import Works from '@components/Works';

import BookCall from '@components/BookCall/BookCall';

const EnterpricePage = ({ content }) => {
  const body = content.prismic.allPricesenterpricepages.edges[0].node.body;
  const works = content.prismic.allHomepages.edges[0].node.body;
  const sections = [...body, ...works];
  let hero;
  let feature;
  let examples;
  let callBanner;
  sections.map((section) => {
    switch (section.type) {
      case 'hero':
        hero = section;
        break;
      case 'feature':
        feature = section;
        break;
      case 'works':
        examples = section;
        break;
      case 'callbanner':
        callBanner = section;
        break;
      default:
        return;
    }
  });

  return (
    <div className={style.HomePage}>
      <Hero {...hero} />
      <Feature {...feature} />
      <Works {...examples} />
      <BookCall {...callBanner} />
    </div>
  );
};

EnterpricePage.propTypes = {
  content: object.isRequired,
};

export default EnterpricePage;
