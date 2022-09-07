import React, { useState, useEffect } from 'react';
import { object, array } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { RichText } from 'prismic-reactjs';

import Item from './components/Item';
import { useBreakpoints } from '@hooks';
import useGetImages from './useGetImages';
import style from './FeaturesCheckList.module.scss';

const FeaturesCheckList = ({ primary, items }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();
  const { background } = useGetImages();
  const { title, description, subtitle } = primary;

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);
  return (
    <BackgroundImage
      fluid={background.childImageSharp.fluid}
      className={style.background}
    >
      <div className={style.features}>
        <div className={style.container}>
          <div className={style.textContainer}>
            <div className={style.title}>
              <RichText render={title.richText} />
            </div>
            <div className={style.subtitle}>
              <RichText render={subtitle.richText} />
            </div>
            <div className={style.descr}>
              <RichText render={description.richText} />
            </div>
          </div>
          <div className={style.slider} key={buildKey}>
            <div className={style.swiperwrapper}>
              {items.map((item, index) => {
                return (
                  <div className={style.slide} key={`Features${index}`}>
                    <Item {...item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

FeaturesCheckList.propTypes = {
  primary: object,
  items: array,
};

export default FeaturesCheckList;
