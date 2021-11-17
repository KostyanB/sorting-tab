import React from 'react';
import { render } from 'react-dom';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';

const app = (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

render(app, document.getElementById('root'));