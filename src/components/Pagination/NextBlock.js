import React from "react";
import { useRecoilState } from "recoil";
//recoil state
import { activePageState } from "../../recoilStore/usersTabStore";
//components
import ButtonsBlock from "./ButtonsBlock";

const NextBlock = ({ pagesCount }) => {
  const [ activePage, setActivePage ] = useRecoilState(activePageState);

  const showNext = () => {
    const newPage = activePage + 1;
    setActivePage(newPage);
  };

  const showLast = () => setActivePage(pagesCount);

  return (
    <ButtonsBlock
      numForDisable={pagesCount}
      leftBtnFn={showNext}
      rightBtnFn={showLast}
      areaName="next"
      text={["Next", "Last"]}
    />
  );
};
export default NextBlock;
