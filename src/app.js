/* global document:false */

import React from 'react';
import {render} from 'react-dom';

import Home from './components/Home/Home';
import './app.scss';

render(<Home />, document.getElementById('root'));
