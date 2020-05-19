import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Modal.module.scss';
import Icon from './image/close-icon.inline.svg';

Modal.setAppElement('#___gatsby');

const ModalContainer = ({ open, closeModal }) => {
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const customStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: 120,
      border: 'none',
      background: 'rgba(3, 13,33, 0.75)',
    },
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className={style.container}>
        <video className={style.video} autoPlay>
          <source src="" type="video/mp4"></source>
        </video>
      </div>
      <div className={style.button}>
        <Button variant={VARIANT.PRIMARY}>take 2-min quiz</Button>
      </div>
      <div className={style.buttonClose}>
        <Button variant={VARIANT.CLOSE} click={closeModal}>
          <Icon />
        </Button>
      </div>
    </Modal>
  );
};

ModalContainer.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default ModalContainer;
