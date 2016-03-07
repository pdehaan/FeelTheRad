import React from 'react';

import QuoteList from '../Quotes/QuoteList';
import SiteFooter from '../SiteFooter/SiteFooter';
import SiteHeader from '../SiteHeader/SiteHeader';

function Home(props) {
  return (
    <main>
      <SiteHeader />
      <QuoteList />
      <SiteFooter />
    </main>
  );
}

export default Home;
