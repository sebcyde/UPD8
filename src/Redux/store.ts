import {
	configureStore,
	ThunkAction,
	Action,
	createSlice,
} from '@reduxjs/toolkit';

const initialState: any[] = [];
const initialLoading: {} = {};

const InitSlice = createSlice({
	name: 'InitialSlice',
	initialState,
	reducers: {
		Initialise: (state, action) => {
			state = action.payload;
		},
		Update: (state, action) => {
			state = action.payload;
		},
	},
});

const LoadingSlice = createSlice({
	name: 'Loading',
	initialState: { value: false },
	reducers: {
		ToggleLoading: (state) => {
			state.value = !state.value;
		},
	},
});

export const { Initialise, Update } = InitSlice.actions;
export const { ToggleLoading } = LoadingSlice.actions;
export const store = configureStore({
	reducer: { InitialSlice: InitSlice.reducer, Loading: LoadingSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
