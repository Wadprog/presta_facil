import React from 'react';

import style from './Header.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import SingInButton from '@components/SingInButton';

import GradientText from '@components/GradientText';
import Logo from './components/Logo';
import Menu from './components/Menu';

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.slogan}>
          <GradientText
            text="Integrate. Automate. Comply"
            background="linear-gradient(87.97deg, #24b04b -46.17%, #0263bc 186.99%)"
          />
        </div>
        <div className={style.button}>
          <Button variant={VARIANT.TRANSPARENT_GREEN}>
            <GradientText
              text="take 2-min quiz"
              background="linear-gradient(86.37deg, #24B04B -46.17%, #0263BC 186.99%)"
            />
          </Button>
        </div>
      </div>
      <div className={style.bottom}>
        <Logo />
        <Menu />
        <div>
          <SingInButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
