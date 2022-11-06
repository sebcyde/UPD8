import './Styles/Main.scss';
import {
	Initialise,
	store,
	ToggleLoading,
	UpdatePort,
} from '../src/Redux/store';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NewsKey, PortKey } from './API/Keys';
import { useDispatch, useSelector } from 'react-redux';
import { ExampleTicker, DefaultPort } from './Types/Ticker';
import LoadingPage from './Pages/LoadingPage';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import Password from './Pages/Password';
import axios from 'axios';
import Search from './Pages/Search';
// import Translate from './Pages/Translate';

function App() {
	let Portfolio = useSelector((state: any) => state.Portfolio);
	let Loading = useSelector((state: any) => state.Loading);
	let StoreValues = useSelector((state: any) => state.InitialSlice);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const StartUp = async () => {
		console.log('Initialising...');
		const FrontLoadNews = await axios
			.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NewsKey}`)
			.then((response) => {
				console.log(response.data);
				dispatch(Initialise(response.data.articles));
			})
			.then(() => {
				if (Portfolio.length > 0) {
					Portfolio.forEach(async (Ticker: {}, i: number) => {
						let Update = await axios
							.get(
								`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${Portfolio[i].symbol}&apikey=${PortKey}`
							)
							.then((response) => {
								let Data = response.data;
								dispatch(UpdatePort(Data));
							});
					});
				} else {
					DefaultPort.forEach(async (Ticker: ExampleTicker) => {
						let Update = await axios
							.get(
								`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${Ticker['01. symbol']}&apikey=${PortKey}`
							)
							.then((response) => {
								let Data = response.data;
								dispatch(UpdatePort(Data));
							});
					});
					console.log('Portfolio Else Statement');
				}
			})
			.then(() => {
				dispatch(ToggleLoading());
			});
	};

	useEffect(() => {
		setTimeout(() => {
			// turn off when not in use
			// StartUp();
		}, 1500);
	}, []);

	useEffect(() => {
		console.log('Store Values', StoreValues);
		console.log('Loading', Loading.value);
		console.log('Portfolio', Portfolio);
	}, [Portfolio]);

	return (
		<div className="App">
			{Loading.value == false ? (
				<LoadingPage />
			) : (
				<>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="password" element={<Password />} />
						<Route path="settings" element={<Settings />} />
						<Route path="search" element={<Search />} />
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
