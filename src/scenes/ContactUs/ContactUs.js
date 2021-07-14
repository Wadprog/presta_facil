import React from 'react';
import { object } from 'prop-types';

import GradientText from '@components/GradientText';
import { parseString } from '@helpers';
import Form from './components/Form/Form';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import style from './ContactUs.module.scss';

const ContactUs = ({ content, metatitle, canonical }) => {
  const { title } = content;

  return (
    <div className={style.HomePage}>
      <div className={style.container}>
        <h1 className={style.title}>
          <GradientText
            text={parseString(title.raw)}
            background="linear-gradient(87.97deg, #24b04b -46.17%, #0263bc 186.99%)"
          />
        </h1>
        <Form content={content} />
        <BreadcrumbsSemanticMarkup
          pageTitle={metatitle.text}
          pageUrl={canonical.text}
        />
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  content: object,
  canonical: object.isRequired,
  metatitle: object.isRequired,
};

export default ContactUs;
