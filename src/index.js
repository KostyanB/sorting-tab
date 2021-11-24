import React from 'react';
import { render } from 'react-dom';
import env from './env.json';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';

import {
	RecoilRoot
  } from 'recoil';

const {
	startActiveMonth,
	startActiveYear,
	startRowOnPage
} = env.startParams;

const app = (
	<React.StrictMode>
		<Provider store={store}>
			<RecoilRoot>
			<App startActiveMonth={startActiveMonth}
				startActiveYear={startActiveYear}
				startRowOnPage={startRowOnPage}
			/>
			</RecoilRoot>
		</Provider>
	</React.StrictMode>
);

render(app, document.getElementById('root'));