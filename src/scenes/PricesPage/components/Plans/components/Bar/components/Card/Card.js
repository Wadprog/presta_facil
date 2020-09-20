import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import style from './Card.module.scss';

const Card = ({ title, name, cost, buttonText, buttonLink, colorized }) => {
  return (
    <div
      className={classnames(style.container, { [style.colorized]: colorized })}
    >
      <div className={style.main}>
        <div className={style.title}>
          <div className={style.type}>
            <RichText render={title} />
          </div>
          <div className={style.name}>{name}</div>
        </div>
        <div className={style.cost}>{cost}</div>
      </div>
      <div className={style.footer}>
        <a href={buttonLink.url} className={style.button}>
          {colorized ? (
            <span className={style.gradientText}>
              {RichText.asText(buttonText)}
            </span>
          ) : (
            <span>{RichText.asText(buttonText)}</span>
          )}
        </a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  colorized: false,
};

Card.propTypes = {
  title: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  buttonText: PropTypes.array.isRequired,
  buttonLink: PropTypes.object,
  colorized: PropTypes.bool.isRequired,
};

export default Card;
