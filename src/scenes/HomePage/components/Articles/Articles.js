import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticlePreview from '@components/ArticlePreview';
import style from './Articles.module.scss';
import useGetImage from './useGetImage';
import Button, { VARIANT } from '@components/Button/Button.js';

const Articles = ({ primary }) => {
  const { article, article2, article3 } = useGetImage();

  const articlesList = [
    {
      image: article,
      title: 'Thailand PDPA Summary: What Businesses Need to Know',
      text:
        'Thailand’s Personal Data Protection Act (PDPA) was adopted into law',
      tag: '🇹🇭 PDPA',
      date: '28 feb 2020',
    },
    {
      image: article2,
      title: 'How to Obtain GDPR Cookie Consent after CJEU Cookie Ruling',
      text: 'In October 2019, the European Union’s Court of Justice (CJEU)',
      tag: '🇪🇺 GDPR',
      date: '24 feb 2020',
    },
    {
      image: article3,
      title: 'ePrivacy Regulation: What the Recent Delays Mean for Businesses',
      text:
        'In November 2019, the ePrivacy Regulation’s latest draft proposal, which...',
      tag: '🇪🇺 ePrivacy',
      date: '17 feb 2020',
    },
  ];
  return (
    <section className={style.articles}>
      <div className={style.title}>
        <RichText render={primary.title} />
      </div>
      <div className={style.list}>
        {articlesList.map((item) => {
          return <ArticlePreview {...item} key={item.title} />;
        })}
      </div>
      <div className={style.button}>
        <Button variant={VARIANT.TRANSPARENT}>
          {RichText.asText(primary.buttontext)}
        </Button>
      </div>
    </section>
  );
};

Articles.propTypes = {
  primary: object,
};

export default Articles;
