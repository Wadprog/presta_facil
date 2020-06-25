import React from 'react';
import PropTypes from 'prop-types';
import style from './PostPage.module.scss';
import 'swiper/swiper.scss';

const PostPage = ({ current }) => {
  const { body, category, date, title, descrition } = current;
  console.log(current);
  return (
    <div className={style.post}>
      {body.map((section) => {
        // switch (section.type) {
        // }
      })}
    </div>
  );
};

PostPage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default PostPage;
