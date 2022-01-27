import {
	FETCH_INIT,
	HANDLE_SUCCESS,
	HANDLE_FAILURE,
	HANDLE_NO_RESULTS,
} from './types';

export const dataFetchReducer = (state, action) => {
	const { type, data, count } = action;

	switch (type) {
		case FETCH_INIT:
			return {
				...state,
				data: [],
				count: '',
				loading: true,
				error: false,
				noResults: false,
			};
		case HANDLE_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				noResults: false,
				data: data,
				count: count,
			};
		case HANDLE_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				noResults: false,
				data: [],
				count: '',
			};

		case HANDLE_NO_RESULTS:
			return {
				...state,
				loading: false,
				error: false,
				noResults: true,
				data: [],
				count: '',
			};
		default:
			throw new Error();
	}
};
