import React, { useContext } from 'react';
import { RichText } from 'prismic-reactjs';
import { array, object } from 'prop-types';
// import SlideItem from './SlideItem/SlideItem';
import style from './Hero.module.scss';
import { Link } from 'gatsby';
import LangContext from '@contexts';
import { langPath } from '@helpers';

const Hero = ({ title, articles, isCategory, categoryTitle }) => {
  const currentLang = useContext(LangContext);

  // TODO: remove/refactor after solution in post –– https://community.prismic.io/t/gatsby-prismic-wrong-text-tag/7693
  const getFixedTitle = (array, type) => {
    const titleClone = JSON.parse(JSON.stringify(array));
    titleClone[0].type = type;
    if (isCategory && isCategory.type === 'category') {
      titleClone[0].text = categoryTitle.text;
    }
    return titleClone;
  };

  let tagList = [];
  articles.forEach(({ node }) => {
    tagList = [...tagList, ...node.tags];
  });
  const uniqTagList = [...new Set(tagList)];

  return (
    <section className={style.hero}>
      <div
        className={`${style.title} ${
          isCategory && isCategory.type === 'category' && style.category
        }`}
      >
        <RichText render={getFixedTitle(title.richText, 'heading1')} />
      </div>
      <div className={style.slider}>
        {uniqTagList.map((item, index) => {
          return (
            <Link
              key={`${item}${index}`}
              to={`${langPath(currentLang)}/${item
                .replace(/\W+/g, '-')
                .toLowerCase()}`}
            >
              <li
                className={`${style.tag} ${
                  isCategory &&
                  isCategory.uid.replace('-', ' ').toLowerCase() ===
                    item.toLowerCase() &&
                  style.active
                }`}
              >
                {item}
              </li>
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
  isCategory: object,
  categoryTitle: object,
};

export default Hero;
