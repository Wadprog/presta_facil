import React from 'react';
import style from './Agencies.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';

const Agencies = ({ primary }) => {
  const image =
    (primary.imageSharp && primary.imageSharp.childImageSharp.fluid) || '';
  return (
    <section className={style.agencies}>
      <div className={style.container}>
        <div className={style.image}>
          <Img fluid={image} alt={primary.image.alt} draggable={false} />
        </div>
        <div className={style.textBlock}>
          <h2 className={style.title}>{RichText.asText(primary.title)}</h2>
          <p className={style.description}>
            {RichText.asText(primary.description)}
          </p>
          <Link to="" className={style.link}>
            Learn More
          </Link>
          <div className={style.button}>
            <Button variant={VARIANT.TRANSPARENT} fullWidth>
              {RichText.asText(primary.buttontext)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Agencies.propTypes = {
  primary: object,
  fields: array,
};

export default Agencies;
