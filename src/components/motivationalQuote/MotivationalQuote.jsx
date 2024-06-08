import React from 'react';

const MotivationalQuote = ({ quote, author }) => {
  return (
    <div className="motivational-quote">
      <p className="quote">{quote}</p>
      <p className="author">- {author}</p>
    </div>
  );
}

export default MotivationalQuote;
