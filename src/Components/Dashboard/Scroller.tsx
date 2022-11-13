import React from 'react';

type Props = { Updates: number };

function Scroller({ Updates }: Props) {
	return (
		<h1
			id="scroll-text"
			style={{
				fontSize: '18px',
				height: 'fit-content',
				whiteSpace: 'nowrap',
				width: '180vw',
				margin: '0px',
			}}
		>
			Welcome Back Sebastian. You have {Updates} new updates.
			{Updates > 0 ? ' See below for details.' : ''}
		</h1>
	);
}

export default Scroller;
