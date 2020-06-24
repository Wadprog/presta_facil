import React from 'react';
import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Footer.module.scss';
import Navigation from './components/Navigation';
import Books from './components/Books';
import useGetImage from './useGetImage';
import { array } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const Footer = ({ data }) => {
  const { book, book2, book3 } = useGetImage();
  console.log(data);
  const primary = data[0].primary;
  const fields = data[0].fields;
  const booksList = [
    { image: book, link: 'books' },
    { image: book2, link: 'books' },
    { image: book3, link: 'books' },
    { image: book, link: 'books' },
  ];
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.banners}>
          <div className={style.quizWrapper}>
            <RichText render={primary.buttontitle} />
            <Button variant={VARIANT.PRIMARY}>
              {RichText.asText(primary.buttontext)}
            </Button>
          </div>
          <Books data={booksList} title={RichText.asText(primary.bookstitle)} />
        </div>
        <Navigation data={data} />
        <div className={style.wrapper}>
          <p className={style.copyright}>
            {RichText.asText(primary.copyright)}
          </p>
          <ul className={style.social}>
            {fields.map(({ sociallink, socialogo }) => {
              return (
                <li key={sociallink.url}>
                  <a href={sociallink.url}>
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
