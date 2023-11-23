import React, { useState } from 'react';
import './style.css';

export const App = () => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <article>
      <textarea
        className="character-counter-textarea"
        placeholder="Escribe algo aquí..."
        onChange={handleChange}
      ></textarea>
      <div className="character-counter-info">Caracteres: {text.length}</div>
    </article>
  );
};
