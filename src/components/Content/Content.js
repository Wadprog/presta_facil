import React from 'react';
import { RichText } from 'prismic-reactjs';
import { array, object } from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cn from 'classnames';

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

const anckorLinkOffset = 100;

const handleItemClick = (e) => {
  e.stopPropagation();
};

const Content = ({ primary, items }) => {
  const {
    toctitle: tableOfContentTitle,
    maintitle: mainSectionTitle,
  } = primary;
  const tableOfContentItems = items.map(({ shorttitle: shortTitle }, index) => {
    const { text: titleText } = shortTitle;
    return (
      <li
        className={styles.tableOfContentItems}
        key={`${titleText}${index}`}
        onClick={handleItemClick}
      >
        <AnchorLink offset={anckorLinkOffset} href={`#${index.toString()}`}>
          {titleText}
        </AnchorLink>
      </li>
    );
  });

  const displayedByDefaultItems = tableOfContentItems.slice(0, 4);
  const MoreLink = () => {
    const moreItemsNumber = tableOfContentItems.length - 4;
    if (moreItemsNumber < 1) {
      return null;
    }
    const text = `...and ${moreItemsNumber} more`;

    return <div className={styles.moreLink}>{text}</div>;
  };

  const TableOfContent = () => {
    return (
      <AccordionItem className={styles.accordionItem}>
        <AccordionItemHeading>
          <AccordionItemButton
            className={cn(
              styles.accordionItemButton,
              styles.tableofcontentHeader
            )}
          >
            <div className={styles.tableofcontentTitle}>
              {tableOfContentTitle.text}
            </div>
            <AccordionItemState>
              {(state) => {
                return (
                  !state.expanded && (
                    <>
                      <ul className={styles.tableOfContent}>
                        {displayedByDefaultItems}
                      </ul>
                      <MoreLink />
                    </>
                  )
                );
              }}
            </AccordionItemState>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionItemPanel}>
          <div className={styles.content}>
            <ul className={styles.expandedItems}>{tableOfContentItems}</ul>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    );
  };

  const contentItems = items.map(({ title, content }, index) => {
    return (
      <AccordionItem
        key={title.text}
        className={styles.accordionItem}
        id={index.toString()}
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

  const isContentItems = contentItems.length > 0;

  return (
    <section className={styles.benefits}>
      <div className={styles.title}>
        <RichText render={mainSectionTitle.raw} />
      </div>
      <Accordion
        className={styles.accordion}
        allowMultipleExpanded
        allowZeroExpanded
      >
        <TableOfContent />
        {isContentItems && contentItems}
      </Accordion>
    </section>
  );
};

Content.propTypes = {
  items: array,
  primary: object,
};

export default Content;
