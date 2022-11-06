import { bindActionCreators, createSlice } from '@reduxjs/toolkit';

const initialState: {
	'Global Quote': {
		'01. symbol': 'IBM';
		'02. open': '135.6500';
		'03. high': '137.7300';
		'04. low': '134.9400';
		'05. price': '136.9600';
		'06. volume': '4177972';
		'07. latest trading day': '2022-11-04';
		'08. previous close': '134.4700';
		'09. change': '2.4900';
		'10. change percent': '1.8517%';
	};
}[] = [];

export const Portfolio = createSlice({
	name: 'Portfolio',
	initialState,
	reducers: {
		RetrievePort: (state, action) => {
			let index = state.indexOf(action.payload);
			if (index > -1) {
				state.splice(index, 1);
			}
			return [action.payload];
		},
		UpdatePort: (state, action) => {
			let index = state.indexOf(action.payload);
			if (index > -1) {
				state.splice(index, 1);
			}
			return [...state, action.payload];
		},
		RemoveElement: (state, action) => {
			let index = state.indexOf(action.payload);
			if (index > -1) {
				return state.splice(index, 1);
			}
		},
		AddElement: (state, action) => {
			let index = state.indexOf(action.payload);
			if (index > -1) {
				state.splice(index, 1);
			}
			return [...state, ...action.payload];
		},
	},
});

export default Portfolio.reducer;
