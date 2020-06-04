import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Navigation from 'components/Navigation';
import styled from 'styled-components';

import { incrementAsync, selectHomeTest, MAIN_TEST } from './Slice';

const Home = ({ menus }) => {
	const mainTest = useSelector(selectHomeTest);
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<Grid
				container
				direction='column'
				justify='center'
				alignItems='center'
			>
				<Grid
					className='header'
					container
					direction='row'
					justify='center'
					alignItems='center'
				>
					<Navigation menus={menus} />
					<Navigation menus={menus} />
					<Navigation menus={menus} />
				</Grid>
				<div className='body'>body</div>
				<div className='foot'>foot</div>
			</Grid>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
