import React, { useState } from 'react';
import style from './BookCall.module.scss';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';

const BookCall = ({ primary }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const { title, button, image } = primary;
  return (
    <section className={style.section}>
      <div className={style.block}>
        <div className={style.title}>
          <RichText render={title} />
        </div>
        <div className={style.buttonWrapper}>
          <Button
            variant={VARIANT.PRIMARY}
            element="button"
            click={handleOpenModal}
          >
            <RichText render={button} />
          </Button>
        </div>
      </div>
      <div className={style.imageWrapper}>
        <Image image={image} className={style.image} />
      </div>
      <ModalBookCall open={modalIsOpen} closeModal={handleCloseModal} />
    </section>
  );
};

BookCall.propTypes = {
  primary: object,
};

export default BookCall;
