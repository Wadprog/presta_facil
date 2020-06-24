import React from 'react';
import PropTypes from 'prop-types';
import style from './TechnologyPage.module.scss';
import 'swiper/swiper.scss';

const PostPage = ({ current }) => {
  const body = current.body;
  return (
    <div className={style.TechnologyPage}>
      {body.map((section) => {
        switch (section.type) {
        }
      })}
    </div>
  );
};

PostPage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default PostPage;
