import clsx from 'clsx';
import React from 'react';

import styles from './styles';

interface OptionButtonProps {
  text: string;
  isCorrect: boolean;
  activeValue: string;
  onClickHandler: (value:string) => void;
}

const OptionButton = ({ text:currentValue, activeValue, isCorrect, onClickHandler }:OptionButtonProps) => {
  const isChecked = activeValue === currentValue;
  const buttonClass = clsx(
    `${styles}__button`,
    isChecked && isCorrect && `${styles}__button_green`,
    isChecked && !isCorrect && `${styles}__button_red`
  );

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={() => onClickHandler(currentValue)}
    >{currentValue}</button>
  )
};

export default OptionButton;