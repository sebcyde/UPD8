import axios from 'axios';
import styled from 'styled-components';
import { NewsKey2 } from './Keys';

const options = {
	method: 'GET',
	url: 'https://api.newscatcherapi.com/v2/search',
	params: { q: 'Tesla', lang: 'en', sort_by: 'relevancy', page: '1' },
	headers: {
		'x-api-key': NewsKey2,
	},
};

const DateFormatter = (ArticleDate: Date) => {
	const Today = new Date();
	const NewDate = ArticleDate.toISOString();

	if (NewDate == Today.toString()) {
		console.log('same date', NewDate);
		return;
	}

	return NewDate;
};

const ArticleContainer = styled.div`
	max-width: 100%;
	height: 200px;
	border-bottom: 1px solid green;
	margin: 5px;
	padding: 10px;
	img {
		width: 20%;
		height: auto;
	}
	div {
		display: flex;
		flex-direction: column;
		span {
			display: flex;
			h2 {
				font-size: 20px;
			}
		}
	}
`;

export const RetrieveNews = async (ViewArticle: any) => {
	const APICall = await axios.request(options);
	const NewsArticles = await APICall.data;
	console.log('NewsArticles:', NewsArticles);

	const Articles = await Promise.all(
		NewsArticles.articles.map((Article: any, index: number) => {
			return (
				<ArticleContainer onClick={() => ViewArticle(Article.link)} key={index}>
					<img
						src={Article.media}
						alt={Article.title}
						className="ArticleImage"
					/>
					<div className="SpanContainer">
						<span className="ArticleHeaders">
							<h2>{Article.title}</h2>
							<p>{Article.published_date}</p>
						</span>
						<span className="ArticleInfo">
							<p>{Article.excerpt}</p>
							<p>{Article.title}</p>
						</span>
					</div>
				</ArticleContainer>
			);
		})
	);
	return Articles;
};
