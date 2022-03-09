import React, { useEffect, useCallback, Suspense } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import env from '../../env.json';
//helpers
import calcDaysInMonth from '../../helpers/calcDaysInMonth';
//recoil state
import {
  activePeriodState,
  daysCountState,
  dbUrlState,
} from '../../recoilStore/usersDataStore';
import { rowOnPageState } from '../../recoilStore/showTabStore';
import { activeDateState } from '../../recoilStore/modalStore';

//components
import FindUser from '../FindUser';
import UsersTab from '../UsersTab';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal';
import ErrorBoundary from '../Styled/ErrorBoundary';
import Loader from '../Styled/Loader';

const Tab = ({ period, rowOnPage }) => {
  //recoil states
  const setRowOnPage = useSetRecoilState(rowOnPageState),
    setDaysCount = useSetRecoilState(daysCountState),
    setActivePeriod = useSetRecoilState(activePeriodState),
    setDbUrlState = useSetRecoilState(dbUrlState),
    activeDate = useRecoilValue(activeDateState);

  //prepare url from active period
  const prepareUrl = useCallback(period => {
    //! здесь готовим API url для получения usersDb
    const { getUsersUrl } = env.backend;

    return getUsersUrl;
  }, []);

  useEffect(() => {
    setDaysCount(calcDaysInMonth(period));
    setActivePeriod(period);
    setRowOnPage(rowOnPage);
    setDbUrlState(prepareUrl(period));
  }, [
    period,
    rowOnPage,
    setActivePeriod,
    setDaysCount,
    setRowOnPage,
    setDbUrlState,
    prepareUrl,
  ]);

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <FindUser />
          <UsersTab />
          <Pagination />
        </Suspense>
      </ErrorBoundary>
      {activeDate && <Modal />}
    </>
  );
};
export default Tab;
