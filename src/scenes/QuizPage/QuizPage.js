import React, { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import lozad from 'lozad';

import style from './QuizPage.module.scss';

const QuizPage = ({ pageTitle }) => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  return (
    <div className={style.quizPage}>
      <div className={style.container}>
        {/* <div className={style.headlineContainer}>
          <RichText render={pageTitle.raw} />
        </div> */}
        <iframe
          className={`${style.frame} lozad`}
          src="https://www.videoask.com/frwmkcwhp"
          allow="camera; microphone; autoplay; encrypted-media;"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

QuizPage.propTypes = {
  pageTitle: PropTypes.object.isRequired,
};

export default QuizPage;
