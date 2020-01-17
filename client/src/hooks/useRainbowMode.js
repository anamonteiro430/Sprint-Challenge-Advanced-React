import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useRainbowMode = (key, initialValue) => {
	const [value, setValue] = useLocalStorage('false');

	useEffect(() => {
		if (value === true) {
			document.querySelector('body').classList.add('rainbow-mode');
		} else {
			document.querySelector('body').classList.remove('rainbow-mode');
		}
	}, [value]);

	return [value, setValue];
};
