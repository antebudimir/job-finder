import PropTypes from 'prop-types';

const Footer = (footerDetails) => {
	const { info, link, linkText, infoTwo, linkTwo, linkTwoText } = footerDetails;

	return (
		<footer id="footer">
			<p>
				{info}{' '}
				<a href={link} title={`Go to ${linkText} website`}>
					{linkText}
				</a>
			</p>

			<p>
				{infoTwo}{' '}
				<a href={linkTwo} title={`Go to ${linkTwoText} website`}>
					{linkTwoText}
				</a>
			</p>
		</footer>
	);
};

Footer.propTypes = {
	info: PropTypes.string.isRequired,
	infoTwo: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	linkTwo: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	linkTwoText: PropTypes.string.isRequired,
};

Footer.defaultProps = {
	info: 'Powered by',
	infoTwo: 'Developed by',
	link: 'https://www.adzuna.com',
	linkTwo: 'https://www.antebudimir.com',
	linkText: 'Adzuna',
	linkTwoText: 'Ante Budimir',
};

export default Footer;
