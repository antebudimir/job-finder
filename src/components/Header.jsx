import PropTypes from 'prop-types';

const Header = ({ title }) => {
	return (
		<header id="header">
			<i className="icon-binoculars"></i>

			<h1>{title}</h1>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

Header.defaultProps = {
	title: 'Job Finder',
};

export default Header;
