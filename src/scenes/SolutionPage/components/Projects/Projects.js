import React from 'react';
import styles from './Projects.module.scss';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Item from './Item/Item';

const Projects = ({ primary, fields }) => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.title}>
          <RichText render={primary.title} />
        </div>
        <div className={styles.list}>
          {fields.map((item) => {
            return <Item {...item} key={item.link.url} />;
          })}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  primary: object,
  fields: array,
};

export default Projects;
