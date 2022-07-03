import * as moment from 'moment'
import getEasterSunday from '../../utils/getEasterSunday'

describe('NL - getEasterSunday()', () => {
	it('should calculcate Easter Sunday for the year 2012', () => {
		const result = getEasterSunday(2012)
		const expected = moment.utc('2012-04-08').toDate()
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2015', () => {
		const result = getEasterSunday(2015)
		const expected = moment.utc('2015-04-05').toDate()
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2019', () => {
		const result = getEasterSunday(2019)
		const expected = moment.utc('2019-04-21').toDate()
		expect(result).toMatchObject(expected)
    })
    
    it('should calculcate Easter Sunday for the year 2021', () => {
		const result = getEasterSunday(2021)
		const expected = moment.utc('2021-04-04').toDate()
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2022', () => {
		const result = getEasterSunday(2022)
		const expected = moment.utc('2022-04-17').toDate()
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2027', () => {
		const result = getEasterSunday(2027)
		const expected = moment.utc('2027-03-28').toDate()
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2030', () => {
		const result = getEasterSunday(2030)
		const expected = moment.utc('2030-04-21').toDate()
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2034', () => {
		const result = getEasterSunday(2034)
		const expected = moment.utc('2034-04-09').toDate()
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2037', () => {
		const result = getEasterSunday(2037)
		const expected = moment.utc('2037-04-05').toDate()
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2041', () => {
		const result = getEasterSunday(2041)
		const expected = moment.utc('2041-04-21').toDate()
		expect(result).toMatchObject(expected)
	})

	it('should calculcate Easter Sunday for the year 2079', () => {
		const result = getEasterSunday(2079)
		const expected = moment.utc('2079-04-23').toDate()
		expect(result).toMatchObject(expected)
	})
})