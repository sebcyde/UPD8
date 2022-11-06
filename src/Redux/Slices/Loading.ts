import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false };

export const StoreLoading = createSlice({
	name: 'StoreLoading',
	initialState,
	reducers: {
		ToggleLoading: (state) => {
			state.value = !state.value;
		},
	},
});

export default StoreLoading.reducer;
