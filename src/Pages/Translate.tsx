import React, { useState, useEffect, useRef } from 'react';
import { Debounce } from '../Functions/Debounce';

function Translate() {
	const [Query, setQuery] = useState<string | undefined>('');
	const translate = require('google-translate-free');
	const LanguageDetect = require('languagedetect');
	const lngDetector = new LanguageDetect();

	// const Swap = async (Query: string) => {
	// 	let Language = lngDetector.detect(Query, 1);
	// 	let LanguageType = lngDetector.setLanguageType('iso2');
	// 	console.log(Language);
	// 	console.log(LanguageType);
	// 	await translate(Query, { to: LanguageType })
	// 		.then((res: any) => {
	// 			console.log(res.text);
	// 			console.log(res.from.language.iso);
	// 		})
	// 		.catch((err: Error) => {
	// 			console.error(err);
	// 		});
	// };

	useEffect(() => {
		Debounce(translate(Query), 1000);
	}, [Query]);

	return (
		<div>
			<h2>Translate</h2>
			<input
				type="text"
				className="pad-thin"
				onChange={(e: {
					currentTarget: { value: React.SetStateAction<string | undefined> };
				}) => {
					setQuery(e.currentTarget.value);
				}}
			/>
		</div>
	);
}

export default Translate;
