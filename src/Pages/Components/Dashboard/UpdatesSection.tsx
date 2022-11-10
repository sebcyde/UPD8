import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RetrieveNews } from '../../../API/NewsCatcher';

type Props = {};
const UpdatesContainer = styled.div``;

function UpdatesSection({}: Props) {
	const [Timer, setTimer] = useState<number>(0);
	const PopulateNews = useCallback(async () => await RetrieveNews(), [Timer]);

	setTimeout(() => {
		setTimer(Timer);
	}, 10000);

	useEffect(() => {
		PopulateNews();
	}, []);

	return (
		<UpdatesContainer>
			Updates Container
			{PopulateNews.map((Article) => {
				<div>
					<h1>Article.</h1>
				</div>;
			})}
		</UpdatesContainer>
	);
}

export default UpdatesSection;
