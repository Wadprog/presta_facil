import React from 'react';

import GradientText from '@components/GradientText';
import DefaultIcon from './images/check-grey.inline.svg';
import GradientIcon from './images/check-gradient.inline.svg';

const parseCellValue = function (value = '', { withGradient } = {}) {
  switch (value) {
    case 'yes':
      return withGradient ? <GradientIcon /> : <DefaultIcon />;
    case 'no':
      return false;
    case '':
      return false;
    case '∞':
      return 'Unlimited';
    case !isNaN(parseInt(value)):
      return parseInt(value);
    default:
      return withGradient ? (
        <GradientText
          text={value}
          background={
            'linear-gradient(87.97deg, #24b04b -46.17%, #0263bc 186.99%)'
          }
        />
      ) : (
        <span className="default-text">{value}</span>
      );
  }
};

export { parseCellValue };
