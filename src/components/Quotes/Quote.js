import React from 'react';

import './Quote.scss';

function Quote(props) {
  const DEFAULT_AUTHOR = `Amy 'ACRad' Chang Radosevich`;
  const DEFAULT_AVATAR = 'https://scwfit.com/florida/wp-content/uploads/sites/6/2015/12/presenters_amy_chang_radosevich.jpg';

  let {text, author, avatar} = props;
  author = author || DEFAULT_AUTHOR;
  avatar = avatar || DEFAULT_AVATAR;

  return (
    <blockquote>
      <p>
        <span className="quote">{text}</span><br/>
        <cite>&mdash; {author}</cite>
      </p>
      <img src={avatar} alt={author} className="profile-photo" />
    </blockquote>
  );
}

export default Quote;
