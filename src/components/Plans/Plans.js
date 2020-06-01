import React from 'react';
import style from './Plans.module.scss';
import Card from './components/Card';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';

const Plans = ({ primary, fields }) => {
  return (
    <div className={style.plans}>
      <div className={style.title}>
        <RichText render={primary.title} />
      </div>
      <div className={style.container}>
        {fields.map((card, index) => {
          return (
            <Card
              {...card}
              type={card.type.toLowerCase()}
              key={`plans-card${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

Plans.propTypes = {
  primary: object,
  fields: array,
};

export default Plans;
