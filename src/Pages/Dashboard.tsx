import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import MenuContainers from './Components/Dashboard/MenuContainers';

import BG1 from '../Assets/Sci-Fi/Blue/Hud1.png';

const DashboardContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const DashboardMenuItem = styled.div`
	height: 100px;
	width: 80%;
	display: flex;
	flex-direction: column;
	// background-color: green;
	color: white;
	align-items: center;
	justify-content: center;
	margin: 20px;
	// border: 1px solid red;
	background-image: url(${BG1});
	background-size: 80%;
	background-position: center;
	background-repeat: no-repeat;
`;

const PullButton = styled.button`
	padding: 10px 30px;
	background-color: blue;
	color: white;
	border-radius: 10px;
	border: none;
	margin: 20px;
	border: 1px solid white;
`;

function Dashboard() {
	let Portfolio = useSelector((state: any) => state.Portfolio);
	let StoreValues = useSelector((state: any) => state.InitialSlice);

	const PullData = () => {
		console.log('StoreValues:', StoreValues);
		console.log('Portfolio:', Portfolio);
	};

	return (
		<DashboardContainer>
			<DashboardMenuItem>MenuContainers 1</DashboardMenuItem>
			<DashboardMenuItem>MenuContainers 2</DashboardMenuItem>
			<DashboardMenuItem>MenuContainers 3</DashboardMenuItem>
			<DashboardMenuItem>MenuContainers 4</DashboardMenuItem>
			<PullButton
				onClick={() => {
					PullData();
				}}
			>
				Pull Data
			</PullButton>
		</DashboardContainer>
	);
}

export default Dashboard;
