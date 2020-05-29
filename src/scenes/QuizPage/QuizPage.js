import React from 'react';
import style from './QuizPage.module.scss';

const QuizPage = () => {
  return (
    <div className={style.quizPage}>
      <div className={style.container}>
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

export default QuizPage;
