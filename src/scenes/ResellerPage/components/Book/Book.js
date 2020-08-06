import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Book.module.scss';

const Book = ({ primary }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.message}>
          <div className={style.title}>
            <RichText render={primary.title} />
          </div>
          <div className={style.subtitle}>
            <RichText render={primary.subtitle} />
          </div>
          <div className={classnames(style.button, style.desktop)}>
            <Button
              to={RichText.asText(primary.buttonlink)}
              variant={VARIANT.PRIMARY}
              fullWidth={true}
            >
              {RichText.asText(primary.buttontext)}
            </Button>
          </div>
        </div>
        <div className={style.image}>
          <GatsbyImage fluid={primary.imageSharp.childImageSharp.fluid} />
        </div>
        <div className={classnames(style.button, style.mobile)}>
          <Button
            to={RichText.asText(primary.buttonlink)}
            variant={VARIANT.PRIMARY}
            fullWidth={true}
          >
            {RichText.asText(primary.buttontext)}
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
