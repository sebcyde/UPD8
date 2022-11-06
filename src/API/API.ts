import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Initialise, ToggleLoading, UpdatePort } from '../Redux/store';

export const StartUp = async () => {
	const Portfolio = useSelector((state: any) => state.Portfolio);
	let NewsKey: string = 'e0dfda639a5a4f9f95e246f7a789d9a6';
	let PortKey: string = 'E8FAQ4X1Q5P2WHPN';
	let DefaultPort = [
		{
			'Global Quote': {
				'01. symbol': 'AAPL',
				'02. open': '135.6500',
				'03. high': '137.7300',
				'04. low': '134.9400',
				'05. price': '136.9600',
				'06. volume': '4177972',
				'07. latest trading day': '2022-11-04',
				'08. previous close': '134.4700',
				'09. change': '2.4900',
				'10. change percent': '1.8517%',
			},
		},
		{
			'Global Quote': {
				'01. symbol': 'TSLA',
				'02. open': '135.6500',
				'03. high': '137.7300',
				'04. low': '134.9400',
				'05. price': '136.9600',
				'06. volume': '4177972',
				'07. latest trading day': '2022-11-04',
				'08. previous close': '134.4700',
				'09. change': '2.4900',
				'10. change percent': '1.8517%',
			},
		},
		{
			'Global Quote': {
				'01. symbol': 'MSFT',
				'02. open': '135.6500',
				'03. high': '137.7300',
				'04. low': '134.9400',
				'05. price': '136.9600',
				'06. volume': '4177972',
				'07. latest trading day': '2022-11-04',
				'08. previous close': '134.4700',
				'09. change': '2.4900',
				'10. change percent': '1.8517%',
			},
		},
		{
			'Global Quote': {
				'01. symbol': 'AMZN',
				'02. open': '135.6500',
				'03. high': '137.7300',
				'04. low': '134.9400',
				'05. price': '136.9600',
				'06. volume': '4177972',
				'07. latest trading day': '2022-11-04',
				'08. previous close': '134.4700',
				'09. change': '2.4900',
				'10. change percent': '1.8517%',
			},
		},
	];
	type ExampleTicker = {
		'Global Quote': {
			'01. symbol': 'AAPL';
			'02. open': '135.6500';
			'03. high': '137.7300';
			'04. low': '134.9400';
			'05. price': '136.9600';
			'06. volume': '4177972';
			'07. latest trading day': '2022-11-04';
			'08. previous close': '134.4700';
			'09. change': '2.4900';
			'10. change percent': '1.8517%';
		};
	};
	const dispatch = useDispatch();

	console.log('Initialising...');
	const FrontLoadNews = await axios
		.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NewsKey}`)
		.then((response) => {
			console.log(response.data);
			dispatch(Initialise(response.data.articles));
		})
		.then(() => {
			if (Portfolio.length > 0) {
				Portfolio.forEach(async (Ticker: {}, i: number) => {
					let Update = await axios
						.get(
							`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${Portfolio[i].symbol}&apikey=${PortKey}`
						)
						.then((response) => {
							let Data = response.data;
							console.log(Data);
							dispatch(UpdatePort(Data));
						});
				});
			} else {
				// DefaultPort.forEach(async (Ticker: ExampleTicker, i: number) => {
				// 	let Update = await axios
				// 		.get(
				// 			`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${Ticker.symbol}&apikey=demo`
				// 		)
				// 		.then((response) => {
				// 			let Data = response.data;
				// 			console.log(Data);
				// 			dispatch(UpdatePort(Data));
				// 		});
				// });
				console.log('Portfolio Else Statement');
			}
		})
		.then(() => {
			dispatch(ToggleLoading());
		});
};
