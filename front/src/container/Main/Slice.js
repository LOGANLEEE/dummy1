import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
	name: 'main',
	initialState: {
		mainTest: 0,
	},

	reducers: {
		MAIN_TEST: (state) => {
			state.mainTest += 1;
		},
	},
});

export const { MAIN_TEST } = mainSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
	setTimeout(() => {
		dispatch(MAIN_TEST(amount));
	}, 1000);
};

export const selectMain = (state) => state.main.mainTest;

export default mainSlice.reducer;
