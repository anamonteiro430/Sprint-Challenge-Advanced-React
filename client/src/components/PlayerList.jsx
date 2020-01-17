import React from 'react';
import Player from './Player';

const PlayerList = props => {
	return (
		<div>
			<h1>PlayerList</h1>
			{props.players.map(player => (
				<Player
					player={player.name}
					country={player.country}
					searches={player.searches}
				/>
			))}
		</div>
	);
};

export default PlayerList;
