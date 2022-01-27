import { createContext, useReducer } from 'react';
import { dataFetchReducer } from './dataFetchReducer';

export const DataFetchContext = createContext();

const initialState = {
	data: [],
	count: '',
	loading: false,
	error: false,
	noResults: false,
};

const DataFetchProvider = (props) => {
	const [state, dispatch] = useReducer(dataFetchReducer, initialState);

	return (
		<DataFetchContext.Provider value={{ state, dispatch }}>
			{props.children}
		</DataFetchContext.Provider>
	);
};

export default DataFetchProvider;
