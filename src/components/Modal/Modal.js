import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import { string, bool, func } from 'prop-types';
import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Modal.module.scss';
import Icon from './image/close-icon.inline.svg';

Modal.setAppElement('#___gatsby');

const ModalContainer = ({ open, closeModal, videoLink }) => {
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
        <ReactPlayer url={videoLink} width="100%" height="100%" controls />
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
  open: bool,
  closeModal: func,
  videoLink: string,
};

export default ModalContainer;
