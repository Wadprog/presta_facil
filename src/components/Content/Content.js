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

const Content = ({ items }) => {
  const contentItems = items.map(({ title, content }, index) => {
    return (
      <AccordionItem key={title.text} uuid={index.toString()}>
        <AccordionItemHeading>
          <AccordionItemButton>
            <RichText render={title.raw} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <RichText render={content.raw} />
        </AccordionItemPanel>
      </AccordionItem>
    );
  });

  const preExpandedItems = range(items.length).map((item) => item.toString());
  const isContentItems = contentItems.length > 0;

  return (
    <Accordion className={styles.accordion} preExpanded={preExpandedItems}>
      {isContentItems && contentItems}
    </Accordion>
  );
};

Content.propTypes = {
  items: array,
};

export default Content;
