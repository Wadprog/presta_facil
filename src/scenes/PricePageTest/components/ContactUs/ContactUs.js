import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Button, { VARIANT } from '@components/Button/Button.js';
import style from './ContactUs.module.scss';

const ContactUs = ({ primary }) => {
  const {
    buttonlink: buttonLink,
    buttontext: buttonText,
    subtitle: subTitle,
  } = primary;
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.button}>
          <Button
            to={RichText.asText(buttonLink.richText)}
            variant={VARIANT.PRIMARY}
            fullWidth={true}
          >
            {RichText.asText(buttonText.richText)}
          </Button>
        </div>
        <div className={style.subtitle}>
          <RichText render={subTitle.richText} />
        </div>
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  primary: PropTypes.object.isRequired,
};

export default ContactUs;
