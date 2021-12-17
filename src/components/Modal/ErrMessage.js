import React from 'react';
import env from '../../env.json';

const ErrMessage = ({ text }) => {
    const { errorText } = env.style.loaders;

    return (
        <div style={{color: errorText}}>
            <p>Ошибка: {text}.</p>
            <p>Попробуйте повторить позже.</p>
        </div>
    )
};
export default ErrMessage;