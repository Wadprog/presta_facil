import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { bool, func } from 'prop-types';
import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import style from './ModalBookCall.module.scss';
import Icon from './image/close-icon.inline.svg';

Modal.setAppElement('#___gatsby');

const ModalBookCall = ({ open, closeModal }) => {
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
        <iframe
          src="https://calendly.com/secure-privacy/45min"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
      <div className={style.button}>
        <Button variant={VARIANT.PRIMARY} to="/quiz">
          take the 2-min quiz
        </Button>
      </div>
      <div className={style.buttonClose}>
        <IconButton variant={VARIANT_ICON.CLOSE} click={closeModal}>
          <Icon />
        </IconButton>
      </div>
    </Modal>
  );
};

ModalBookCall.propTypes = {
  open: bool,
  closeModal: func,
};

export default ModalBookCall;
