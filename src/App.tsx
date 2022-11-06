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
import styled from 'styled-components';
import Dashboard from './Pages/Menu';
import Settings from './Pages/Settings';
import Password from './Pages/Password';
import axios from 'axios';
import Search from './Pages/Search';
import Menu from './Pages/Menu';
// import Translate from './Pages/Translate';

const PullButton = styled.button`
	padding: 10px 30px;
	background-color: blue;
	color: white;
	border-radius: 10px;
	border: none;
	margin: 20px;
	border: 1px solid white;
`;

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

	const PullData = () => {
		console.log('StoreValues:', StoreValues);
		console.log('Portfolio:', Portfolio);
	};

	return (
		<div className="App">
			{Loading.value == false ? (
				<LoadingPage />
			) : (
				<>
					<div
						style={{
							marginTop: '20px',
							position: 'fixed',
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<PullButton
							onClick={() => {
								PullData();
							}}
						>
							Pull Data
						</PullButton>
					</div>

					<Routes>
						<Route path="/" element={<Menu />} />
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
