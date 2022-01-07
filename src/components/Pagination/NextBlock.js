import React from 'react';
import { useRecoilState } from 'recoil';
//recoil state
import { activePageState } from '../../recoilStore/showTabStore';
//components
import ButtonsBlock from './ButtonsBlock';

const NextBlock = ({ pagesCount }) => {
  const [activePage, setActivePage] = useRecoilState(activePageState);

  const showNextPage = () => setActivePage(activePage + 1);

  const showLastPage = () => setActivePage(pagesCount);

  return (
    <ButtonsBlock
      pageNumForDisableBtn={pagesCount}
      handleBtnFunctions={[showNextPage, showLastPage]}
      areaName="next"
      btnTexts={['Next', 'Last']}
    />
  );
};
export default NextBlock;
