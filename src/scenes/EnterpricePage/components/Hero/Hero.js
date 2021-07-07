import React, { useState } from 'react';
import { object, func } from 'prop-types';
import { RichText } from 'prismic-reactjs';

import style from './Hero.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import Image from '@components/Image/Image';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';
import Modal from '@components/Modal';
import { parseString } from '@helpers';

const Hero = ({ primary, handleScroll }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const {
    title,
    subtitle,
    benefitstitle,
    benefitslist,
    ctatitle,
    ctatext,
    image,
    video,
    modalbuttonlink,
    modalbuttontext,
  } = primary;
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={title.raw} />
        </div>
        <div className={style.subtitle}>
          <RichText render={subtitle.raw} />
        </div>
        <div className={style.wrapper}>
          <div className={style.benefit}>
            <div className={style.title}>
              <RichText render={benefitstitle.raw} />
            </div>
            <div className={style.list}>
              <RichText render={benefitslist.raw} />
            </div>
            <div className={style.buttonWrapper}>
              <Button
                variant={VARIANT.SECONDARY}
                click={(e) => {
                  e.preventDefault();
                  handleScroll();
                }}
              >
                See all features
              </Button>
            </div>
          </div>
          <div className={style.banner}>
            <div className={style.block}>
              <div className={style.title}>
                <RichText render={ctatitle.raw} />
              </div>
              <div className={style.subtitle}>
                <RichText render={ctatext.raw} />
              </div>
              <div className={style.buttonWrapper}>
                <Button variant={VARIANT.PRIMARY} to="/contact-us" fullWidth>
                  contact us
                </Button>
              </div>
            </div>
            <div className={style.imageWrapper}>
              <Image image={image} className={style.image} />
              <div className={style.playButtonWrapper}>
                <div className={style.playButton}>
                  <IconButton
                    variant={VARIANT_ICON.PLAY}
                    click={handleOpenModal}
                  >
                    <PLayIcon />
                  </IconButton>
                </div>
                <div className={style.playButtonText}>How it works</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modalIsOpen}
        closeModal={handleCloseModal}
        videoLink={video.url}
        modalCtaButtonLink={parseString(modalbuttonlink.raw)}
        modalCtaButtonText={parseString(modalbuttontext.raw)}
      />
    </section>
  );
};

Hero.propTypes = {
  primary: object,
  handleScroll: func,
};

export default Hero;
