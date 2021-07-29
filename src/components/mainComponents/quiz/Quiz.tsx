import React, { useCallback, useEffect, useMemo, useState } from 'react';

import QuizItem from '../../reusable/quizItem';
import { useCalcData } from '../../../contexts';
import styles from './styles';

const Quiz = () => {
  const { calcData } = useCalcData() || {};
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const restartQuiz = useCallback(() => {
    alert(`Сongratulations, you scored ${score} points`);
    setScore(0);
    setCurrentIndex(0);
  }, [score])

  useEffect(() => {
    const sets = calcData?.trainingSet || [];
    if(sets.length > 0 && currentIndex + 1 > sets.length) restartQuiz();
  }, [currentIndex, calcData, restartQuiz])

  const nextTask = () => setCurrentIndex((prev) => prev+=1);
  
  const setCorrectAnswer = () => {
    setScore((prev) => prev+=50);
    nextTask();
  }

  const setWrongAnswer = () => {
    setScore((prev) => prev-=50);
  }
  
  const currentTaskData = useMemo(() => (
    calcData?.trainingSet && calcData?.trainingSet[currentIndex]
  ), [currentIndex, calcData])

  return (
    <div className={`${styles}__wrapper`}>
      {currentTaskData && (
        <div className={`${styles}__item`}>
          <QuizItem
            {...currentTaskData}
            setCorrectAnswer={setCorrectAnswer}
            setWrongAnswer={setWrongAnswer}
            score={score}
            currentIndex={currentIndex}
            totalTasks={calcData?.trainingSet?.length || 0}
          />
        </div>
      )}
    </div>
  )
};

export default Quiz;