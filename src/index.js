import React, { Suspense } from 'react';
import { render } from 'react-dom';
import env from './env.json';
import { RecoilRoot } from 'recoil';
import App from './App';

const {
	startActiveMonth,
	startActiveYear,
	startRowOnPage
} = env.startParams;

const app = (
	<React.StrictMode>
		<RecoilRoot>
			<Suspense fallback={<>Loading...</>}>
				<App startActiveMonth={startActiveMonth}
					startActiveYear={startActiveYear}
					startRowOnPage={startRowOnPage}
				/>
			</Suspense>
		</RecoilRoot>
	</React.StrictMode>
);

render(app, document.getElementById('sorting-tab'));