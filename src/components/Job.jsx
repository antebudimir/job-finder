import Description from './Description';
import Summary from './Summary';

const Job = (jobDetails) => {
	const {
		title,
		publicationDate,
		location,
		source,
		companyName,
		description,
		salaryMin,
		salaryMax,
		contractType,
	} = jobDetails;

	return (
		<section className="job-container">
			<h2>{title}</h2>

			<Summary
				publicationDate={publicationDate}
				companyName={companyName}
				location={location}
				contractType={contractType}
				salaryMin={salaryMin}
				salaryMax={salaryMax}
			/>

			<Description description={description} source={source} />
		</section>
	);
};

export default Job;
