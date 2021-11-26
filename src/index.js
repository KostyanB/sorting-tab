import React from 'react';
import { render } from 'react-dom';
import env from './env.json';
import App from './App';

const {
	startActiveMonth,
	startActiveYear,
	startRowOnPage
} = env.startParams;

const app = (
	<React.StrictMode>
		<App startRowOnPage={startRowOnPage}
			startActivePeriod={{
				activeMonth: startActiveMonth,
				activeYear: startActiveYear
			}}
		/>
	</React.StrictMode>
);

render(app, document.getElementById('sorting-tab'));