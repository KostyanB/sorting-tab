import React from 'react';
import { RecoilRoot } from 'recoil';
//components
import { GlobalStyle } from './components/Styled/GlobalStyle';
import Title from './components/Title';
import Tab from './components/Tab';

function App({ startActivePeriod, startRowOnPage }) {
  const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <>
      <GlobalStyle dark={darkTheme} />
      <Title period={startActivePeriod} />
      <RecoilRoot>
        <Tab period={startActivePeriod} rowOnPage={startRowOnPage} />
      </RecoilRoot>
    </>
  );
}
export default App;
