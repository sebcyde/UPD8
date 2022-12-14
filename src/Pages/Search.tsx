import React, { useState, useCallback, useMemo } from 'react';
import { SearchInput, ArticleContainer } from '../Styles/AllComponents';
// import { Debounce } from '../Functions/Debounce';
import styled from 'styled-components';
import { NewsKey } from '../API/Keys';
// import { debounce } from 'debounce';
import { Article } from '../Types/Article';
import axios from 'axios';

function Search() {
	const [Type, setType] = useState<string>('News');
	const [Articles, setArticles] = useState<[]>([]);
	const [Q, setQ] = useState<string>('News');

	const Search = (SearchType: string, Query: string) => {
		if (SearchType === 'News') {
			console.log('News search initialised');
			axios
				.get(
					`https://newsapi.org/v2/everything?q=${Query}&from=2022-10-31&sortBy=publishedAt&apiKey=${NewsKey}`
				)
				.then((response: any) => {
					console.log(response.data.articles);
					setArticles(response.data.articles);
				});
		} else {
			console.log('Translation search initialised');
		}
	};

	const DateFormatter = (Date: Date) => {
		let FormattedDate = `${Date.getDate()}/${Date.getMonth()}`;
		let FormattedTime = `${Date.getHours()}:${Date.getMinutes()}`;
		return `${FormattedTime} - ${FormattedDate}`;
	};

	return (
		<div className="h-100 w-100 over-y-scroll fixed">
			<div
				style={{
					position: 'sticky',
					top: '0px',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					height: '150px',
					backgroundColor: 'transparent',
				}}
			>
				<SearchInput
					placeholder="Search Query"
					onChange={(e) => {
						Search(Type, e.target.value);
						// debounce((8e: any) => Search('News', e.target.value), 1000, false);
					}}
				/>
			</div>
			<div
				style={{
					textAlign: 'center',
					marginTop: '0px',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{Articles.map((Article: Article) => {
					var utcDate = Article.publishedAt;
					var localDate = new Date(utcDate);

					return (
						<ArticleContainer>
							<span>
								<span>
									<h4>{Article.source.Name} </h4> <h4>{Article.author}</h4>
								</span>
								<p>{DateFormatter(localDate)}</p>
							</span>
							<h3>{Article.title}</h3>
						</ArticleContainer>
					);
				})}
			</div>
		</div>
	);
}

export default Search;
