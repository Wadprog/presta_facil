import React from 'react';
import { object } from 'prop-types';
import style from './EnterpricePage.module.scss';
import Hero from './components/Hero/Hero';

const EnterpricePage = ({ content }) => {
  const body = content.prismic.allPricesenterpricepages.edges[0].node.body;
  console.log(body);

  return (
    <div className={style.HomePage}>
      {body.map((section) => {
        switch (section.type) {
          case 'hero':
            return <Hero {...section} key={section.type} />;
          default:
            return;
        }
      })}
    </div>
  );
};

EnterpricePage.propTypes = {
  content: object.isRequired,
};

export default EnterpricePage;
