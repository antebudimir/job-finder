import PropTypes from 'prop-types';

const Button = ({ type, value, title, handleClick, buttonClass, text }) => {
	return (
		<button
			type={type}
			value={value}
			title={title}
			onClick={handleClick}
			className={buttonClass}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	buttonClass: PropTypes.string,
	handleClick: PropTypes.func,
	text: PropTypes.string.isRequired,
};

Button.defaultProps = {
	type: 'submit',
	value: 'search',
	title: 'Search for something',
	buttonClass: '',
	handleClick: () => null,
	text: 'Button',
};

export default Button;
