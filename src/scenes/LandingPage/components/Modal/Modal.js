import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { string, bool, func, any } from 'prop-types';
import style from './Modal.module.scss';

Modal.setAppElement('#___gatsby');

const ModalContainer = ({ open, closeModal, children }) => {
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
      padding: '0',
      background: 'rgba(3, 13,33, 0.75)',
    },
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className={style.container}>{children}</div>
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
  children: any,
};

ModalContainer.defaultProps = {
  videoLink: '',
  modalCtaButtonLink: '',
  modalCtaButtonText: '',
  autoPlay: false,
  removeCtaButton: false,
};

export default ModalContainer;
