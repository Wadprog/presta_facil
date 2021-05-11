import React from 'react';
import PropTypes from 'prop-types';

import style from './Legal.module.scss';
import Text from './components/Text/Text';

const LegalPage = ({ current }) => {
  const { body } = current;
  if (!body) return null;

  const text = body.find((data) => data.type === 'text');
  if (!text) return null;

  return (
    <div className={style.page}>
      <div className={style.container}>
        <Text {...text} />
      </div>
    </div>
  );
};

LegalPage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default LegalPage;
