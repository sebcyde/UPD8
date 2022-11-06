import React from 'react';
import { LoadingContainer } from '../Styles/AllComponents';
import ClipLoader from 'react-spinners/ScaleLoader';

function LoadingPage() {
	return (
		<LoadingContainer>
			<ClipLoader
				color={'#39C7F4'}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</LoadingContainer>
	);
}

export default LoadingPage;
