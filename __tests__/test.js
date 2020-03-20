import fn from '../dist/';

test('title', () => {
	expect(fn('unicorns')).toBe('unicorns & rainbows');
});
