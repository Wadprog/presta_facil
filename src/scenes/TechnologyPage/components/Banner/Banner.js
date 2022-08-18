import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Button, { VARIANT } from '@components/Button/Button.js';
import { Link } from 'gatsby';

import { isExternalUrl } from '@helpers';
import styles from './Banner.module.scss';

const Banner = ({ primary }) => {
  const { title, text, buttontext, buttonlink, link, linktext } = primary;
  const buttonUrl = buttonlink.text;
  const promoLink = link.text;
  const promoLinkText = linktext.text;
  if (isExternalUrl(promoLink)) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <RichText render={title.richText} />
            </div>
            <div className={styles.buttonWrapper}>
              <Button variant={VARIANT.PRIMARY} to={buttonUrl} fullWidth>
                {buttontext.text}
              </Button>
              <a href={promoLink} className={styles.link}>
                {promoLinkText}
              </a>
            </div>
          </div>
          <div className={styles.text}>
            <RichText render={text.richText} />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <RichText render={title.richText} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button variant={VARIANT.PRIMARY} to={buttonUrl} fullWidth>
              {'ASDASD'}
              <RichText render={buttontext.richText} />
            </Button>
            <Link to={promoLink} className={styles.link}>
              {promoLinkText}
            </Link>
          </div>
        </div>
        <div className={styles.text}>
          <RichText render={text.richText} />
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  primary: object,
};

export default Banner;
