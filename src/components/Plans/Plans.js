import React, { useState } from 'react';
import style from './Plans.module.scss';
import Card from './components/Card';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';

const Plans = ({ primary, fields }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCloseModal = () => setModalIsOpen(false);

  const handleClick = (e, type) => {
    if (type === 'enterprise') {
      e.preventDefault();
      setModalIsOpen(!modalIsOpen);
    }
  };

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
              handleClick={handleClick}
            />
          );
        })}
      </div>
      <ModalBookCall open={modalIsOpen} closeModal={handleCloseModal} />
    </div>
  );
};

Plans.propTypes = {
  primary: object,
  fields: array,
};

export default Plans;
