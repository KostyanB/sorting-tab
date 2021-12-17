import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
//recoil state
import { activePageState } from '../../recoilStore/usersTabStore';
//components
import ButtonsBlock from './ButtonsBlock';

const PrevBlock = () => {
    const [ activePage, setActivePage ] = useRecoilState(activePageState);
    const resetActivePage = useResetRecoilState(activePageState);

    const showPrev = () =>{
      const newPage = activePage - 1;
      setActivePage(newPage);
    };

    const showFirst = () => resetActivePage();

	return (
    <ButtonsBlock numForDisable={1}
      leftBtnFn={showFirst}
      rightBtnFn={showPrev}
      areaName='prev'
      text={['First', 'Prev']}
    />
	);
}
export default PrevBlock;