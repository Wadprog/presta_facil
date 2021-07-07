import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import style from './Book.module.scss';

const Book = ({ primary }) => {
  const { buttonlink, buttontext, image, title, subtitle } = primary;
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.message}>
          <div className={style.title}>
            <RichText render={title.raw} />
          </div>
          <div className={style.subtitle}>
            <RichText render={subtitle.raw} />
          </div>
          <div className={classnames(style.button, style.desktop)}>
            <Button
              to={RichText.asText(buttonlink.raw)}
              variant={VARIANT.PRIMARY}
              fullWidth={true}
            >
              {RichText.asText(buttontext.raw)}
            </Button>
          </div>
        </div>
        <div className={style.image}>
          <Image image={image} fluid={image.fluid} />
        </div>
        <div className={classnames(style.button, style.mobile)}>
          <Button
            to={RichText.asText(buttonlink.raw)}
            variant={VARIANT.PRIMARY}
            fullWidth={true}
          >
            {RichText.asText(buttontext.raw)}
          </Button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  primary: PropTypes.object.isRequired,
};

export default Book;
