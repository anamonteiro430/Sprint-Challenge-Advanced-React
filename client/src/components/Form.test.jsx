import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

it('searches for players', () => {
	const { getByTestId } = render(<Form />);
	let item = 'Alex Morgan';
	const playerInputElement = getByTestId('player-input');
	playerInputElement.value = item;
	fireEvent.change(playerInputElement);
	expect(playerInputElement.value).toBe('Alex Morgan');
});
