import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementAsync, selectHomeTest, MAIN_TEST } from './Slice';

const Home = (props) => {
	const mainTest = useSelector(selectHomeTest);
	const dispatch = useDispatch();

	return (
		<div>
			<span>current Value : {mainTest}</span>
			<button onClick={() => dispatch(incrementAsync(3))}>
				fire async
			</button>
			<button onClick={() => dispatch(MAIN_TEST())}>fire</button>
		</div>
	);
};

export default Home;
