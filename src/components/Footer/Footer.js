import React from 'react';
import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Footer.module.scss';
import Navigation from './components/Navigation';
import Books from './components/Books';
import useGetImage from './useGetImage';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const Footer = ({ primary, fields }) => {
  const { book, book2, book3 } = useGetImage();
  const booksList = [
    { image: book, link: '/' },
    { image: book2, link: '/' },
    { image: book3, link: '/' },
    { image: book, link: '/' },
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
        <Navigation data={menuList} />
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

const menuList = [
  {
    title: 'Compare',
    links: [
      {
        name: 'Coockiebot',
        link: '/',
      },
      {
        name: 'Cookiepro',
        link: '/',
      },
      {
        name: 'Iubenda',
        link: '/',
      },
      {
        name: 'OneTrust',
        link: '/',
      },
      {
        name: 'TrustArc',
        link: '/',
      },
    ],
  },
  {
    title: 'Solutions',
    links: [
      {
        name: 'GDPR (EU)',
        link: '/',
      },
      {
        name: 'ePrivacy (EU)',
        link: '/',
      },
      {
        name: 'CCPA (California)',
        link: '/',
      },
      {
        name: 'PIPEDIA (Canada)',
        link: '/',
      },
      {
        name: 'SB 220 (Nevada)',
        link: '/',
      },
      {
        name: 'PDPA (Thailand)',
        link: '/',
      },
      {
        name: 'IAB',
        link: '/',
      },
    ],
  },
  {
    title: 'Technologies',
    links: [
      {
        name: 'Wordpress',
        link: '/',
      },
      {
        name: 'Sitecore',
        link: '/',
      },
      {
        name: 'Magento',
        link: '/',
      },
      {
        name: 'Wix',
        link: '/',
      },
      {
        name: 'Shopify',
        link: '/',
      },
      {
        name: 'Drupal',
        link: '/',
      },
      {
        name: 'Squarespace',
        link: '/',
      },
      {
        name: 'Wordpress1',
        link: '/',
      },
      {
        name: 'Sitecore1',
        link: '/',
      },
      {
        name: 'Magento1',
        link: '/',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        name: 'Blog',
        link: '/',
      },
      {
        name: 'Contact Us',
        link: '/',
      },
      {
        name: 'Support',
        link: '/',
      },
      {
        name: 'Sign in',
        link: '/',
      },
      {
        name: 'Request Demo',
        link: '/',
      },
      {
        name: 'Try for Free',
        link: '/',
      },
      {
        name: 'Pricing',
        link: '/',
      },
      {
        name: 'Enterprise Benefits',
        link: '/',
      },
    ],
  },
];

Footer.propTypes = {
  primary: object,
  fields: array,
};

export default Footer;
