import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

//styles
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'

// view components
import App from './App';
import UsersView from './components/users-view';
import Test2View from './components/users-view';
import Test3View from './App';
import Test4View from './App';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/react-basics/users" component={UsersView} />
      <Route path="/react-basics/link2" component={Test2View} />
      <Route path="/react-basics/link3" component={Test3View} />
      <Route path="/react-basics/link4" component={Test4View} />
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
