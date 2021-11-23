import React from 'react';
import { render } from 'react-dom';
import env from './env.json';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';

const {
	startActiveMonth,
	startActiveYear,
	startRowOnPage
} = env.startParams;

const app = (
	<React.StrictMode>
		<Provider store={store}>
			<App activeMonth={startActiveMonth}
				activeYear={startActiveYear}
				rowOnPage={startRowOnPage}
			/>
		</Provider>
	</React.StrictMode>
);

render(app, document.getElementById('root'));