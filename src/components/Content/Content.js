import React from 'react';
import { RichText } from 'prismic-reactjs';
import { array } from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import range from 'lodash.range';

import styles from './Content.module.scss';

const propsWithUniqueKey = (props, key) => {
  return Object.assign(props || {}, { key });
};

const htmlSerializer = (type, element, key) => {
  if (type !== 'image') {
    return;
  }

  const props = { src: element.url, alt: element.alt || '', loading: 'lazy' };
  return React.createElement('img', propsWithUniqueKey(props, key));
};

const Content = ({ items }) => {
  const contentItems = items.map(({ title, content }, index) => {
    return (
      <AccordionItem
        key={title.text}
        uuid={index.toString()}
        className={styles.accordionItem}
      >
        <AccordionItemHeading>
          <AccordionItemButton className={styles.accordionItemButton}>
            <RichText render={title.raw} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionItemPanel}>
          <div className={styles.content}>
            <RichText render={content.raw} htmlSerializer={htmlSerializer} />
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    );
  });

  const preExpandedItems = range(items.length).map((item) => item.toString());
  const isContentItems = contentItems.length > 0;

  return (
    <Accordion
      className={styles.accordion}
      preExpanded={preExpandedItems}
      allowMultipleExpanded
      allowZeroExpanded
    >
      {isContentItems && contentItems}
    </Accordion>
  );
};

Content.propTypes = {
  items: array,
};

export default Content;
