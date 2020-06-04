import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'container/Home/Slice';

export default configureStore({
	reducer: {
		home: homeReducer,
	},
});
