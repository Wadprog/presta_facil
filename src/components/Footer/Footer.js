import React from 'react';
import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Footer.module.scss';
import Navigation from './components/Navigation';
import Books from './components/Books';
import useGetImage from './useGetImage';
import { array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { parseString } from '@helpers';

const Footer = ({ data }) => {
  const { book, book2, book3 } = useGetImage();
  const primary = data[0].primary;
  const fields = data[0].fields;
  const booksList = [
    { image: book, link: 'books' },
    { image: book2, link: 'books' },
    { image: book3, link: 'books' },
    { image: book, link: 'books' },
  ];
  const buttonLink = parseString(primary.buttonlink);
  const buttonText = parseString(primary.buttontext);
  const booksTitle = parseString(primary.bookstitle);
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
          <Books data={booksList} title={booksTitle} />
        </div>
        <Navigation data={data} />
        <div className={style.wrapper}>
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
                    <img src={socialogo.url} alt={socialogo.alt} />
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
};

export default Footer;
