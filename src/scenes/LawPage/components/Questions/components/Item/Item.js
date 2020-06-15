import React from 'react';
import styles from './Item.module.scss';
import { array, object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const Item = ({ primary, fields }) => {
  const sectionId = RichText.asText(primary.title).replace(/\s/g, '');
  return (
    <div className={styles.container} id={sectionId}>
      <div className={styles.title}>
        <RichText render={primary.title} />
      </div>
      <ul className={styles.list}>
        {fields.map(({ title, content, linktext, link }) => {
          const id = RichText.asText(title).replace(/\s/g, '');
          return (
            <li key={id} id={id} className={styles.listItem}>
              <RichText render={title} />
              <div className={styles.content}>
                <RichText render={content} />
                {link && (
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Item.propTypes = {
  primary: object,
  fields: array,
};

export default Item;
