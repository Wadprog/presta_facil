import React from 'react';
import { object, string } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import ArticlePreview from '@components/ArticlePreview';
import style from './Articles.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import useGetImages from './useGetImages';

const Articles = ({ primary, data, currentLanguage }) => {
  const { buttontext, title } = primary;
  const articlesList = data.allPrismicBlogpostpage.edges;
  const currentLangArticles = articlesList.filter((article) => {
    const articleLang = article.node.lang
      ? article.node.lang
      : article.node.data.lang;
    return articleLang === currentLanguage;
  });
  const lastArticles = currentLangArticles.slice(0, 3);
  const { background } = useGetImages();

  return (
    <BackgroundImage
      fluid={background.childImageSharp.fluid}
      className={style.background}
    >
      <section className={style.articles}>
        <div className={style.title}>
          <RichText render={title.RichText} />
        </div>
        <div className={style.list}>
          {lastArticles.map((item) => {
            return <ArticlePreview {...item} key={item.node.uid} />;
          })}
        </div>
        {buttontext && (
          <div className={style.button}>
            <Button variant={VARIANT.TRANSPARENT} to="/blog">
              <RichText render={buttontext.RichText} />
            </Button>
          </div>
        )}
      </section>
    </BackgroundImage>
  );
};

Articles.propTypes = {
  primary: object,
  data: object,
  currentLanguage: string,
};

const SectionWithData = ({ primary, currentLanguage }) => {
  return (
    <StaticQuery
      query={graphql`
        query($lang: String) {
          allPrismicBlogpostpage(
            filter: { lang: { eq: $lang } }
            limit: 99
            sort: { fields: data___date, order: DESC }
          ) {
            edges {
              node {
                uid
                type
                lang
                id
                alternate_languages {
                  id
                  lang
                  type
                  uid
                }
                tags
                data {
                  backgroundpreview {
                    alt
                    url
                  }
                  date
                  description {
                    richText
                  }
                  title {
                    richText
                  }
                  preview {
                    alt
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Articles
          data={data}
          primary={primary}
          currentLanguage={currentLanguage}
        />
      )}
    />
  );
};

SectionWithData.propTypes = {
  primary: object,
  currentLanguage: string,
};

export default SectionWithData;
