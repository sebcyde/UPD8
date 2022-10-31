import './Styles/Main.scss';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NewsRetriever } from './API/API';
import axios from 'axios';
import LoadingPage from './Pages/LoadingPage';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import Password from './Pages/Password';
import { useDispatch } from 'react-redux';

function App() {
	const [Loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const Initialise = async () => {
		let KEY: string = 'e0dfda639a5a4f9f95e246f7a789d9a6';
		const FrontLoad = await axios
			.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
			.then((response) => {
				let Data = response.data;
				dispatch(Data);
				console.log(Data);
			});
		navigate('password');
		setLoading(false);
	};

	useEffect(() => {
		setTimeout(() => {
			Initialise();
		}, 3000);
	}, []);

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
