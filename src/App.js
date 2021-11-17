import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import { GlobalStyle } from './components/Styled/GlobalStyle';
import ErrorLoad from './components/Styled/Loaders/ErrorLoad';
import Preloader from './components/Styled/Loaders/Preloader';
import UsersTab from './components/UsersTab';
// import FindUser from './components/FindUser';
//store
import { getStatistic, selectStatus, selectError } from './store/getStatisticSlice';

function App() {
	const dispatch = useDispatch(),
		error = useSelector(selectError),
		status = useSelector(selectStatus);

	useEffect(() => dispatch(getStatistic()), [dispatch]);

	return (
    <>
      <GlobalStyle/>
      {(status === 'success') &&
      <>
        <UsersTab/>
      </>
      }
      {(status === 'loading') && <Preloader/>}
      {error && <ErrorLoad text={error}/>}
    </>
	);
}

export default App;
