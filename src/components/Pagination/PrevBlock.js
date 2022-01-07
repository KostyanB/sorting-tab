import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
//recoil state
import { activePageState } from '../../recoilStore/showTabStore';
//components
import ButtonsBlock from './ButtonsBlock';

const PrevBlock = () => {
  const [activePage, setActivePage] = useRecoilState(activePageState);
  const resetActivePage = useResetRecoilState(activePageState);

  const showPrevPage = () => setActivePage(activePage - 1);

  const showFirstPage = () => resetActivePage();

  return (
    <ButtonsBlock
      pageNumForDisableBtn={1}
      handleBtnFunctions={[showFirstPage, showPrevPage]}
      areaName="prev"
      btnTexts={['First', 'Prev']}
    />
  );
};
export default PrevBlock;
