import axios from 'axios';
import styled from 'styled-components';
import { NewsKey2 } from './Keys';

const options = {
	method: 'GET',
	url: 'https://api.newscatcherapi.com/v2/latest_headlines',
	params: {
		lang: 'en',
		page: '1',
		page_size: '100',
		when: '30d',
		countries: ['GB', 'US'],
	},
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
	height: fit-content;
	border-bottom: 1px solid green;
	margin: 5px;
	padding: 10px;
	display: flex;
	align-items: center;
	img {
		object-fit: cover;
		width: 100px;
		height: 100px;
	}
	div {
		width: 70%;
		height: 100%;
		h2 {
			font-size: 20px;
		}
		display: flex;
		flex-direction: column;
		span {
			display: flex;
			font-size: 15px;
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
					<div className="SpanContainer">
						<h2>{Article.title}</h2>
						<span className="ArticleInfo">
							<p>{Article.published_date}</p>
							<p>{Article.clean_url}</p>
						</span>
					</div>
					<img
						src={Article.media}
						alt={Article.title}
						className="ArticleImage"
					/>
				</ArticleContainer>
			);
		})
	);
	return Articles;
};
