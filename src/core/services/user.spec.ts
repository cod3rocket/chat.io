import { describe, it, expect } from 'vitest';

import { setUsername, usernameWritable } from './user';

describe('username', () => {
	it('should user have a name', () => {
		// eslint-disable-next-line prefer-const
		let username = 'username';

		setUsername(username);

		expect(username).toBe('username');
	});

	it('should user have a hash identifier in name', () => {
		let username = 'username';
		const usernameRegex = new RegExp(`${username}#([0-9]{4})`);

		setUsername(username);

		usernameWritable.subscribe((value) => {
			username = value;
		});

		expect(username).toMatch(usernameRegex);
	});
});
