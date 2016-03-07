import React from 'react';

import Quote from './Quote';
import {quotes} from './quotes.json';

function QuoteList(props) {
  return (
    <section className="quote-list">
      {quotes.map((text, idx) => <Quote key={idx} text={text} />)}
    </section>
  );
}

export default QuoteList;
