import React from 'react';
import { string, array, object } from 'prop-types';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import Image from '@components/Image/Image';
import useGetImages from './useGetImages';
import Arrow from './image/arrow.inline.svg';
import style from './Card.module.scss';

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
  const { background } = useGetImages();
  const classes = classnames(style.container, {
    [style[type]]: style[type],
  });

  return (
    <BackgroundImage
      fluid={background.childImageSharp.fluid}
      className={classes}
    >
      <Link className={style.body} to="/">
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
    </BackgroundImage>
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
