import React, { useState, useEffect } from 'react';
import lozad from 'lozad';

import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Footer.module.scss';
import Navigation from './components/Navigation';
import Books from './components/Books';
import { array, object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { parseString } from '@helpers';
import LanguageSwitcher from '@components/LanguageSwitcher';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';

const TEXT = 'Schedule a Demo';

const Footer = ({ data, activeDocMeta }) => {
  const primary = data[0].primary;
  const books = data[1];
  const fields = data[0].fields;
  const copyright = parseString(primary.copyright);
  const buttonVariant = VARIANT.PRIMARY;
  const badgesData = data.find((item) => item.type === 'badges');
  if (!badgesData) return null;
  const { fields: badges } = badgesData;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCloseModal = () => setModalIsOpen(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  const renderBadges = badges.map(({ badge }) => {
    return (
      <a
        href={primary.logolink.url}
        target="_blank"
        rel="noopener noreferrer"
        key={`${badge.url} prooflink`}
        className={style.badges}
      >
        <img data-src={badge.url} key={badge.url} className="lozad" />
      </a>
    );
  });

  return (
    <>
      <ModalBookCall open={modalIsOpen} closeModal={handleCloseModal} />
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.banners}>
            <div className={style.quizWrapper}>
              <RichText render={primary.buttontitle} />
              <Button
                variant={buttonVariant}
                isHeader={true}
                click={handleClick}
              >
                {TEXT}
              </Button>
            </div>
            <Books data={books} />
          </div>
          <Navigation data={data} activeDocMeta={activeDocMeta} />
          <div className={style.switcherWrapper}>
            <LanguageSwitcher activeDocMeta={activeDocMeta} />
          </div>
          <div className={style.wrapper}>
            <div className={style.badgesWrapper}>{renderBadges}</div>
            <p className={style.copyright}>{copyright}</p>
            <ul className={style.social}>
              {fields.map(({ sociallink, socialogo }) => {
                return (
                  <li key={sociallink.url}>
                    <a
                      href={sociallink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img data-src={socialogo.url} className="lozad" />
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
