import React, { useState, useEffect } from 'react';
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
import { array, bool, object } from 'prop-types';
import { parseUrl } from '@helpers';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';

const GRADIENT_ORANGE =
  'linear-gradient(262.53deg, #FB5F47 38.27%, #F9BE5A 113.07%)';
const GRADIENT_GREEN =
  'linear-gradient(87.97deg, #24b04b -46.17%, #0263bc 186.99%)';

const Header = ({ data, hideMenu }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCloseModal = () => setModalIsOpen(false);
  const menuItemsData = data.filter((item) => item.slice_type === 'menu');

  const handleClick = (e) => {
    e.preventDefault();
    setModalIsOpen(!modalIsOpen);
  };
  const scrollDir = useScrollDirection();
  const { burger, close } = useGetImage();
  const headerStyles = classnames(style.header, {
    [style.active]: scrollDir === 'down',
    [style.open]: isOpenMenu,
    [style.hideMenu]: hideMenu,
  });
  const primary = data[0].primary;

  const toggleMobileMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    document.querySelector('html').classList.toggle('fixed');
  };
  useEffect(() => {
    return () => document.querySelector('html').classList.remove('fixed');
  }, []);

  const gradientTextBg =
    scrollDir === 'down' ? GRADIENT_ORANGE : GRADIENT_GREEN;
  const buttonVariant =
    scrollDir === 'down' ? VARIANT.PRIMARY : VARIANT.GRADIENT;

  return (
    <>
      <header className={headerStyles}>
        <div className={style.container}>
          <div className={style.top}>
            <div className={style.slogan}>
              <GradientText
                text={primary.slogan.text}
                background={gradientTextBg}
              />
            </div>
            <div className={style.button}>
              <Button
                variant={buttonVariant}
                isHeader={true}
                click={handleClick}
              >
                {primary.buttontext.text}
              </Button>
            </div>
          </div>
          <div className={style.bottom}>
            <div className={style.bottomContainer}>
              <div className={style.burger}>
                <IconButton
                  variant={VARIANT_ICON.BURGER}
                  click={toggleMobileMenu}
                >
                  {isOpenMenu ? (
                    <img
                      src={close.publicURL}
                      alt="close menu"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={burger.publicURL}
                      alt="burger menu"
                      loading="lazy"
                    />
                  )}
                </IconButton>
              </div>
              <Logo img={primary.logo} />
              <Menu data={menuItemsData} open={isOpenMenu} />
              <SingInButton
                onClick={() =>
                  window && window.open(parseUrl(primary.signinlink), '_self')
                }
              />
            </div>
          </div>
        </div>
      </header>
      <ModalBookCall open={modalIsOpen} closeModal={handleCloseModal} />
    </>
  );
};

Header.defaultProps = {
  hideMenu: false,
};

Header.propTypes = {
  data: array,
  hideMenu: bool,
  activeDocMeta: object,
};

export default Header;
