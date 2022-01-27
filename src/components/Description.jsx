import PropTypes from 'prop-types';

const Description = ({ description, source, linkTitle }) => {
	return (
		<div className="description-container">
			<p className="description-title">Description</p>
			<p>{description}</p>

			<a
				className="source-link"
				href={source}
				title={linkTitle}
				rel="noopener noreferrer"
				target="_blank"
			>
				View more details
			</a>
		</div>
	);
};

Description.propTypes = {
	description: PropTypes.string,
	source: PropTypes.string,
	linkTitle: PropTypes.string.isRequired,
};

Description.defaultProps = {
	description: 'No description available',
	source: '',
	linkTitle: 'Go to the original ad',
};

export default Description;
