import React, { useRef } from 'react';
import { object, array } from 'prop-types';

import Hero from './components/Hero/Hero';
import Feature from './components/Feature/Feature';
import Works from '@components/Works';
import Testimonials from '@components/Testimonials';
import BookCall from '@components/BookCall/BookCall';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import style from './EnterpricePage.module.scss';

const EnterpricePage = ({
  content,
  worksSection,
  testimonialsSection,
  metatitle,
  canonical,
}) => {
  const sections = [...content, worksSection, testimonialsSection];
  let hero;
  let feature;
  let examples;
  let callBanner;
  let reviews;
  sections.map((section) => {
    switch (section.slice_type) {
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
      case 'testimonials':
        reviews = section;
        break;
      default:
        throw new Error(`Unknown section type: ${section.slice_type}`);
    }
  });

  const scrollToRef = useRef(null);
  const scrollTo = (ref, offset) =>
    window.scrollTo(offset, ref.current.offsetTop - offset);

  const handleScroll = () => {
    scrollTo(scrollToRef, 150);
  };

  return (
    <div className={style.HomePage}>
      <Hero handleScroll={handleScroll} {...hero} />
      <Feature scrollToRef={scrollToRef} {...feature} />
      <Testimonials {...reviews} />
      <Works {...examples} />
      <BookCall {...callBanner} />
      <BreadcrumbsSemanticMarkup
        pageTitle={metatitle.text}
        pageUrl={canonical.text}
      />
    </div>
  );
};

EnterpricePage.propTypes = {
  content: array.isRequired,
  worksSection: object.isRequired,
  testimonialsSection: object.isRequired,
  canonical: object.isRequired,
  metatitle: object.isRequired,
};

export default EnterpricePage;
