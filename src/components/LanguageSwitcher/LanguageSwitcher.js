import React from 'react';
import { object } from 'prop-types';
import style from './LanguageSwitcher.module.scss';
import { navigate } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { defaultLanguage } from '@/prismic-config';

const LanguageSwitcher = ({ activeDocMeta }) => {
  const currentLang = activeDocMeta.lang;
  const currentLangOption = (
    <option value={currentLang}>{currentLang.slice(0, 2).toUpperCase()}</option>
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
        <option value={linkResolver(lang)} key={`alt-lang-${index}`}>
          {altLang.lang.slice(0, 2).toUpperCase()}
        </option>
      );
    }
  );

  const handleLangChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <li className={style.container}>
      <select value={currentLang} onChange={handleLangChange}>
        {currentLangOption}
        {alternateLangOptions}
      </select>
    </li>
  );
};

LanguageSwitcher.propTypes = {
  activeDocMeta: object,
};

export default LanguageSwitcher;
