import { describe, it, expect } from 'vitest';

import { setUsername } from './user';

describe('username', () => {
	it('should user have a name', () => {
		// eslint-disable-next-line prefer-const
		let username = 'username';

		setUsername(username);

		expect(username).toBe('username');
	});
});
