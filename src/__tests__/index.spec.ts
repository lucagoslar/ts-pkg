import { moin } from '@src/index';

it('should log "moin" to console', () => {
	const consoleSpy = jest.spyOn(console, 'log');
	moin();

	expect(consoleSpy).toHaveBeenCalledWith('moin');
});
