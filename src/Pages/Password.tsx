import React, { ChangeEvent, ChangeEventHandler } from 'react';
import styled from 'styled-components';
import '../Styles/Animations.scss';
import { useNavigate } from 'react-router-dom';

const Input = styled.input`
	color: #22b455;
	background-color: #020204;
	margin: 0 auto;
	width: 80%;
	height: 40px;
	border: 2px solid #22b455;
	border-radius: 5px;
	font-size: 30px;
	text-align: center;
	caret-color: #22b455;
	&:focus {
		border: 2px solid #22b455;
	}
`;

const ScrollContainer = styled.div`
	color: #22b455;
	margin-bottom: 20px;
`;

const ScrollText = styled.div`
	color: #22b455;
	font-size: 20px;
`;

function Password() {
	const navigate = useNavigate();

	const PassCheck = (e: any) => {
		e.preventDefault();
		if (e.target.value.toLowerCase() === 'electric') {
			navigate('/');
		}
	};

	return (
		<div className="w-100 h-100 flex col just-center align-center">
			<ScrollContainer id="scroll-container">
				<ScrollText id="scroll-text">Enter password to continue.</ScrollText>
			</ScrollContainer>
			<Input type="password" onChange={PassCheck} />
		</div>
	);
}

export default Password;
