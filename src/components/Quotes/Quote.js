import React from 'react';

import './Quote.scss';

function Quote(props) {
  const DEFAULT_AUTHOR = 'ACRad';

  let {text, author, avatar} = props;
  author = author || DEFAULT_AUTHOR;

  return (
    <blockquote>
      <p>
        <span className="quote">{text}</span><br/>
        <cite>&mdash; {author}</cite>
      </p>
      <img src={avatar} alt="" className="profile-photo" />
    </blockquote>
  );
}

export default Quote;
