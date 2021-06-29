import React from 'react';
import style from './ErrorPage.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import useGetImage from './useGetImage';

const ErrorPage = () => {
  const { logo } = useGetImage();
  return (
    <section className={style.page}>
      <div className={style.container}>
        <div className={style.textWrapper}>
          <h1 className={style.title}>404</h1>
          <h2 className={style.subtitle}>
            oops, The Page you are visiting does not exist 😯
          </h2>
          <p className={style.text}>
            If you think it is an error, please let us know!
          </p>
          <div className={style.buttonWrapper}>
            <Button variant={VARIANT.WHITE} to="/" fullWidth>
              go home
            </Button>
          </div>
        </div>
        <div className={style.imageWrapper}>
          <img src={logo.publicURL} alt="secure privacy" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
