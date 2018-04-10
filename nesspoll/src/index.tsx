import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Home from './wievs/Home';

import './styles/App.scss';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
