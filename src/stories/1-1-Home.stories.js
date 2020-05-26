import React from 'react';
import { action } from '@storybook/addon-actions';

import Navigation from 'components/Navigation';
import ThemeSwitcher from 'components/ThemeSwitcher';

import { Provider } from 'react-redux';
import Home from 'container/Home';
import store from 'store';
import {
	Home as HomeIcon,
	Save,
	CloudUpload,
	KeyboardVoice,
	Receipt,
} from '@material-ui/icons';

export default {
	title: 'Home',
	// component: Home,
};

const menus = [
	{
		name: 'Main',
		text: 'Main',
		color: 'secondary',
		startIcon: <HomeIcon />,
	},
	{
		name: 'Main',
		text: 'Main',
		color: 'secondary',
		startIcon: <CloudUpload />,
	},
	{
		name: 'News',
		text: 'News',
		color: 'default',
		startIcon: <Receipt />,
	},
	{
		name: 'Main',
		text: 'Main',
		color: 'primary',
		startIcon: <KeyboardVoice />,
	},
];

export const Navigation_ = () => <Navigation menus={menus} />;
export const ThemeSwitcher_ = () => <ThemeSwitcher isDark={false} />;
export const Home_ = () => (
	<Provider store={store}>
		<Home menus={menus} />
	</Provider>
);
