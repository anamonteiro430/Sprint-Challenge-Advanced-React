import React from 'react';
import { useRainbowMode } from './../hooks/useRainbowMode';
import './../styles/styles.css';

const Navbar = () => {
	const [rainbowMode, setRainbowMode] = useRainbowMode(false);

	const toggle = e => {
		e.preventDefault();
		setRainbowMode(!rainbowMode);
	};

	return (
		<nav>
			<div>
				<h1>Women Soccer Players</h1>
			</div>

			<div className='r'>
				<div className='rainbow-toggle'>
					<div
						onClick={toggle}
						className={rainbowMode ? 'toggle toggled' : 'toggle'}
					></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
