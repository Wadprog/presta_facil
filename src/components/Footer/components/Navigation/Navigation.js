import React, { useContext } from 'react';
import { Link } from 'gatsby';
import style from './Navigation.module.scss';
import { parseString, langPath } from '@helpers';
import { array } from 'prop-types';
import LangContext from '@contexts';

const Navigation = ({ data }) => {
  const currentLang = useContext(LangContext);
  return (
    <nav className={style.nav}>
      {data.map(({ type, primary, fields }) => {
        if (type === 'menu') {
          const title = parseString(primary.title);
          return (
            <div className={style.item} key={title}>
              <h4 className={style.title}>{title}</h4>
              <ul className={style.list}>
                {fields.map(({ name, pagename, externallink }) => {
                  const linkName = parseString(name);
                  const link =
                    (!externallink && langPath(currentLang)) +
                    '/' +
                    parseString(pagename);
                  return (
                    <li className={style.link} key={linkName}>
                      {externallink ? (
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
        }
      })}
    </nav>
  );
};

Navigation.propTypes = {
  data: array,
};

export default Navigation;
