import React from 'react';
import { RichText } from 'prismic-reactjs';
import styles from './projects.module.scss';
import { object, array } from 'prop-types';
import Item from './Item/Item';

const Projects = ({ primary, items }) => {
  const { title } = primary;
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.title}>
          <RichText render={title.richText} />
        </div>
        <div className={styles.list}>
          {items.map((item) => {
            return <Item {...item} key={item.link.url} />;
          })}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  primary: object,
  items: array,
};

export default Projects;
