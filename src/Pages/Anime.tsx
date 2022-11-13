import React, { useEffect } from 'react';
import { Kitsu } from '../API/Kitsu';

type Props = {};

function Anime({}: Props) {
	useEffect(() => {
		Kitsu();
	}, []);

	return <div>Anime</div>;
}

export default Anime;
