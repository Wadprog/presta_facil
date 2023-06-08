import React from 'react';

// import PropTypes from 'prop-types';
// import { RichText } from 'prismic-reactjs';
// import classnames from 'classnames';

// import { parseString } from '@helpers';
import style from './EnterpriseCard.module.scss';
import Button from './components/Button/Button';

const EnterpriseCard = () => {
  return (
    <div className={style.container}>
      <div className={style.body}>
        <div className={style.left}>
          <div className={style.title}>
            Are you an Enterprise and have a Custom Requirements?
          </div>

          <div className={style.subTitle}>Contact us for a tailared demo.</div>
        </div>

        <div className={style.right}>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default EnterpriseCard;
