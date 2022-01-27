import { Fragment, useContext } from 'react';
import { DataFetchContext } from '../context/dataFetchContext';
import { FormContext } from '../context/FormContext';
import Select from 'react-select';
import Button from './Button';
import Spinner from './Spinner';

const countries = [
	{ value: 'gb', label: 'Great Britain' },
	{ value: 'at', label: 'Austria' },
	{ value: 'au', label: 'Australia' },
	{ value: 'br', label: 'Brazil' },
	{ value: 'ca', label: 'Canada' },
	{ value: 'de', label: 'Germany' },
	{ value: 'fr', label: 'France' },
	{ value: 'in', label: 'India' },
	{ value: 'it', label: 'Italy' },
	{ value: 'nl', label: 'Netherlands' },
	{ value: 'nz', label: 'New Zealand' },
	{ value: 'pl', label: 'Poland' },
	{ value: 'ru', label: 'Russia' },
	{ value: 'sg', label: 'Singapore' },
	{ value: 'us', label: 'United States' },
	{ value: 'za', label: 'South Africa' },
];

const SearchForm = () => {
	const { state } = useContext(DataFetchContext),
		{ formState, selectCountry, setUserInput, getAds } =
			useContext(FormContext),
		{ country, location, title } = formState,
		countryValue = country.value;
	let { pageNumber } = formState;

	// console.log(state);

	const handleCountry = (selectedOption) => {
		selectCountry(selectedOption);
	};

	const handleUserInput = (e) => {
		const { name, value } = e.target;

		setUserInput(name, value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		getAds(countryValue, pageNumber, title, location);
	};

	return (
		<Fragment>
			<form id="search-form" onSubmit={handleSubmit}>
				<label htmlFor="title" className="hidden-visually">
					Job Title
				</label>
				<input
					className="form-field"
					type="text"
					name="title"
					placeholder="Job title, keywords or company"
					value={title}
					onChange={handleUserInput}
					required
				/>
				<label htmlFor="location" className="hidden-visually">
					Job Location
				</label>
				<input
					className="form-field"
					type="text"
					name="location"
					placeholder="City, zip code or remote"
					value={location}
					onChange={handleUserInput}
				/>

				<Select
					styles={customSelectStyles}
					options={countries}
					value={country}
					onChange={handleCountry}
				/>

				<Button
					buttonClass="button search-button"
					title="Search for jobs"
					text="Search"
				/>

				{state.data.length > 0 && <p>{state.count} results</p>}
			</form>

			{state.loading && <Spinner />}

			{state.error && (
				<p className="info-message">
					Something went wrong. Check your internet connection and try again.
				</p>
			)}

			{state.noResults && (
				<p className="info-message">
					No results. Refine your search and try again.
				</p>
			)}

			{formState.warning && (
				<p className="info-message">Please pick a category.</p>
			)}
		</Fragment>
	);
};

const customSelectStyles = {
	control: (provided, state) => ({
		...provided,
		border: 0,
		borderRadius: 2,
		boxShadow: 'rgba(140, 179, 105, 0.2) 0px 2px 5px 0px',
		outline: state.isFocused && '1px solid rgb(140, 179, 105)',
		padding: 7,
		cursor: 'pointer',

		':hover': {
			outline: '1px solid rgb(140, 179, 105)',
		},
	}),
};

export default SearchForm;
