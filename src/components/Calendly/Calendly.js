import React, { useEffect } from 'react';
import { object } from 'prop-types';
import lozad from 'lozad';

import styles from './Calendly.module.scss';

const Calendly = ({ primary }) => {
  const { title } = primary;

  const titleText =
    title.richText.length === 1
      ? title.richText[0].text.split('\n')
      : [title.richText[0].text, title.richText[1].text];

  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  return (
    <section className={styles.calendly}>
      <div className={styles.title}>
        <h2>
          <strong>{titleText[0]}</strong>
          <br />
          {titleText[1]}
        </h2>
      </div>
      <div className={styles.calendar}>
        <iframe
          data-src="https://calendly.com/secure-privacy/45min?hide_gdpr_banner=1"
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
