import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import Card from './components/Card';
import style from './Reviews.module.scss';

const params = {
  slidesPerView: 1,
  spaceBetween: 16,
};

const params2 = {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  grabCursor: true,
};

const Reviews = ({
  items,
  buttonText,
  buttonTextShort,
  buttonLink,
  logotype,
}) => {
  const items2 = [
    {
      author: [
        {
          type: 'paragraph',
          text: 'Alexandre G',
          spans: [],
        },
      ],
      text: [
        {
          type: 'paragraph',
          text:
            'The fact that we can track all user opt-in and opt-out data and review it later to ensure compliance with LGPD cookie consent compliance requirements.',
          spans: [],
        },
      ],
    },
    {
      author: [
        {
          type: 'paragraph',
          text: 'Francis U',
          spans: [],
        },
      ],
      text: [
        {
          type: 'paragraph',
          text:
            'The automated web scanning has been really resourceful for us in identifying the cookies on our website and managing them in line with GDPR...',
          spans: [],
        },
      ],
    },
    {
      author: [
        {
          type: 'paragraph',
          text: 'Jagrati S',
          spans: [],
        },
      ],
      text: [
        {
          type: 'paragraph',
          text:
            'The simplicity and clarity around Secure Privacy’s sync consent across multiple website domains capability gave us the structure we needed to meet...',
          spans: [],
        },
      ],
    },
    {
      author: [
        {
          type: 'paragraph',
          text: 'Maša K',
          spans: [],
        },
      ],
      text: [
        {
          type: 'paragraph',
          text:
            'The ‘Prior Consent’ tool that blocks the installation of unnecessary cookies on users’ computers until they give consent. This is very important to us in our efforts...',
          spans: [],
        },
      ],
    },
    {
      author: [
        {
          type: 'paragraph',
          text: 'Maša K',
          spans: [],
        },
      ],
      text: [
        {
          type: 'paragraph',
          text:
            'The ‘Prior Consent’ tool that blocks the installation of unnecessary cookies on users’ computers until they give consent. This is very important to us in our efforts...',
          spans: [],
        },
      ],
    },
    {
      author: [
        {
          type: 'paragraph',
          text: 'Maša K',
          spans: [],
        },
      ],
      text: [
        {
          type: 'paragraph',
          text:
            'The ‘Prior Consent’ tool that blocks the installation of unnecessary cookies on users’ computers until they give consent. This is very important to us in our efforts...',
          spans: [],
        },
      ],
    },
    {
      author: [
        {
          type: 'paragraph',
          text: 'Maša K',
          spans: [],
        },
      ],
      text: [
        {
          type: 'paragraph',
          text:
            'The ‘Prior Consent’ tool that blocks the installation of unnecessary cookies on users’ computers until they give consent. This is very important to us in our efforts...',
          spans: [],
        },
      ],
    },
    {
      author: [
        {
          type: 'paragraph',
          text: 'Maša K',
          spans: [],
        },
      ],
      text: [
        {
          type: 'paragraph',
          text:
            'The ‘Prior Consent’ tool that blocks the installation of unnecessary cookies on users’ computers until they give consent. This is very important to us in our efforts...',
          spans: [],
        },
      ],
    },
  ];
  return (
    <div className={style.container}>
      <Swiper {...params2}>
        {items2.map((item, index) => {
          return (
            <div className={style.item} key={index}>
              <Card
                {...item}
                buttonText={buttonText}
                buttonTextShort={buttonTextShort}
                buttonLink={buttonLink}
                logotype={logotype}
              />
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

Reviews.propTypes = {
  items: PropTypes.array.isRequired,
  buttonText: PropTypes.array.isRequired,
  buttonTextShort: PropTypes.array.isRequired,
  buttonLink: PropTypes.array.isRequired,
  logotype: PropTypes.object.isRequired,
};

export default Reviews;
