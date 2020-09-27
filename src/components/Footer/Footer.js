import React from 'react';
import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Footer.module.scss';
import Navigation from './components/Navigation';
import Books from './components/Books';
import { array, object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { parseString } from '@helpers';
import Image from '@components/Image/Image';
import LanguageSwitcher from '@components/LanguageSwitcher';

const Footer = ({ data, activeDocMeta }) => {
  const primary = data[0].primary;
  const books = data[1];
  const fields = data[0].fields;
  const buttonLink = '/' + parseString(primary.buttonlink);
  const buttonText = parseString(primary.buttontext);
  const copyright = parseString(primary.copyright);
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.banners}>
          <div className={style.quizWrapper}>
            <RichText render={primary.buttontitle} />
            <Button variant={VARIANT.PRIMARY} to={buttonLink}>
              {buttonText}
            </Button>
          </div>
          <Books data={books} />
        </div>
        <Navigation data={data} activeDocMeta={activeDocMeta} />
        <div className={style.switcherWrapper}>
          <LanguageSwitcher activeDocMeta={activeDocMeta} />
        </div>
        <div className={style.wrapper}>
          <a
            href={primary.logolink.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={style.logoWrapper}>
              <Image image={primary.logo} className={style.logo} />
              <RichText render={primary.logotext} />
            </div>
          </a>
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
                    <Image image={socialogo} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  data: array,
  activeDocMeta: object,
  books: object,
};

export default Footer;
