import { SET_SEARCH_TERMS, SET_URL, SET_COUNTRY } from './types';

export const formReducer = (state, action) => {
	const { type, payload, URL, country, page } = action;

	switch (type) {
		case SET_COUNTRY:
			return {
				...state,
				country: country,
			};

		case SET_SEARCH_TERMS:
			return {
				...state,
				[payload.name]: payload.value,
			};

		case SET_URL:
			return {
				...state,
				pageNumber: page,
				URL: URL,
			};

		default:
			return state;
	}
};
