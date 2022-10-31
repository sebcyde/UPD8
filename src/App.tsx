import './Styles/Main.scss';
import React, { useEffect, useState } from 'react';
import LoadingPage from './Pages/LoadingPage';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';

function App() {
	const [Loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="App">
			{Loading ? (
				<LoadingPage />
			) : (
				<>
					App
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
