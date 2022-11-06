import React, { useState } from 'react';
import { NewsKey } from '../API/Keys';
import axios from 'axios';
import { Debounce } from '../Functions/Debounce';

function Search() {
	const [Type, setType] = useState<string>('News');
	const [Q, setQ] = useState<string>('');

	const Search = async (SearchType: string, Query: string) => {
		await axios
			.get(
				`https://newsapi.org/v2/everything?q=${Query}&from=2022-10-31&sortBy=popularity&apiKey=${NewsKey}`
			)
			.then((response: any) => {
				console.log(response.data.articles);
			});
	};

	// Debounce(Search(Type, Q), 1000);

	return <div className="h-100 w-100 ">Search</div>;
}

export default Search;
