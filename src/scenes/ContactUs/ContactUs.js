import React from 'react';
import { object } from 'prop-types';
import style from './ContactUs.module.scss';
import GradientText from '@components/GradientText';
import { parseString } from '@helpers';
import Form from './components/Form/Form';

const ContactUs = ({ content }) => {
  const body = content.prismic.allContacts.edges[0].node;
  const { title } = body;
  return (
    <div className={style.HomePage}>
      <div className={style.container}>
        <h1 className={style.title}>
          <GradientText
            text={parseString(title)}
            background="linear-gradient(87.97deg, #24b04b -46.17%, #0263bc 186.99%)"
          />
        </h1>
        <Form {...body} />
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  content: object,
};

export default ContactUs;
