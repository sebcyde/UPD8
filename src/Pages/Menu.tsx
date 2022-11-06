import React, { CSSProperties } from 'react';
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
	return (
		<DashboardContainer>
			<DashboardMenuItem>MenuContainers 1</DashboardMenuItem>
			<DashboardMenuItem>MenuContainers 2</DashboardMenuItem>
			<DashboardMenuItem>MenuContainers 3</DashboardMenuItem>
			<DashboardMenuItem>MenuContainers 4</DashboardMenuItem>
		</DashboardContainer>
	);
}

export default Menu;
