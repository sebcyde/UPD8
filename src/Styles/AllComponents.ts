import styled from 'styled-components';
import BG1 from '../Assets/Sci-Fi/Blue/Hud7.png';
import InputBG from '../Assets/Sci-Fi/Blue/Hud7.png';
import PullButtonBG from '../Assets/Sci-Fi/Blue/Hud7.png';
// import LoadingBG from '../Assets/Sci-Fi/Blue/Hud7.png';

export const DashboardHeaderContainer = styled.div`
	background-color: black;
	height: 10%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const LoadingContainer = styled.div`
	// border: 2px solid #39c7f4;
	background-color: black;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
// background-image: url(${LoadingBG});
// background-size: 80%;
// background-position: center;
// background-repeat: no-repeat;

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
	padding: 20px 30px;
	background-color: transparent;
	color: white;
	border-radius: 10px;
	border: none;
	margin: 20px;
	background-image: url(${PullButtonBG});
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;
	white-space: nowrap;
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

export const SearchInput = styled.input`
	background-image: url(${InputBG});
	background-size: 75% 150%;
	background-position: center;
	background-repeat: no-repeat;
	background-color: transparent;
	width: 100%;
	text-align: center;
	height: 100%;
	border: none;
	margin: 0px 20px;
	color: #39c7f4;
	font-size: 27px;
	outline: none;
	overflow: hidden;
	display: flex;
	align-items: center;
	&::placeholder {
		color: #39c7f4;
	}
`;

export const ArticleContainer = styled.div`
	border: 1px solid white;
	margin: 10px 20px;
	padding: 10px;
	color: #39c7f4;
	background-color: transparent;
	> span {
		width: 100%;
		display: flex;
		height: fit-content;
		align-items: center;
		justify-content: space-between;
		padding: 5px 0px;

		> span {
			display: flex;
			width: 60%;
			margin: 0px;
			height: 100%;
			h4 {
				font-size: 20px;
				height: 100%;
				margin: 0px;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}

		p {
			margin: 0px;
		}
	}

	h3 {
		width: 95%;
		font-size: 17px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0px;
	}
`;
