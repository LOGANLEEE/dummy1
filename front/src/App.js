import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import Main from 'container/Main';
import Stastica from 'container/Stastica';
import ExchangeRate from 'container/ExchangeRate';

import styled from 'styled-components';
// import './App.css';

function App() {
	return (
		<Wrapper>
			{/* <header className='App-header'> */}
			{/* <img src={logo} className='App-logo' alt='logo' /> */}
			{/* <Counter /> */}
			<Main />
			<Stastica />
			<ExchangeRate />
			{/* </header> */}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: black;
	color: white;
`;

export default App;
