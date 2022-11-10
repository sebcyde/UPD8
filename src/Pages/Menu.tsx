import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DashboardContainer, DashboardMenuItem } from '../Styles/AllComponents';

function Menu() {
	const navigate = useNavigate();

	const Route = (Location: string) => {
		navigate(Location);
	};

	return (
		<DashboardContainer>
			<DashboardMenuItem
				onClick={() => {
					Route('/');
				}}
			>
				Dashboard
			</DashboardMenuItem>
			<DashboardMenuItem
				onClick={() => {
					Route('/search');
				}}
			>
				Search
			</DashboardMenuItem>
			<DashboardMenuItem
				onClick={() => {
					Route('/news');
				}}
			>
				News
			</DashboardMenuItem>
			<DashboardMenuItem
				onClick={() => {
					Route('/japanese');
				}}
			>
				Japanese
			</DashboardMenuItem>

			<DashboardMenuItem
				onClick={() => {
					Route('/settings');
				}}
			>
				Settings
			</DashboardMenuItem>
		</DashboardContainer>
	);
}

export default Menu;
