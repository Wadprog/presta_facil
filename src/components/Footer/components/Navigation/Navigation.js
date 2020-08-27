import React from 'react';
import { Link } from 'gatsby';
import style from './Navigation.module.scss';
import { parseString } from '@helpers';
import { array } from 'prop-types';

const Navigation = ({ data }) => {
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
                  const link = '/' + parseString(pagename);
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
