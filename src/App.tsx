import './Styles/Main.scss';
import React, { useEffect, useState } from 'react';
import LoadingPage from './Pages/LoadingPage';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import { NewsRetriever } from './API/API';

function App() {
	const [Loading, setLoading] = useState<boolean>(true);

	const Initialise = async () => {
		let News = await NewsRetriever();
		console.log(News);
		setLoading(false);
	};

	useEffect(() => {
		Initialise();
	}, []);

	return (
		<div className="App">
			{Loading ? (
				<LoadingPage />
			) : (
				<>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="settings" element={<Settings />} />
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
