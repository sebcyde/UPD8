import React from 'react';
import styled from 'styled-components';

const DashboardMenuItem = styled.div`
	height: 100px;
	width: 80%;
	display: flex;
	flex-direction: column;
	background-color: green;
	color: white;
	align-items: center;
	justify-content: center;
`;

function MenuContainers() {
	return <DashboardMenuItem>MenuContainers</DashboardMenuItem>;
}

export default MenuContainers;
