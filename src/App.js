import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSetRecoilState, useRecoilState } from 'recoil';
import env from './env.json';
//helpers
import calcDaysInMonth from './helpers/calcDaysInMonth';
//store
import {
  getUserData,
  selectStatus,
  selectError
} from './store/userDataSlice';
import {
  selectOpenModal
} from './store/modalSlice';
//recoil state
import {
  activePeriodState,
  daysCountState,
  rowOnPageState,
} from './recoilState/mainTabStates';
//components
import { GlobalStyle } from './components/Styled/GlobalStyle';
import ErrorLoad from './components/Styled/Loaders/ErrorLoad';
import Preloader from './components/Styled/Loaders/Preloader';
import Title from './components/Title';
import FindUser from './components/FindUser';
import UsersTab from './components/UsersTab';
import Pagination from './components/Pagination/Pagination';
import Modal from './components/Modal';

//****************************************************** */
function App({ startActiveMonth, startActiveYear, startRowOnPage }) {
  const { getUsersUrl } = env.backend;

  const dispatch = useDispatch(),
  error = useSelector(selectError),
  status = useSelector(selectStatus),
  openModal = useSelector(selectOpenModal);

  //recoil states
  const setRowOnPage = useSetRecoilState(rowOnPageState),
    setDaysCount = useSetRecoilState(daysCountState),
    [activePeriod, setActivePeriod] = useRecoilState(activePeriodState);

  //prepare url from active period
  const prepareUrl = useCallback(baseUrl => {
    //! здесь готовим API url для получения usersDb
    const url = baseUrl;
    return url;
  }, []);

  useEffect(() => {
    //set recoil states
    const days = calcDaysInMonth(startActiveMonth, startActiveYear);
    setDaysCount(days);
    setActivePeriod({
      activeMonth: startActiveMonth,
      activeYear: startActiveYear
    });
    setRowOnPage(startRowOnPage);
    //get Db
    const usersDbUrl = prepareUrl(getUsersUrl);
    dispatch(getUserData({ usersDbUrl, days }));
  }, [
    startActiveMonth,
    startActiveYear,
    startRowOnPage,
    setActivePeriod,
    setDaysCount,
    setRowOnPage,
    dispatch,
    getUsersUrl,
    prepareUrl
  ]);

	return (
    <>
      <GlobalStyle/>
      {activePeriod && <Title/>}
      <FindUser/>
      {(status === 'success') &&
        <>
          <UsersTab/>
          <Pagination/>
        </>
      }
      {(status === 'loading') && <Preloader/>}
      {error && <ErrorLoad text={error}/>}
      {openModal && <Modal/>}
    </>
	);
}
export default App;