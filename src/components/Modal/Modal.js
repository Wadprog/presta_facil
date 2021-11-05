import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import { string, bool, func } from 'prop-types';
import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import style from './Modal.module.scss';
import Icon from './image/close-icon.inline.svg';

Modal.setAppElement('#___gatsby');

const ModalContainer = ({
  open,
  closeModal,
  videoLink,
  modalCtaButtonLink,
  modalCtaButtonText,
  removeCtaButton,
  autoPlay,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keyup', close);

    return () => window.removeEventListener('keyup', close);
  }, []);

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
        <ReactPlayer
          url={videoLink}
          playing={autoPlay}
          width="100%"
          height="100%"
          controls
        />
      </div>
      {!removeCtaButton && (
        <div className={style.button}>
          <Button variant={VARIANT.PRIMARY} to={modalCtaButtonLink}>
            {modalCtaButtonText}
          </Button>
        </div>
      )}
      <div className={style.buttonClose}>
        <IconButton variant={VARIANT_ICON.CLOSE} click={closeModal}>
          <Icon />
        </IconButton>
      </div>
    </Modal>
  );
};

ModalContainer.propTypes = {
  open: bool,
  closeModal: func,
  videoLink: string,
  modalCtaButtonLink: string,
  modalCtaButtonText: string,
  removeCtaButton: bool,
  autoPlay: bool,
};

ModalContainer.defaultProps = {
  videoLink: '',
  modalCtaButtonLink: '',
  modalCtaButtonText: '',
  autoPlay: false,
  removeCtaButton: false,
};

export default ModalContainer;
