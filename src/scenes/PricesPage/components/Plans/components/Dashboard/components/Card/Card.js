import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import style from './Card.module.scss';

const Card = ({
  colorized,
  disabled,
  title,
  name,
  cost,
  condition,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className={classnames(style.container, {
        [style.colorized]: colorized,
        [style.disabled]: disabled,
      })}
    >
      <div className={style.body}>
        <div className={style.title}>
          <RichText render={title} />
        </div>
        <div className={style.subtitle}>
          <RichText render={name} />
        </div>
        <div className={style.cost}>{cost}</div>
        <div className={style.condition}>
          <RichText render={condition} />
        </div>
        <div className={style.text}>
          <RichText render={description} />
        </div>
        <div className={style.footer}>
          <GatsbyLink to={RichText.asText(buttonLink)} className={style.button}>
            {colorized ? (
              <span className={style.gradientText}>
                {RichText.asText(buttonText)}
              </span>
            ) : (
              <span>{RichText.asText(buttonText)}</span>
            )}
          </GatsbyLink>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  colorized: false,
};

Card.propTypes = {
  colorized: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  title: PropTypes.array.isRequired,
  name: PropTypes.array.isRequired,
  cost: PropTypes.number.isRequired,
  condition: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  buttonText: PropTypes.array.isRequired,
  buttonLink: PropTypes.array.isRequired,
};

export default Card;