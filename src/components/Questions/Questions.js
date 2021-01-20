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

const COUNTER_STEP = 6;

const Questions = ({ primary, fields }) => {
  const [counter, setCounter] = useState(COUNTER_STEP);
  const [questionList, setQuestionList] = useState(fields.slice(0, counter));
  useEffect(() => {
    setQuestionList(fields.slice(0, counter));
  }, [counter]);

  const loadMoreQuestion = () => {
    setCounter(counter + COUNTER_STEP);
  };

  let questionsToRender;
  if (questionList !== null) {
    questionsToRender = questionList.map(
      ({ title, content, linktext, link }) => {
        if (title) {
          return (
            <AccordionItem
              key={RichText.asText(title)}
              className={styles.accordionItem}
            >
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  <RichText render={title} />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <div className={styles.content}>
                  <RichText render={content} />
                  {link && linktext && (
                    <a
                      className={styles.link}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {RichText.asText(linktext)}
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
        <RichText render={primary.title} />
      </div>
      <Accordion
        className={styles.accordion}
        allowZeroExpanded
        allowMultipleExpanded
      >
        <div>{questionsToRender}</div>
        {fields.length > counter ? (
          <div className={styles.buttonWrapper}>
            <Button onClick={loadMoreQuestion} />
          </div>
        ) : null}
      </Accordion>
    </section>
  );
};

Questions.propTypes = {
  primary: object,
  fields: array,
};
export default Questions;
