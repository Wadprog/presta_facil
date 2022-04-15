import React, { useState } from 'react';
import { array, object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Footer.module.scss';
import Navigation from './components/Navigation';
import Books from './components/Books';
import LanguageSwitcher from '@components/LanguageSwitcher';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';
import Image from '@components/Image/Image';

const Footer = ({ data, activeDocMeta }) => {
  const primary = data[0].primary;
  const books = data[1];
  const socialIcons = data[0].items;
  const copyright = primary.copyright.text;
  const buttonVariant = VARIANT.PRIMARY;
  const badgesData = data.find((item) => item.slice_type === 'badges');
  const menuItemsData = data.filter((item) => item.slice_type === 'menu');

  const { items: badges } = badgesData;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCloseModal = () => setModalIsOpen(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModalIsOpen(!modalIsOpen);
  };

  const renderBadges = badges.map(({ badge }) => {
    return (
      <a
        href={primary.logolink.url}
        target="_blank"
        rel="noopener noreferrer"
        key={`${badge.url} prooflink`}
        className={style.badges}
      >
        <Image image={badge} key={badge.url} />
      </a>
    );
  });

  return (
    <>
      <ModalBookCall
        calendlyLink={primary.buttonlink.text}
        open={modalIsOpen}
        closeModal={handleCloseModal}
      />
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.banners}>
            <div className={style.quizWrapper}>
              <RichText render={primary.buttontitle.richText} />
              <Button
                variant={buttonVariant}
                isHeader={true}
                click={handleClick}
              >
                {primary.buttontext.text}
              </Button>
            </div>
            <Books data={books} />
          </div>
          <Navigation data={menuItemsData} activeDocMeta={activeDocMeta} />
          <div className={style.switcherWrapper}>
            <LanguageSwitcher activeDocMeta={activeDocMeta} />
          </div>
          <div className={style.wrapper}>
            <div className={style.badgesWrapper}>{renderBadges}</div>
            <p className={style.copyright}>{copyright}</p>
            <ul className={style.social}>
              {socialIcons.map(({ sociallink, socialogo }) => {
                return (
                  <li key={sociallink.url}>
                    <a
                      href={sociallink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image image={socialogo} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {
  data: array,
  activeDocMeta: object,
  books: object,
};

export default Footer;
