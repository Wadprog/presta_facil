import React from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';

import style from './QuizPage.module.scss';

const QuizPage = ({ pagetitle }) => {
  return (
    <div className={style.quizPage}>
      <div className={style.container}>
        <div className={style.headlineContainer}>
          <RichText render={pagetitle} />
        </div>
        <iframe
          className={style.frame}
          src="https://www.videoask.com/frwmkcwhp"
          allow="camera; microphone; autoplay; encrypted-media;"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

QuizPage.propTypes = {
  pagetitle: PropTypes.array.isRequired,
};

export default QuizPage;
