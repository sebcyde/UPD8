import React, { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { RetrieveNews } from '../../API/NewsCatcher';

type Props = {};
const UpdatesContainer = styled.div``;

function UpdatesSection({}: Props) {
	const [Timer, setTimer] = useState<number>(0);
	const [PageView, setPageView] = useState<any[]>();

	const Startup = async () => {
		const Articles = await RetrieveNews(ViewArticle);
		setPageView(Articles);
	};

	const ViewArticle = (ArticleLink: string) => {
		console.log(ArticleLink);
	};

	const PullNews = () => Startup();

	// useEffect(() => {
	// 	Startup();
	// }, []);

	return (
		<UpdatesContainer>
			Updates Container
			<button onClick={PullNews}>Pull Articles</button>
			{PageView ? PageView.map((Article: any) => Article) : null}
		</UpdatesContainer>
	);
}

export default UpdatesSection;
