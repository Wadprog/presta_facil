import React from 'react';

import style from './Integration.module.scss';

const Integration = () => {
  return (
    <div className={style.integration}>
      <div className={style.container}>
        <h2 className={style.title}>
          <span>Easy to integrate</span>
          with the solutions you use
        </h2>
        <p className={style.descr}>
          Secure Privacy can easily be integrated with all major CMS systems and
          internet platforms.
        </p>
      </div>
    </div>
  );
};

export default Integration;
