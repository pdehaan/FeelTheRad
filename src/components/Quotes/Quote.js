import React from 'react';

import './Quote.scss';

function Quote(props) {
  const {text, author} = props;
  const avatar = "https://scwfit.com/florida/wp-content/uploads/sites/6/2015/12/presenters_amy_chang_radosevich.jpg";
  return (
    <blockquote>
      <p>
        <span className="quote">{text}</span><br/>
        <cite>&mdash; {author || "ACRad"}</cite>
      </p>
      <img src={avatar} className="profile-photo" />
    </blockquote>
  );
}

export default Quote;
