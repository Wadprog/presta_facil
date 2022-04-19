import React, { useState } from 'react';
import style from './Text.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
import * as prismicH from '@prismicio/helpers';
import Button, { VARIANT } from '@components/Button/Button.js';
import Img from '../Img/Img';

// const propsWithUniqueKey = (props, key) => {
//   return Object.assign(props || {}, { key });
// };

const htmlSerializer = (type, element, key, children) => {
  // if (type === prismicH.Element.heading1) {
  //   return React.createElement('h1', children);
  // }
  // if (type === prismicH.Element.heading2) {
  //   return React.createElement('section', [
  //     React.createElement('h2', children),
  //   ]);
  // }
  // if (type === prismicH.Element.heading3) {
  //   return React.createElement('section', [
  //     React.createElement('h3', children),
  //   ]);
  // }
  // if (type === prismicH.Element.heading4) {
  //   return React.createElement('h4', children);
  // }

  if (type === prismicH.Element.hyperlink) {
    if (
      element.data.url.includes('quiz.secureprivacy.ai') ||
      element.data.url.includes(
        'app.secureprivacy.ai/#/onboarding/create-account'
      ) ||
      element.data.url.includes('https://calendly.com/')
    ) {
      return (
        <div className={style.button}>
          <Button variant={VARIANT.PRIMARY} to={element.data.url}>
            {children[0]}
          </Button>
        </div>
      );
    }
  }

  if (type !== 'image') {
    return;
  }
  const props = {
    image: {
      url: element.url,
      alt: element.alt,
    },
  };
  return <Img primary={props}></Img>;
};

const Text = ({ primary }) => {
  const { text } = primary;
  const [id, setId] = useState('');
  React.useEffect(() => {
    if (text.richText && text.richText.length) {
      text.richText.map((val) => {
        if (val.type === 'heading2') {
          let id = val.text.replace(/\W+/g, '-').toLowerCase();
          setId(id);
        }
      });
    }
  }, [text.RichText]);

  return (
    <section id={id} className={style.text}>
      {<RichText render={text.richText} htmlSerializer={htmlSerializer} />}
    </section>
  );
};

Text.propTypes = {
  primary: object,
};

export default Text;
