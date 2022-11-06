import {
	configureStore,
	ThunkAction,
	Action,
	createSlice,
} from '@reduxjs/toolkit';
import { StoreLoading } from './Slices/Loading';
import { Portfolio } from './Slices/Portfolio';

const initialState: any[] = [];

const InitSlice = createSlice({
	name: 'InitialSlice',
	initialState,
	reducers: {
		Initialise: (state, action) => {
			return [...action.payload];
		},
		Update: (state, action) => {
			return [...state, ...action.payload];
		},
	},
});

export const store = configureStore({
	reducer: {
		InitialSlice: InitSlice.reducer,
		Loading: StoreLoading.reducer,
		Portfolio: Portfolio.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export const { Initialise, Update } = InitSlice.actions;
export const { ToggleLoading } = StoreLoading.actions;
export const { RetrievePort, UpdatePort, RemoveElement, AddElement } =
	Portfolio.actions;
