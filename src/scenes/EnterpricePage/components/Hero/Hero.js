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
    benefitsbuttontext,
    ctatitle,
    ctatext,
    ctabuttontext,
    image,
    video,
    videoplaybuttontext,
    modalbuttonlink,
    modalbuttontext,
  } = primary;

  console.log(primary);

  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={title.richText} />
        </div>
        <div className={style.subtitle}>
          <RichText render={subtitle.richText} />
        </div>
        <div className={style.wrapper}>
          <div className={style.benefit}>
            <div className={style.title}>
              <RichText render={benefitstitle.richText} />
            </div>
            <div className={style.list}>
              <RichText render={benefitslist.richText} />
            </div>
            <div className={style.buttonWrapper}>
              <Button
                variant={VARIANT.SECONDARY}
                click={(e) => {
                  e.preventDefault();
                  handleScroll();
                }}
              >
                {benefitsbuttontext.text}
              </Button>
            </div>
          </div>
          <div className={style.banner}>
            <div className={style.block}>
              <div className={style.title}>
                <RichText render={ctatitle.richText} />
              </div>
              <div className={style.subtitle}>
                <RichText render={ctatext.richText} />
              </div>
              <div className={style.buttonWrapper}>
                <Button variant={VARIANT.PRIMARY} to="/contact-us" fullWidth>
                  {ctabuttontext.text}
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
                <div className={style.playButtonText}>
                  {videoplaybuttontext.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modalIsOpen}
        closeModal={handleCloseModal}
        videoLink={video.url}
        modalCtaButtonLink={parseString(modalbuttonlink.richText)}
        modalCtaButtonText={parseString(modalbuttontext.richText)}
      />
    </section>
  );
};

Hero.propTypes = {
  primary: object,
  handleScroll: func,
};

export default Hero;
