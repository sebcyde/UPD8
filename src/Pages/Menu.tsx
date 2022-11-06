import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BG1 from '../Assets/Sci-Fi/Blue/Hud7.png';

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
	font-size: 22px;
`;

function Menu() {
	const navigate = useNavigate();

	const Route = (Location: string) => {
		navigate(`/${Location}`);
	};

	return (
		<DashboardContainer>
			<DashboardMenuItem
				onClick={() => {
					Route('dashboard');
				}}
			>
				Dashboard
			</DashboardMenuItem>
			<DashboardMenuItem
				onClick={() => {
					Route('search');
				}}
			>
				Search
			</DashboardMenuItem>
			<DashboardMenuItem
				onClick={() => {
					Route('news');
				}}
			>
				News
			</DashboardMenuItem>
			<DashboardMenuItem
				onClick={() => {
					Route('Japanese');
				}}
			>
				Japanese
			</DashboardMenuItem>

			<DashboardMenuItem
				onClick={() => {
					Route('settings');
				}}
			>
				Settings
			</DashboardMenuItem>
		</DashboardContainer>
	);
}

export default Menu;
