import React, { useState } from 'react';
import { DashboardHeaderContainer } from '../Styles/AllComponents';
import Scroller from '../Components/Dashboard/Scroller';
import UpdatesSection from '../Components/Dashboard/UpdatesSection';

function Dashboard() {
	const [UpdateCounter, setUpdateCounter] = useState<number>(5);

	return (
		<>
			<DashboardHeaderContainer style={{ overflow: 'hidden', width: '100vw' }}>
				<Scroller Updates={UpdateCounter} />
			</DashboardHeaderContainer>
			<UpdatesSection />
		</>
	);
}

export default Dashboard;
