import React, { useState } from 'react';
import { MorphTransition } from 'react-svg-morph';
import useGetImage from './useGetImage';
import style from './Integration.module.scss';
import Background from './image/bg.inline.svg';
import BackgroundHover from './image/bg-hover.inline.svg';

const Integration = () => {
  const { hubspot } = useGetImage();
  const [hover, setHover] = useState(false);

  const handleMouseOn = () => {
    console.log('on');
    setHover(true);
  };
  const handleMouseLeave = () => setHover(false);

  return (
    <div className={style.integration}>
      <div className={style.container}>
        <h2 className={style.title}>
          <span>Easy to integrate</span> <br /> with the solutions you use
        </h2>
        <p className={style.descr}>
          Secure Privacy can easily be integrated with all major CMS systems and
          internet platforms.
        </p>
        <div
          className={style.item}
          onMouseEnter={handleMouseOn}
          // onMouseLeave={handleMouseLeave}
        >
          <div className={style.background}>
            <MorphTransition progress={50} width={128} height={128}>
              {{
                from: <Background key="1" />,
                to: <BackgroundHover key="2" />,
              }}
            </MorphTransition>

            {/* {hover ? (
                <BackgroundHover key="bgHover" />
              ) : (
                <Background key="bg" />
              )} */}
          </div>
          <img
            className={style.icon}
            src={hubspot.publicURL}
            alt="technology icon"
          />
          <h4>HUBSPOT</h4>
        </div>
      </div>
    </div>
  );
};

export default Integration;
