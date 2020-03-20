import fn from '../lib';

describe('the simple test cases', () => {
	it('title', () => {
		expect(fn('unicorns')).toBe('unicorns & rainbows');
	});
});
