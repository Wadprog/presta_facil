import React from 'react';
import { Link } from 'gatsby';
import style from './Navigation.module.scss';
import { array } from 'prop-types';

const Navigation = ({ data }) => {
  return (
    <nav className={style.nav}>
      {data.map(({ title, links }) => {
        return (
          <div className={style.item} key={title}>
            <h4 className={style.title}>{title}</h4>
            <ul className={style.list}>
              {links.map(({ name, link }) => {
                return (
                  <li className={style.link} key={name}>
                    <Link to={link}>{name}</Link>
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
