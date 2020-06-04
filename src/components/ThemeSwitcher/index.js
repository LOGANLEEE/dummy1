import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const ThemeSwitcher = ({ isDark }) => {
	// const [isDark, setIsDark] = useState(true);

	return (
		<Wrapper>
			<IconButton aria-label='dark' className={isDark ? 'dark' : 'white'}>
				{isDark ? <Brightness3Icon /> : WbSunnyIcon}
			</IconButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.white {
		color: white;
	}
`;

ThemeSwitcher.propTypes = { isDark: PropTypes.bool };

ThemeSwitcher.defaultProps = { isDark: true };

export default ThemeSwitcher;
