import styled from 'styled-components';
import BG1 from '../Assets/Sci-Fi/Blue/Hud4.png';

export const DashboardContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const DashboardMenuItem = styled.div`
	height: 100px;
	width: 65%;
	display: flex;
	flex-direction: column;
	color: white;
	align-items: center;
	justify-content: center;
	margin: 15px;
	background-image: url(${BG1});
	background-size: 80%;
	background-position: center;
	background-repeat: no-repeat;
	font-size: 22px;
`;

export const PullButton = styled.button`
	padding: 10px 30px;
	background-color: blue;
	color: white;
	border-radius: 10px;
	border: none;
	margin: 20px;
	border: 1px solid white;
`;

export const SettingsContainer = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid green;

	h2 {
		border: 1px solid red;
		padding: 20px;
	}

	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		span {
			border: 1px solid blue;
			margin: 5px 0px;
			padding: 10px;
		}
	}
`;
