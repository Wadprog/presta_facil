import React from 'react';
import style from './Card.module.scss';
import { RichText } from 'prismic-reactjs';
import { string, array, object } from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import Arrow from './image/arrow.inline.svg';
import Image from '@components/Image/Image';

const Card = ({
  benefits,
  button,
  buttonprice,
  cardtitle,
  description,
  image,
  imageSharp,
  type,
}) => {
  const classes = classnames({
    [style['card']]: true,
    [style[type]]: style[type],
  });

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
        {image && (
          <Image
            imageSharp={imageSharp}
            image={image}
            className={style.buttonImage}
          />
        )}

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
  image: object,
  imageSharp: object,
};

export default Card;
