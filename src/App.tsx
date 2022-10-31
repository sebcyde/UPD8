import './Styles/Main.scss';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NewsRetriever } from './API/API';
import LoadingPage from './Pages/LoadingPage';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import Password from './Pages/Password';

function App() {
	const [Loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();

	const Initialise = async () => {
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
