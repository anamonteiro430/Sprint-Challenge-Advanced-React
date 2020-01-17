import React from 'react';

const Player = props => {
	return (
		<div>
			<h4>
				{props.player} from {props.country} had {props.searches} searches last
				year
			</h4>
			<h2></h2>
		</div>
	);
};

export default Player;
