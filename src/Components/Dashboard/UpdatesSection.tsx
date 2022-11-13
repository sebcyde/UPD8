import React, { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { RetrieveNews } from '../../API/NewsCatcher';
import LoadingAnimation from '../Loading/LoadingAnimation';

type Props = {};
const UpdatesContainer = styled.div`
	height: 100%;
`;

function UpdatesSection({}: Props) {
	const [PageView, setPageView] = useState<any[]>();
	const [Loading, setLoading] = useState(true);

	const Startup = async () => {
		const Articles = await RetrieveNews(ViewArticle);
		setPageView(Articles);
		setLoading(false);
	};

	const ViewArticle = (ArticleLink: string) => {
		console.log(ArticleLink);
	};

	const PullNews = () => Startup();

	useEffect(() => {
		Startup();
	}, []);

	return (
		<UpdatesContainer>
			<button onClick={PullNews} style={{ position: 'fixed', top: '100px' }}>
				Pull Articles
			</button>
			{!Loading ? (
				PageView!.map((Article: any) => Article)
			) : (
				<LoadingAnimation />
			)}
		</UpdatesContainer>
	);
}

export default UpdatesSection;
