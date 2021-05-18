import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import lozad from 'lozad';

import styles from './Calendly.module.scss';

const Calendly = ({ primary }) => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  return (
    <section className={styles.calendly}>
      <div className={styles.title}>
        <RichText render={primary.title} />
      </div>
      <div className={styles.calendar}>
        <iframe
          data-src="https://calendly.com/secure-privacy/45min"
          sp-consent="Calendly"
          width="100%"
          height="100%"
          frameBorder="0"
          className="lozad"
        ></iframe>
      </div>
    </section>
  );
};

Calendly.propTypes = {
  primary: object,
};

export default Calendly;
