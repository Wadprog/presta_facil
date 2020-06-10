import React from 'react';
import classnames from 'classnames';
import style from './Header.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import SingInButton from '@components/SingInButton';
import GradientText from '@components/GradientText';
import Logo from './components/Logo';
import Menu from './components/Menu';
import { useScrollDirection } from '@hooks';
import useGetImage from './useGetImage';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const Header = ({ primary }) => {
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
              text={RichText.asText(primary.slogan)}
              background={gradientTextBg}
            />
          </div>
          <div className={style.button}>
            <Button variant={buttonVariant} isHeader={true}>
              {scrollDir === 'down' ? (
                RichText.asText(primary.buttontext)
              ) : (
                <GradientText
                  text={RichText.asText(primary.buttontext)}
                  background="linear-gradient(86.37deg, #24B04B -46.17%, #0263BC 186.99%)"
                />
              )}
            </Button>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.bottomContainer}>
            <div className={style.burger}>
              <IconButton variant={VARIANT_ICON.BURGER}>
                <img src={burger.publicURL} alt="burger menu icon" />
              </IconButton>
            </div>
            <Logo img={primary.logo} />
            <Menu />
            <SingInButton />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  primary: object,
};

export default Header;
