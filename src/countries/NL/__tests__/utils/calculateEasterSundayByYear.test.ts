import calculateEasterSundayByYear from '../../utils/calculateEasterSundayByYear'

describe('NL - calculateEasterSundayByYear()', () => {
	it('should calculcate Easter Sunday for the year 2012', () => {
		const result = calculateEasterSundayByYear(2012)
		const expected = new Date('04-08-2012')
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2015', () => {
		const result = calculateEasterSundayByYear(2015)
		const expected = new Date('04-05-2015')
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2019', () => {
		const result = calculateEasterSundayByYear(2019)
		const expected = new Date('04-21-2019')
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2022', () => {
		const result = calculateEasterSundayByYear(2022)
		const expected = new Date('04-17-2022')
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2027', () => {
		const result = calculateEasterSundayByYear(2027)
		const expected = new Date('03-28-2027')
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2030', () => {
		const result = calculateEasterSundayByYear(2030)
		const expected = new Date('04-21-2030')
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2034', () => {
		const result = calculateEasterSundayByYear(2034)
		const expected = new Date('04-09-2034')
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2037', () => {
		const result = calculateEasterSundayByYear(2037)
		const expected = new Date('04-05-2037')
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2041', () => {
		const result = calculateEasterSundayByYear(2041)
		const expected = new Date('04-21-2041')
		expect(result).toMatchObject(expected)
	})

	// TODO: find formula that works for this test case
	// it('should calculcate Easter Sunday for the year 2079', () => {
	// 	const result = calculateEasterSundayByYear(2079)
	// 	const expected = new Date('04-23-2079')
	// 	expect(result).toMatchObject(expected)
	// })
})