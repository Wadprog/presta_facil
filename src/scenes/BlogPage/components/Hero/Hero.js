import React, { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { array, object } from 'prop-types';
// import SlideItem from './SlideItem/SlideItem';
import style from './Hero.module.scss';
import { Link } from 'gatsby';

const Hero = ({ title, articles }) => {
  // TODO: remove/refactor after solution in post –– https://community.prismic.io/t/gatsby-prismic-wrong-text-tag/7693
  const getFixedTitle = (array, type) => {
    const titleClone = JSON.parse(JSON.stringify(array));
    titleClone[0].type = type;

    return titleClone;
  };

  let tagList = [];
  articles.forEach(({ node }) => {
    tagList = [...tagList, ...node.tags];
  });
  const uniqTagList = [...new Set(tagList)];

  useEffect(() => {
    console.log(articles);
  }, []);

  return (
    <section className={style.hero}>
      <div className={style.title}>
        <RichText render={getFixedTitle(title.richText, 'heading1')} />
      </div>
      <div className={style.slider}>
        {uniqTagList.map((item, index) => {
          return (
            <Link key={`${item}${index}`} to={`/${item.toLowerCase()}`}>
              <li className={style.tag}>{item}</li>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

Hero.propTypes = {
  articles: array,
  title: object,
  buttontext: array,
};

export default Hero;
