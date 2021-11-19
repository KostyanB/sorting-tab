import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import env from './env.json';
//components
import { GlobalStyle } from './components/Styled/GlobalStyle';
import ErrorLoad from './components/Styled/Loaders/ErrorLoad';
import Preloader from './components/Styled/Loaders/Preloader';
import UsersTab from './components/UsersTab';
import Pagination from './components/Pagination/Pagination';
import FindUser from './components/FindUser';
import Modal from './components/Modal';
//store
import {
  getData,
  selectStatus,
  selectError
} from './store/getDataFromServerSlice';
import {
  selectOpenModal
} from './store/modalSlice';

function App() {
  const {
    backend: {
      usersDbUrl
    },
    startParams: {
        activeMonth,
        activeYear
    }
  } = env;
	const dispatch = useDispatch(),
		error = useSelector(selectError),
		status = useSelector(selectStatus),
    openModal = useSelector(selectOpenModal);

	useEffect(() => dispatch(getData({
    usersDbUrl,
    activeMonth,
    activeYear
  })), [dispatch, activeMonth, activeYear, usersDbUrl]);

	return (
    <>
      <GlobalStyle/>
      {(status === 'success') &&
      <>
        <FindUser/>
        <UsersTab/>
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
