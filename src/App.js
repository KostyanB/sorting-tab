import React from 'react';
import { RecoilRoot } from 'recoil';
//components
import { GlobalStyle } from './components/Styled/GlobalStyle';
import Title from './components/Title';
import Tab from './components/Tab';

//****************************************************** */
function App({ startActivePeriod, startRowOnPage }) {

  return (
    <>
      <GlobalStyle/>
      <Title period={startActivePeriod}/>
      <RecoilRoot>
        <Tab period={startActivePeriod}
          rowOnPage={startRowOnPage}
        />
      </RecoilRoot>
    </>
	);
}
export default App;