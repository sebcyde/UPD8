import React from 'react';
import ClipLoader from 'react-spinners/BarLoader';

function LoadingPage() {
	return (
		<div className="w-100 h-100 flex just-center align-center">
			<ClipLoader
				color={'#39C7F4'}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
}

export default LoadingPage;
