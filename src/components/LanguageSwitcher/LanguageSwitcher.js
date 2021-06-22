import React, { useState } from 'react';
import { object } from 'prop-types';
import style from './LanguageSwitcher.module.scss';
import { navigate } from 'gatsby';
import linkResolver from '../../../prismic/utils/linkResolver';
import { defaultLanguage } from '@/prismic-config';
import Arrow from './image/arrow.inline.svg';
import classnames from 'classnames';

const LANGUAGE = {
  EN: {
    FULL_NAME: 'English',
    SHORT_NAME: 'en',
  },
  PT: {
    FULL_NAME: 'Portuguese',
    SHORT_NAME: 'pt',
  },
};

const LanguageSwitcher = ({ activeDocMeta }) => {
  const currentLang = activeDocMeta
    ? activeDocMeta.lang.slice(0, 2)
    : defaultLanguage.slice(0, 2);

  const [isOpen, setIsOpen] = useState(false);
  const alternateLanguages = activeDocMeta.alternate_languages;

  const convertToFullName = (shortName, LANGUAGE) => {
    for (const lang of Object.values(LANGUAGE)) {
      if (lang.SHORT_NAME === shortName) {
        return lang.FULL_NAME;
      }
    }

    return shortName;
  };

  const handleLangChange = (link) => {
    navigate(link);
  };

  return (
    <div className={style.container}>
      <div onClick={() => setIsOpen(!isOpen)} className={style.dropdown}>
        {convertToFullName(currentLang, LANGUAGE)}
        <span
          className={classnames([style.arrow, { [style.rotateArrow]: isOpen }])}
        >
          <Arrow />
        </span>
      </div>

      <ul
        className={classnames([style.dropdownList, { [style.opened]: isOpen }])}
      >
        <li className={classnames([style.dropdownItem, style.active])}>
          {convertToFullName(currentLang, LANGUAGE)}
        </li>
        {alternateLanguages.length > 0 &&
          alternateLanguages.map((altLang, index) => {
            const altLangShort = altLang.lang.slice(0, 2);
            const lang = {
              ...altLang,
              lang: altLang.lang === defaultLanguage ? '' : altLangShort,
            };
            return (
              <li
                className={style.dropdownItem}
                onClick={() => handleLangChange(linkResolver(lang))}
                key={`alt-lang-${index}`}
              >
                {convertToFullName(altLangShort, LANGUAGE)}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  activeDocMeta: object,
};

export default LanguageSwitcher;
