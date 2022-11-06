import './Styles/Main.scss';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NewsRetriever } from './API/API';
import axios from 'axios';
import LoadingPage from './Pages/LoadingPage';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import Password from './Pages/Password';
import { useDispatch, useSelector } from 'react-redux';
import { Initialise, ToggleLoading } from './Redux/store';

function App() {
	let Loading = useSelector((state: any) => state.value);
	let StoreValues = useSelector((state: any) => state.InitialSlice);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const StartUp = async () => {
		console.log('Initialising...');
		let KEY: string = 'e0dfda639a5a4f9f95e246f7a789d9a6';
		const FrontLoad = await axios
			.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`)
			// .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
			.then((response) => {
				console.log(response.data);
				dispatch(Initialise(response.data.articles));
			})
			.then(() => {
				// navigate('password');
				dispatch(ToggleLoading());
				console.log(Loading);
				console.log(StoreValues);
			});
	};

	useEffect(() => {
		setTimeout(() => {
			StartUp();
		}, 3000);
	}, []);

	useEffect(() => {
		console.log('Store Values', StoreValues);
		console.log('Loading', Loading);
	}, [StoreValues, Loading]);

	return (
		<div className="App">
			{Loading ? (
				<LoadingPage />
			) : (
				<>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="password" element={<Password />} />
						<Route path="settings" element={<Settings />} />
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
