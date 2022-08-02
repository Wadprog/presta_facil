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
import { any, array, bool, object } from 'prop-types';
import { parseUrl } from '@helpers';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { globalHistory as history } from '@reach/router';
import Input from '../../scenes/ContactUs/components/Input/Input';
import checkIconSrc from '../../assets/images/homepage/arrow-gradient.svg';
import isURL from 'validator/lib/isURL';

const linkResolver = require('../../../prismic/utils/linkResolver');

const initialState = {
  email: '',
};

const errors = { email: 'email' };

const GRADIENT_ORANGE =
  'linear-gradient(262.53deg, #FB5F47 38.27%, #F9BE5A 113.07%)';
const GRADIENT_GREEN =
  'linear-gradient(87.97deg, #24b04b -46.17%, #0263bc 186.99%)';

const Header = ({ data, hideMenu, metatitle, type }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);

  const handleCloseModal = () => setModalIsOpen(false);
  const menuItemsData = data.filter((item) => item.slice_type === 'menu');

  const primary = data.filter((item) => item.slice_type === 'header')[0]
    .primary;

  const publicScannerCta = data.filter(
    (item) => item.slice_type === 'public_scanner_cta'
  );

  const publicScannerCtaPrimary =
    publicScannerCta && publicScannerCta.length
      ? publicScannerCta[0].primary
      : null;

  const menuSingleData = data.filter(
    (item) => item.slice_type === 'menu_single'
  );

  const { location } = history;

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
    formErrors.length > 0 &&
      setFormErrors([...formErrors.filter((error) => error != name)]);
  };

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

  const validateForm = (userEmail) => {
    const isValidUserEmail = isURL(userEmail);

    if (!isValidUserEmail) {
      setFormErrors([...formErrors, errors.email]);
    }

    const validForm = isValidUserEmail;

    return validForm;
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email } = formState;
    const isValidForm = validateForm(email);

    isValidForm &&
      window.open(
        `https://spscannerui.z6.web.core.windows.net/#/${email}`,
        '_self' // <- This is what makes it open in a new window.
      );
  };

  return (
    <>
      <header className={headerStyles}>
        <div className={style.container}>
          {console.log(publicScannerCta)}
          <div className={style.top}>
            {publicScannerCtaPrimary &&
            publicScannerCtaPrimary.activate_public_scanner_cta ? (
              <>
                <div className={style.slogan}>
                  <GradientText
                    text={publicScannerCtaPrimary.public_scanner_cta_title.text}
                    background={gradientTextBg}
                  />
                  <img
                    src={checkIconSrc}
                    alt="arrow"
                    loading="lazy"
                    className={style.symbol}
                  />
                </div>
                <div>
                  <Input
                    id="email"
                    placeholder={
                      publicScannerCtaPrimary.input_field_website.text
                    }
                    errorMessage={
                      publicScannerCtaPrimary.wrong_url_message.text
                    }
                    name="email"
                    valid={!formErrors.includes('email')}
                    value={formState.email}
                    handleChange={handleInputChange}
                  />
                </div>
                <div className={style.button}>
                  <Button
                    variant={buttonVariant}
                    isHeader={true}
                    click={handleOnSubmit}
                  >
                    {publicScannerCtaPrimary.scan_website_button.text}
                  </Button>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
          <div className={style.bottom}>
            <div className={style.bottomContainer}>
              <div className={style.burger}>
                <IconButton
                  variant={VARIANT_ICON.BURGER}
                  click={toggleMobileMenu}
                >
                  {isOpenMenu ? (
                    <img src={close.publicURL} alt="close menu" />
                  ) : (
                    <img src={burger.publicURL} alt="burger menu" />
                  )}
                </IconButton>
              </div>
              <Logo img={primary.logo} />
              <Menu
                data={menuItemsData}
                menuSingleData={menuSingleData[0]}
                open={isOpenMenu}
              />
              <SingInButton
                onClick={() =>
                  window && window.open(parseUrl(primary.signinlink), '_self')
                }
              />
            </div>
            {type && type.type !== 'homepage' && (
              <div className={style.breadcrumbContainer}>
                <Breadcrumb
                  usePathPrefix={linkResolver(type).split('/')[1]}
                  location={location}
                  crumbSeparator={''}
                  crumbLabel={metatitle.text}
                  title={`${
                    type.lang === 'en-gb' ? '' : type.lang.slice(0, 2)
                  } ${type.lang !== 'en-gb' ? ' > ' : ''} ${
                    type.lang === 'en-gb'
                      ? linkResolver(type).split('/')[1]
                      : linkResolver(type).split('/')[2]
                  }`}
                />
              </div>
            )}
          </div>
        </div>
      </header>
      <ModalBookCall
        open={modalIsOpen}
        calendlyLink={primary.buttonlink.text}
        closeModal={handleCloseModal}
      />
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
  metatitle: object,
  type: any,
};

export default Header;
