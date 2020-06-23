import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Button, { VARIANT } from '@components/Button/Button.js';
import { Link } from 'gatsby';

import styles from './Banner.module.scss';

const Banner = ({ primary }) => {
  const { title, text, buttontext } = primary;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <RichText render={title} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button variant={VARIANT.PRIMARY} fullWidth>
              <RichText render={buttontext} />
            </Button>
            <Link to="/" className={styles.link}>
              Or Sign Up To Secure Privacy
            </Link>
          </div>
        </div>
        <div className={styles.text}>
          <RichText render={text} />
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  primary: object,
};

export default Banner;
