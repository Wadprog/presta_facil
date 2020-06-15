import React from 'react';
import styles from './Calendly.module.scss';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const Calendly = ({ primary }) => {
  return (
    <section className={styles.calendly}>
      <div className={styles.title}>
        <RichText render={primary.title} />
      </div>
      <div className={styles.calendar}>
        <iframe
          src="https://calendly.com/secure-privacy/secure-privacy-call?background_color=F7F9FB"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
};

Calendly.propTypes = {
  primary: object,
};

export default Calendly;
