import React from 'react';

import Quote from './Quote';
import {quotes} from '../../data/quotes.json';

function QuoteList() {
  const quotesDOM = quotes.map((text, idx) => <Quote key={idx} text={text} />);
  return (
    <section className="quote-list">
      {quotesDOM}
    </section>
  );
}

export default QuoteList;
