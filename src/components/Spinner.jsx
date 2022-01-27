import PropTypes from 'prop-types';
import spinner from './spinner.webp';

const Spinner = ({ spinnerClass, description }) => {
	return <img className={spinnerClass} src={spinner} alt={description} />;
};

Spinner.propTypes = {
	spinnerClass: PropTypes.string,
	description: PropTypes.string.isRequired,
};

Spinner.defaultProps = {
	spinnerClass: 'spinner',
	description: 'Loading spinner',
};

export default Spinner;
