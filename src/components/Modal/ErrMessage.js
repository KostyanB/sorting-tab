import React from 'react';
import env from '../../env.json';

const errorText = env.style.errorText;

const ErrMessage = ({ text }) => {
  return (
    <div style={{ color: errorText }}>
      <p>Ошибка: {text}.</p>
      <p>Попробуйте повторить позже.</p>
    </div>
  );
};
export default ErrMessage;
