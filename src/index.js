import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

//styles
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'

// view components
import App from './App';
import Test1View from './App';
import Test2View from './App';
import Test3View from './App';
import Test4View from './App';

ReactDOM.render(
        <Router>
            <div>
            <Route path="/" component={App} />
          <Route path="/test1" component={Test1View}/>
          <Route path="/test2" component={Test2View}/>
          <Route path="/test3" component={Test3View}/>
          <Route path="/test4" component={Test4View}/>
         </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
