import React, { useMemo, useState } from 'react';
import _some from 'lodash/some';
import _shuffle from 'lodash/shuffle';

import { TrainingSetEntity } from '../../../contexts/calcDataTypes';
import OptionButton from '../optionButton';
import styles from './styles';

const TIMEOUT_TIME = 1000;

interface QuizItemProps extends TrainingSetEntity {
  setCorrectAnswer: () => void;
  setWrongAnswer: () => void;
  score: number;
  currentIndex: number;
  totalTasks: number;
}

const QuizItem = ({
  displaySet,
  matchSet,
  negativeSet,
  score,
  currentIndex,
  totalTasks,
  setCorrectAnswer,
  setWrongAnswer,
}:QuizItemProps) => {
  const [activeValue, setActiveValue] = useState('');
  const [displayData] = displaySet || [];
  const options = useMemo(() => (
    _shuffle([...matchSet || [], ...negativeSet || []])
  ), [matchSet, negativeSet]);

  const clearActiveValue = () => setActiveValue('')

  const optionClickHandler = (value:string) => {
    if(activeValue) return;

    const _isCorrect = _some(matchSet, { text: value });

    setActiveValue(value);
    setTimeout(() => {
      clearActiveValue();
      if(_isCorrect) setCorrectAnswer();
      else {
        setWrongAnswer();
      }
    }, TIMEOUT_TIME)
  }

  return (
    <div className={`${styles}__wrapper`}>
      <div className={`${styles}__top`}>
        {displayData.text && <h2 className={`${styles}__question`}>{displayData.text}</h2>}
        <div className={`${styles}__stats`}>
          <p className={`${styles}__score`}>score: {score}</p>
          <p className={`${styles}__step`}>{currentIndex + 1}/{totalTasks}</p>
        </div>
      </div>
      {}
      <div className={`${styles}__options`}>
        {options.map(({ text, _id }) => {
          const isCorrect = _some(matchSet, { text });

          return (
            <OptionButton
              text={text}
              activeValue={activeValue}
              isCorrect={isCorrect}
              key={_id}
              onClickHandler={optionClickHandler}
            />
          )
        })}
      </div>
    </div>
  )
}

export default QuizItem;