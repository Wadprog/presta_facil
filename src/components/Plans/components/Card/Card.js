import React from 'react';
import style from './Card.module.scss';
import { RichText } from 'prismic-reactjs';
import { string, array, object } from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import Arrow from './image/arrow.inline.svg';
import Img from 'gatsby-image';

const Card = ({
  benefits,
  button,
  buttonprice,
  cardtitle,
  description,
  imageSharp,
  type,
}) => {
  const classes = classnames({
    [style['card']]: true,
    [style[type]]: style[type],
  });

  const image = imageSharp && imageSharp.childImageSharp.fluid;

  return (
    <Link className={classes} to="/">
      <h3 className={style.title}>{RichText.asText(cardtitle)}</h3>
      <p className={style.text}>{RichText.asText(description)}</p>
      <div className={style.benefit}>
        {benefits && <RichText render={benefits} />}
      </div>
      <div className={style.button}>
        {buttonprice && (
          <div className={style.priceWrapper}>
            <span>from</span>
            <p className={style.price}>{RichText.asText(buttonprice)}</p>
          </div>
        )}
        {image && <Img fluid={image} className={style.buttonImage} />}

        <p className={style.buttonText}>{RichText.asText(button)}</p>
        <Arrow />
      </div>
    </Link>
  );
};

Card.propTypes = {
  type: string,
  benefits: array,
  button: array,
  buttonprice: array,
  cardtitle: array,
  description: array,
  imageSharp: object,
};

export default Card;
