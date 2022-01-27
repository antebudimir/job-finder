import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const Summary = (summaryDetails) => {
	const { formState } = useContext(FormContext),
		{ country } = formState,
		countryValue = country.value,
		{
			publicationDate,
			location,
			companyName,
			salaryMin,
			salaryMax,
			contractType,
		} = summaryDetails;

	return (
		<section className="summary">
			{/*wrapper's for centering with left alignment on desktop*/}
			<div className="summary-wrapper">
				<div className="summary-detail">
					<i className="icon-calendar"></i>
					{publicationDate} by {companyName}
				</div>

				<div className="summary-detail">
					<i className="icon-pin"></i>
					Location: {location}
				</div>

				{contractType && (
					<div className="summary-detail">
						<i className="icon-anchor"></i>
						Contract: {contractType}
					</div>
				)}

				{/* Salary fine tuning */}
				{(() => {
					let currency;

					if (countryValue === 'gb') {
						currency = '£';
					} else if (
						countryValue === 'us' ||
						countryValue === 'au' ||
						countryValue === 'ca' ||
						countryValue === 'nz'
					) {
						currency = '$';
					} else if (countryValue === 'ru') {
						currency = '₽';
					} else if (countryValue === 'br') {
						currency = 'R$';
					} else if (countryValue === 'in') {
						currency = '₹';
					} else if (countryValue === 'sg') {
						currency = 'S$;';
					} else if (countryValue === 'za') {
						currency = 'R;';
					} else {
						currency = '€';
					}

					if (salaryMin && salaryMax && salaryMin !== salaryMax) {
						return (
							<div className="summary-detail">
								<i className="icon-dollar"></i>
								Salary: {currency}
								{salaryMin} - {currency}
								{salaryMax}
							</div>
						);
					} else if (salaryMin || salaryMax) {
						return (
							(
								<div className="summary-detail">
									<i className="icon-dollar"></i>
									Salary: {currency}
									{salaryMin}
								</div>
							) || (
								<div className="summary-detail">
									<i className="icon-dollar"></i>
									Salary: {currency}
									{salaryMax}
								</div>
							)
						);
					} else {
						return '';
					}
				})()}
			</div>
		</section>
	);
};

export default Summary;
