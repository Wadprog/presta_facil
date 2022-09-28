import React from 'react';
import { array, object } from 'prop-types';
import style from './Footer.module.scss';
import Image from '@components/Image/Image';

const Footer = ({ data }) => {
  const primary = data[0].primary;
  const copyright = primary.copyright.text;
  const badgesData = data.find((item) => item.slice_type === 'badges');

  const { items: badges } = badgesData;

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
      <footer className={style.footer}>
        <div className={style.wrapper}>
          <div className={style.badgesWrapper}>{renderBadges}</div>
          <p className={style.copyright}>{copyright}</p>
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
