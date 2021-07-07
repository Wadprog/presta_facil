import React from 'react';
import { string, object, func } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import Image from '@components/Image/Image';
import useGetImages from './useGetImages';
import Arrow from './image/arrow.inline.svg';
import style from './Card.module.scss';

const pickDestinationUrl = (url, type) => {
  const currentPageUrl =
    typeof window !== 'undefined' ? window.location.href : '';

  const mapping = {
    enterprise: currentPageUrl,
    business: url,
  };

  const destinationUrl = mapping[type];
  return destinationUrl;
};

const Card = ({
  benefits,
  button,
  buttonprice,
  cardtitle,
  description,
  image,
  imageSharp,
  type,
  handleClick,
  buttonUrl,
}) => {
  const { background } = useGetImages();
  const classes = classnames(style.container, {
    [style[type]]: style[type],
  });

  const destinationUrl = pickDestinationUrl(buttonUrl, type);

  return (
    <BackgroundImage
      fluid={background.childImageSharp.fluid}
      className={classes}
    >
      <a
        className={style.body}
        href={destinationUrl}
        onClick={(e) => handleClick(e, type)}
      >
        <h3 className={style.title}>{RichText.asText(cardtitle.raw)}</h3>
        <p className={style.text}>{RichText.asText(description.raw)}</p>
        <div className={style.benefit}>
          {benefits && <RichText render={benefits.raw} />}
        </div>
        <div className={style.button}>
          {buttonprice.raw.length > 0 && (
            <div className={style.priceWrapper}>
              <span>from</span>
              <p className={style.price}>{RichText.asText(buttonprice.raw)}</p>
            </div>
          )}
          {image.url && (
            <Image
              imageSharp={imageSharp}
              image={image}
              className={style.buttonImage}
            />
          )}
          <p className={style.buttonText}>{RichText.asText(button.raw)}</p>
          <Arrow />
        </div>
      </a>
    </BackgroundImage>
  );
};

Card.propTypes = {
  type: string,
  benefits: object,
  button: object,
  buttonprice: object,
  cardtitle: object,
  description: object,
  image: object,
  imageSharp: object,
  buttonUrl: string,
  handleClick: func,
};

export default Card;
