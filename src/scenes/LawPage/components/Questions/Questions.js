import React from 'react';
import styles from './Questions.module.scss';
import { array } from 'prop-types';
import Item from './components/Item/Item';
import Sidebar from '@components/Sidebar/Sidebar';

const Questions = ({ data }) => {
  return (
    <section className={styles.questions}>
      <div className={styles.container}>
        <Sidebar data={data} />
        <div className={styles.list}>
          {data.map((item, index) => {
            return <Item {...item} key={`${item.type + index}`} />;
          })}
        </div>
      </div>
    </section>
  );
};

Questions.propTypes = {
  data: array,
};
export default Questions;
