import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Home from './views/Home';
import Login from './views/Login';
import Poll from './views/Poll';

import './styles/App.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/poll" component={Poll} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
