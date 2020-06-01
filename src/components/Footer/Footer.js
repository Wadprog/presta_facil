import React from 'react';
import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Footer.module.scss';
import Navigation from './components/Navigation';
import Books from './components/Books';
import { Link } from 'gatsby';
import useGetImage from './useGetImage';

const Footer = () => {
  const { linkedin, twitter, book, book2, book3 } = useGetImage();
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
            <h3>Secure your privacy and website compliant </h3>
            <Button variant={VARIANT.PRIMARY}>Take the 2-min quiz</Button>
          </div>
          <Books data={booksList} />
        </div>
        <Navigation data={menuList} />
        <div className={style.wrapper}>
          <p className={style.copyright}>
            © Secure Privacy 2020. All Rights Reserved.
          </p>
          <ul className={style.social}>
            <li>
              <Link>
                <img src={linkedin.publicURL} alt="linkedin logo" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={twitter.publicURL} alt="twitter logo" />
              </Link>
            </li>
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

export default Footer;
