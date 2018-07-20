import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Memory from './Memory';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Memory />, document.getElementById('root'));
registerServiceWorker();
