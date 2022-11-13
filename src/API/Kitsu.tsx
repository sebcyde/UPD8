import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const options = {
	method: 'GET',
	url: 'https://kitsu.io/api/oauth',
	params: {
		lang: 'en',
		page: '1',
		page_size: '100',
		when: '30d',
		countries: ['GB', 'US'],
	},
	headers: {
		Accept: 'application / vnd.api + json',
		'Content-Type': 'application / vnd.api + json',
	},
};

const AnimeContainer = styled.div`
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

export const Kitsu = async () => {
	const APICall = await axios.request(options);
	const AnimeRespone = await APICall.data;
	console.log('AnimeRespone:', AnimeRespone);

	// const Anime = await Promise.all(
	// 	AnimeRespone.articles.map((Article: any, index: number) => {
	// 		return (
	// 			<AnimeContainer onClick={() => ViewArticle(Article.link)} key={index}>
	// 				<div className="SpanContainer">
	// 					<h2>{Article.title}</h2>
	// 					<span className="ArticleInfo">
	// 						<p>{Article.published_date}</p>
	// 						<p>{Article.clean_url}</p>
	// 					</span>
	// 				</div>
	// 				<img
	// 					src={Article.media}
	// 					alt={Article.title}
	// 					className="ArticleImage"
	// 				/>
	// 			</AnimeContainer>
	// 		);
	// 	})
	// );
	// return Articles;
};
