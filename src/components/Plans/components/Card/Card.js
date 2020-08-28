import React from 'react';
import { string, array, object, func } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';
import { parseUrl } from '@helpers';

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
  buttonlink,
  handleClick,
}) => {
  const { background } = useGetImages();
  const classes = classnames(style.container, {
    [style[type]]: style[type],
  });

  const link = parseUrl(buttonlink);

  return (
    <BackgroundImage
      fluid={background.childImageSharp.fluid}
      className={classes}
    >
      <a
        className={style.body}
        href={link}
        onClick={(e) => handleClick(e, type)}
      >
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
      </a>
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
  buttonlink: object,
  handleClick: func,
};

export default Card;
