import { useContext } from 'react';
import { DataFetchContext } from '../context/dataFetchContext';
import { FormContext } from '../context/FormContext';
import Button from './Button';
import Job from './Job';

const Jobs = () => {
	const { state } = useContext(DataFetchContext),
		jobs = state.data,
		totalResults = state.count,
		{ formState, getAds } = useContext(FormContext),
		{ country, location, title } = formState,
		countryValue = country.value;
	let { pageNumber } = formState;

	const fetchPage = (e) => {
		e.preventDefault();

		if (e.currentTarget.value === 'search-prev' && pageNumber > 1) {
			pageNumber--;
		} else if (
			e.currentTarget.value === 'search-next' &&
			pageNumber * 15 < totalResults
		) {
			pageNumber++;
		}

		getAds(countryValue, pageNumber, title, location);
	};

	return (
		jobs.length > 0 && (
			<section id="jobs">
				{jobs.map((job) => {
					// Date converter
					const date = new Date(job.created),
						options = {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric',
						},
						shortDate = new Intl.DateTimeFormat('en-US', options).format(date);

					// Remove extra words from description response
					const replaceTheseWords = /description|job summary/gi,
						newDescription = job.description.replace(replaceTheseWords, '');

					return (
						<Job
							key={job.id}
							title={job.title}
							salaryMin={job.salary_min}
							salaryMax={job.salary_max}
							contractType={job.contract_type}
							publicationDate={shortDate}
							location={job.location.display_name}
							description={newDescription}
							source={job.redirect_url}
							companyName={job.company.display_name}
						/>
					);
				})}

				<Button
					buttonClass={
						pageNumber === 1
							? 'button prev-button inactive-button'
							: 'button prev-button'
					}
					title={
						pageNumber === 1
							? 'You are on the first page'
							: 'Go to the previous page'
					}
					value="search-prev"
					handleClick={fetchPage}
					text="Prev"
				/>

				<Button
					buttonClass={
						pageNumber * 15 > totalResults
							? 'button prev-button inactive-button'
							: 'button'
					}
					title={
						pageNumber * 15 > totalResults
							? 'You are on the last page'
							: 'Go to the next page'
					}
					value="search-next"
					handleClick={fetchPage}
					text="Next"
				/>
			</section>
		)
	);
};

export default Jobs;
