import axios from 'axios';

export const NewsRetriever = async () => {
	let KEY: string = 'e0dfda639a5a4f9f95e246f7a789d9a6';
	await axios
		.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
		.then((response) => {
			let Data = response.data;
			console.log(Data);
			return Data;
		});
};
