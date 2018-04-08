import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Home from './wievs/Home';

import './styles/App.scss';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
