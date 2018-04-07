import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './wievs/Home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/login" component={Home} />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
