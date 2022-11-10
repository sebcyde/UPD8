import axios from 'axios';
import { NewsKey2 } from './Keys';

const API: string = `/v2/search?q=Apple&'&countries=US,CA&topic=tech,finance,business,economics,politics,news&ranked_only=true&sort_by=date&page_size=[1:100]&page_size=1&apiKey=${NewsKey2}`;

export const RetrieveNews = async () => {
	const APICall = await axios.get(API);
	const NewsArticles = APICall.data;
	console.log('APICall:', APICall);
	console.log('NewsArticles:', NewsArticles);
	return NewsArticles;
};
