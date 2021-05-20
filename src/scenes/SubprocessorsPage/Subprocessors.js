import React from 'react';
import PropTypes from 'prop-types';

import { parseString } from '@helpers';
import style from './Subprocessors.module.scss';

const SubprocessorsPage = ({ content }) => {
  const { pagetitle: pageTitle } = content;

  return (
    <div className={style.subprocessorsPage}>
      <div className={style.container}>
        <h1 className={style.title}>{parseString(pageTitle)}</h1>
      </div>
    </div>
  );
};

SubprocessorsPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SubprocessorsPage;
