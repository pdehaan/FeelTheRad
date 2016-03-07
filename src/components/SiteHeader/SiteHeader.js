import React from 'react';

import './SiteHeader.scss';

function SiteHeader(props) {
  return (
    <header className="main-header">
      <h1>
        <span className="word">Feel</span>
        <span className="word">The</span>
        <span className="word">Rad</span>
      </h1>
      <p><small>Veni. Saltavi. Ego sudasse.</small></p>
    </header>
  );
}

export default SiteHeader;
