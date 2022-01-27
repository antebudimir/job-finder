import { createContext, useReducer } from 'react';
import { formReducer } from './formReducer';
import { SET_URL, SET_SEARCH_TERMS, SET_COUNTRY } from './types';
import { useFetch } from '../context/useFetch';

export const FormContext = createContext();

// Adzuna credentials
const adzunaClientId = process.env.REACT_APP_ADZUNA_CLIENT_ID;
const adzunaClientKey = process.env.REACT_APP_ADZUNA_CLIENT_KEY;

const initialState = {
	country: {
		value: 'gb',
		label: 'Great Britain',
	},
	location: '',
	title: '',
	URL: '',
	pageNumber: 1,
};

const FormProvider = (props) => {
	const [formState, formDispatch] = useReducer(formReducer, initialState),
		{ URL } = formState;

	const selectCountry = (selectedOption) => {
		formDispatch({ type: SET_COUNTRY, country: selectedOption });
	};

	const setUserInput = (name, value) => {
		formDispatch({ type: SET_SEARCH_TERMS, payload: { name, value } });
	};

	const getAds = (countryValue, pageNumber, title, location) => {
		const endpoint = `https://api.adzuna.com/v1/api/jobs/${countryValue}/search/${pageNumber}?app_id=${adzunaClientId}&app_key=${adzunaClientKey}&results_per_page=15&what=${title}&where=${location}&sort_by=date`;

		formDispatch({
			type: SET_URL,
			page: pageNumber,
			URL: endpoint,
		});
	};

	// fetch results
	useFetch(URL);

	return (
		<FormContext.Provider
			value={{ formState, selectCountry, setUserInput, getAds }}
		>
			{props.children}
		</FormContext.Provider>
	);
};

export default FormProvider;
