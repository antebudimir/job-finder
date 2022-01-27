import { useEffect, useContext } from 'react';
import { DataFetchContext } from './dataFetchContext';
import axios from 'axios';
import {
	FETCH_INIT,
	HANDLE_SUCCESS,
	HANDLE_FAILURE,
	HANDLE_NO_RESULTS,
} from './types';

export const useFetch = (URL) => {
	const { dispatch } = useContext(DataFetchContext);

	useEffect(() => {
		if (URL === '') {
			console.log(
				'Search parameters not defined. Select a category and enter a location.',
			);
		} else {
			(async function fetchData() {
				dispatch({ type: FETCH_INIT });

				try {
					const response = await axios(URL);

					if (response.data.results.length === 0) {
						dispatch({ type: HANDLE_NO_RESULTS });
						console.log('No results.');
					} else {
						dispatch({
							type: HANDLE_SUCCESS,
							data: response.data.results,
							count: response.data.count,
						});
						console.log(response.data);
					}
				} catch (error) {
					dispatch({ type: HANDLE_FAILURE });
					console.log('An error occured:', error);
				}
			})();
		}
	}, [URL, dispatch]);
};
