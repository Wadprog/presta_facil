import React from 'react';
import { object } from 'prop-types';
import style from './LanguageSwitcher.module.scss';
import { navigate } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { defaultLanguage } from '@/prismic-config';

const LanguageSwitcher = ({ activeDocMeta }) => {
  const currentLang = activeDocMeta.lang;
  const currentLangOption = (
    <button className={style.button}>
      {currentLang.slice(0, 2).toUpperCase()}
    </button>
  );

  const alternateLangOptions = activeDocMeta.alternateLanguages.map(
    (altLang, index) => {
      const lang = {
        ...altLang,
        lang:
          altLang.lang.slice(0, 2) === defaultLanguage.slice(0, 2)
            ? ''
            : altLang.lang.slice(0, 2),
      };
      return (
        <button
          onClick={() => handleLangChange(linkResolver(lang))}
          key={`alt-lang-${index}`}
        >
          {altLang.lang.slice(0, 2).toUpperCase()}
        </button>
      );
    }
  );

  const handleLangChange = (link) => {
    navigate(link);
  };

  return (
    <div className={style.container}>
      <button className={style.selectedItem}>
        {currentLang.slice(0, 2).toUpperCase()}
      </button>

      <div className={style.dropDown}>
        {currentLangOption}
        {alternateLangOptions}
      </div>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  activeDocMeta: object,
};

export default LanguageSwitcher;
