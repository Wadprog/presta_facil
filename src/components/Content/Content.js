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

const Content = ({ items }) => {
  const contentItems = items.map(({ title, content }) => {
    return (
      <AccordionItem key={title.text}>
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

  const isContentItems = contentItems.length > 0;

  return <Accordion>{isContentItems && contentItems}</Accordion>;
};

Content.propTypes = {
  items: array,
};

export default Content;
