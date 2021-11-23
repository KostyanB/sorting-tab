import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import env from './env.json';
//helpers
import calcDaysInMonth from './helpers/calcDaysInMonth';
//components
import { GlobalStyle } from './components/Styled/GlobalStyle';
import ErrorLoad from './components/Styled/Loaders/ErrorLoad';
import Preloader from './components/Styled/Loaders/Preloader';
import Title from './components/Title';
import FindUser from './components/FindUser';
import UsersTab from './components/UsersTab';
import Pagination from './components/Pagination/Pagination';
import Modal from './components/Modal';
//store
import {
  getUserData,
  selectStatus,
  selectError
} from './store/userDataSlice';
import {
  selectOpenModal
} from './store/modalSlice';

function App({ activeMonth, activeYear, rowOnPage}) {
  const {
    backend: { getUsersUrl }
  } = env;

  const [ daysInMonth, setDaysInMonth ] = useState(0);

	const dispatch = useDispatch(),
		error = useSelector(selectError),
		status = useSelector(selectStatus),
    openModal = useSelector(selectOpenModal);

    const prepareUrl = useCallback(baseUrl => {
      //! здесь готовим API url для получения usersDb
      const url = baseUrl;
      return url;
    }, []);

  useEffect(() => {
    const daysCount = calcDaysInMonth(activeMonth, activeYear);
    setDaysInMonth(daysCount);

    const usersDbUrl = prepareUrl(getUsersUrl);
    dispatch(getUserData({ usersDbUrl, daysCount, rowOnPage }));
  },
  [dispatch, getUsersUrl, activeMonth, activeYear, rowOnPage, prepareUrl]);

	return (
    <>
      <GlobalStyle/>
      {(status === 'success') &&
      <>
        <Title activeMonth={activeMonth} activeYear={activeYear}/>
        <FindUser/>
        <UsersTab monthParam={{ daysInMonth, activeMonth, activeYear }}/>
        <Pagination/>
        {openModal && <Modal/>}
      </>
      }
      {(status === 'loading') && <Preloader/>}
      {error && <ErrorLoad text={error}/>}
    </>
	);
}

export default App;
