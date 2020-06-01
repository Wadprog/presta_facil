import React from 'react';
import classnames from 'classnames';
import style from './Header.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton from '@components/PalyButton/IconButton.js';
import SingInButton from '@components/SingInButton';
import GradientText from '@components/GradientText';
import Logo from './components/Logo';
import Menu from './components/Menu';
import { useScrollDirection } from '@hooks';
import useGetImage from './useGetImage';

const Header = () => {
  const scrollDir = useScrollDirection();
  const { burger } = useGetImage();
  const headerStyles = classnames(style.header, {
    [style.active]: scrollDir === 'down',
  });

  const GRADIENT_ORANGE =
    'linear-gradient(262.53deg, #FB5F47 38.27%, #F9BE5A 113.07%)';
  const GRADIENT_GREEN =
    'linear-gradient(87.97deg, #24b04b -46.17%, #0263bc 186.99%)';

  const gradientTextBg =
    scrollDir === 'down' ? GRADIENT_ORANGE : GRADIENT_GREEN;
  const buttonVariant =
    scrollDir === 'down' ? VARIANT.PRIMARY : VARIANT.TRANSPARENT_GREEN;

  return (
    <header className={headerStyles}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.slogan}>
            <GradientText
              text="Integrate. Automate. Comply"
              background={gradientTextBg}
            />
          </div>
          <div className={style.button}>
            <Button variant={buttonVariant}>
              {scrollDir === 'down' ? (
                'take the 2-min quiz'
              ) : (
                <GradientText
                  text="take the 2-min quiz"
                  background="linear-gradient(86.37deg, #24B04B -46.17%, #0263BC 186.99%)"
                />
              )}
            </Button>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.burger}>
            <IconButton variant={VARIANT.BURGER}>
              <img src={burger.publicURL} alt="burger menu icon" />
            </IconButton>
          </div>
          <Logo />
          <Menu />
          <div>
            <SingInButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
