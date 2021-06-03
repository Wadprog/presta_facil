import React, { useContext } from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';

import ArticlePreview from '@components/ArticlePreview';
import style from './Articles.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import LangContext from '@contexts';

const Articles = ({ primary, data }) => {
  const currentLanguage = useContext(LangContext);
  const { buttontext } = primary;
  const articlesList = data.prismic.allBlogpostpages.edges;
  const currentLangArticles = articlesList.filter(
    (article) => article.node._meta.lang === currentLanguage
  );
  const lastArticles = currentLangArticles.slice(0, 3);

  return (
    <section className={style.articles}>
      <div className={style.title}>
        <RichText render={primary.title} />
      </div>
      <div className={style.list}>
        {lastArticles.map((item) => {
          return <ArticlePreview {...item} key={item.node._meta.uid} />;
        })}
      </div>
      {buttontext && (
        <div className={style.button}>
          <Button variant={VARIANT.TRANSPARENT} to="/blog">
            {RichText.asText(primary.buttontext)}
          </Button>
        </div>
      )}
    </section>
  );
};

Articles.propTypes = {
  primary: object,
  data: object,
};

const SectionWithData = ({ primary }) => {
  return (
    <StaticQuery
      query={`${query}`}
      render={withPreview(
        (data) => (
          <Articles data={data} primary={primary} />
        ),
        query
      )}
    />
  );
};

SectionWithData.propTypes = {
  primary: object,
};

const query = graphql`
  query {
    prismic {
      allBlogpostpages(sortBy: date_DESC, first: 99) {
        edges {
          node {
            _linkType
            _meta {
              tags
              uid
              type
              lang
              alternateLanguages {
                lang
                type
                uid
              }
            }
            date
            description
            preview
            title
          }
        }
      }
    }
  }
`;

export default SectionWithData;
