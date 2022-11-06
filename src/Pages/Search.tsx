import React, { useState, useCallback, useMemo } from 'react';
import InputBG from '../Assets/Sci-Fi/Blue/Hud8.png';
// import { Debounce } from '../Functions/Debounce';
import styled from 'styled-components';
import { NewsKey } from '../API/Keys';
import { debounce } from 'debounce';
import axios from 'axios';

const SearchInput = styled.input`
	background-image: url(${InputBG});
	background-size: 100% 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-color: transparent;
	width: 90%;
	text-align: center;
	height: 100%;
	border: none;
	margin: 0px 20px;
	color: #39c7f4;
	font-size: 25px;
	outline: none;
	overflow: hidden;
	&::placeholder {
		color: #39c7f4;
	}
`;

function Search() {
	const [Type, setType] = useState<string>('News');
	const [Articles, setArticles] = useState<[]>([]);
	const [Q, setQ] = useState<string>('News');

	const Search = (SearchType: string, Query: string) => {
		if (SearchType === 'News') {
			console.log('News search initialised');
			axios
				.get(
					`https://newsapi.org/v2/everything?q=${Query}&from=2022-10-31&sortBy=popularity&apiKey=${NewsKey}`
				)
				.then((response: any) => {
					console.log(response.data.articles);
					setArticles(response.data.articles);
				});
		} else {
			console.log('Translation search initialised');
		}
	};

	return (
		<div className="h-100 w-100 ">
			<div
				style={{
					position: 'sticky',
					top: '0px',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					height: '150px',
				}}
			>
				<SearchInput
					placeholder="Search Query"
					onChange={(e) => {
						// Search(Type, e.target.value);
						// debounce((e: any) => Search('News', e.target.value), 1000, false);
					}}
				/>
				{Articles.map((Article) => {
					return (
						<div>
							<h3>{Article.title}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Search;
