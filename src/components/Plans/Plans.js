import React, { useState } from 'react';
import style from './Plans.module.scss';
import Card from './components/Card';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';

import ModalBookCall from '@components/ModalBookCall/ModalBookCall';
import { parseUrl } from '../../helpers/utils';

const Plans = ({ primary, items }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCloseModal = () => setModalIsOpen(false);
  const firstCardData = items[0];
  const buttonUrl = parseUrl(firstCardData.buttonlink);
  const { title } = primary;

  const handleClick = (e, type) => {
    if (type === 'enterprise') {
      e.preventDefault();
      setModalIsOpen(!modalIsOpen);
    }
  };

  return (
    <div className={style.plans}>
      <div className={style.title}>
        <RichText render={title.raw} />
      </div>
      <div className={style.container}>
        {items.map((card, index) => {
          return (
            <Card
              {...card}
              type={card.type.toLowerCase()}
              key={`plans-card${index}`}
              handleClick={handleClick}
              buttonUrl={buttonUrl}
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
  items: array,
};

export default Plans;
