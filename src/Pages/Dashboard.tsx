import React, { useState } from 'react';
import { DashboardHeaderContainer } from '../Styles/AllComponents';
import UpdatesSection from './Components/Dashboard/UpdatesSection';

function Dashboard() {
	const [UpdateCounter, setUpdateCounter] = useState<number>(5);
	const HeaderBannerContent = async () => {
		let Content = '';
		return Content;
	};

	return (
		<>
			<DashboardHeaderContainer style={{ overflow: 'hidden', width: '100vw' }}>
				<h1 id="scroll-text" style={{ whiteSpace: 'nowrap', width: '180vw' }}>
					Welcome Back Sebastian. You have {UpdateCounter} new updates.
					{UpdateCounter > 0 ? ' See below for details.' : ''}
				</h1>
			</DashboardHeaderContainer>
			<UpdatesSection />
		</>
	);
}

export default Dashboard;
