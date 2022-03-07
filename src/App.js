import React from 'react';
import { RecoilRoot } from 'recoil';
import env from './env.json';
//components
import { GlobalStyle } from './components/Styled/GlobalStyle';
import Title from './components/Title';
import Tab from './components/Tab';

const { startActiveMonth, startActiveYear, startRowOnPage } = env.startParams;

function App({
  month = startActiveMonth,
  year = startActiveYear,
  rowOnPage = startRowOnPage,
}) {
  const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const activePeriod = {
    activeMonth: month,
    activeYear: year,
  };

  return (
    <>
      <GlobalStyle dark={darkTheme} />
      <Title period={activePeriod} />
      <RecoilRoot>
        <Tab period={activePeriod} rowOnPage={rowOnPage} />
      </RecoilRoot>
    </>
  );
}
export default App;
