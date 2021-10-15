import React, { useState, useEffect } from 'react';
import styles from './Questions.module.scss';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import Button from './components/Button/Button';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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

const COUNTER_STEP = 6;

const Questions = ({ primary, items }) => {
  const { title, loadmorebuttontext } = primary;
  console.log(primary);
  const [counter, setCounter] = useState(COUNTER_STEP);
  const [questionList, setQuestionList] = useState(items.slice(0, counter));
  useEffect(() => {
    setQuestionList(items.slice(0, counter));
  }, [counter]);

  const loadMoreQuestion = () => {
    setCounter(counter + COUNTER_STEP);
  };

  let questionsToRender;
  if (questionList !== null) {
    questionsToRender = questionList.map(
      ({ title, content, linktext, link }, index) => {
        if (title) {
          return (
            <AccordionItem key={index} className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  <RichText render={title.raw} />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <div className={styles.content}>
                  <RichText
                    render={content.raw}
                    htmlSerializer={htmlSerializer}
                  />
                  {link && linktext && (
                    <a
                      className={styles.link}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {linktext.text}
                    </a>
                  )}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        }
      }
    );
  }

  return (
    <section className={styles.benefits}>
      <div className={styles.title}>
        <RichText render={title.raw} />
      </div>
      <Accordion
        className={styles.accordion}
        allowZeroExpanded
        allowMultipleExpanded
      >
        <div>{questionsToRender}</div>
        {items.length > counter ? (
          <div className={styles.buttonWrapper}>
            <Button
              onClick={loadMoreQuestion}
              text={loadmorebuttontext?.text}
            />
          </div>
        ) : null}
      </Accordion>
    </section>
  );
};

Questions.propTypes = {
  primary: object,
  items: array,
};
export default Questions;
