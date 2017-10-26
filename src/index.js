import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

require('disable-react-devtools');

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
