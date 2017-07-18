import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

//styles
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'

// view components
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
