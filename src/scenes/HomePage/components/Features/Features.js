import React from 'react';

import style from './Features.module.scss';
import useGetImage from './useGetImage';
import Item from './components/Item';

const Features = () => {
  const { placeholder } = useGetImage();

  const featuresList = [
    {
      image: placeholder,
      title: 'Flexible Coockie Banner Installation',
      link: '/',
    },
    {
      image: placeholder,
      title: 'Cookie & Privacy Policy Generator',
      link: '/',
    },
    {
      image: placeholder,
      title: 'Powerful Cookie, SSL & Compliance Scanner',
      link: '/',
    },
    {
      image: placeholder,
      title: 'Visitor Preference Center',
      link: '/',
    },
    {
      image: placeholder,
      title: 'Detailed Consent Logging',
      link: '/',
    },
    {
      image: placeholder,
      title: '70+ Languages Supported',
      link: '/',
    },
  ];

  return (
    <div className={style.features}>
      <div className={style.container}>
        <h2 className={style.title}>
          <span>Powerful Features</span>
          <br /> to Scan, Collect &amp; Document Consent
        </h2>
        <p className={style.descr}>
          Secure Privacy simplifies cookie consent, cookie monitoring and cookie
          control with powerful features.
        </p>
        <div className={style.list}>
          {featuresList.map((item) => {
            return <Item {...item} key={item.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
