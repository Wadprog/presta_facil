import React, { useContext } from 'react';
import { Link } from 'gatsby';
import style from './Navigation.module.scss';
import { langPath } from '@helpers';
import { array } from 'prop-types';
import LangContext from '@contexts';

const Navigation = ({ data }) => {
  const currentLang = useContext(LangContext);
  return (
    <nav className={style.nav}>
      {data.map(({ primary, items }) => {
        const title = primary.title.text;
        return (
          <div className={style.item} key={title}>
            <h4 className={style.title}>{title}</h4>
            <ul className={style.list}>
              {items.map(({ name, pagename, externallink }) => {
                const linkName = name.text;
                const link =
                  (!externallink.url && langPath(currentLang)) +
                  '/' +
                  pagename.text;
                return (
                  <li className={style.link} key={linkName}>
                    {externallink.url ? (
                      <a href={externallink.url} target="_self">
                        {linkName}
                      </a>
                    ) : (
                      <Link to={link}>{linkName}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
};

Navigation.propTypes = {
  data: array,
};

export default Navigation;
