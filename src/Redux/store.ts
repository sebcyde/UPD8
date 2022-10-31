import {
	configureStore,
	ThunkAction,
	Action,
	createSlice,
} from '@reduxjs/toolkit';

const initialState: any[] = [];

const InitSlice = createSlice({
	name: 'InitialSlice',
	initialState,
	reducers: {
		Initialise: (state, action) => {
			state = [...state, ...action.payload];
		},
		Update: (state, action) => {
			state = action.payload;
		},
	},
});

const StoreLoading = createSlice({
	name: 'StoreLoading',
	initialState: { value: true },
	reducers: {
		ToggleLoading: (state) => {
			state.value = !state.value;
		},
	},
});

export const { Initialise, Update } = InitSlice.actions;
export const { ToggleLoading } = StoreLoading.actions;
export const store = configureStore({
	reducer: { InitialSlice: InitSlice.reducer, Loading: StoreLoading.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
