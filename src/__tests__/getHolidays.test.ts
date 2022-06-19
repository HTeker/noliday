import noliday, { Country } from '../index'

describe('getHolidays()', () => {

	it('should throw an exception when a negative year is passed', () => {
		const t = () => {
			noliday.getHolidays({ year: -1234, country: Country.Netherlands })
		}
		expect(t).toThrow(RangeError)
	})

	it('should throw an exception if holidays for country cannot be determined', () => {
		const t = () => {
			noliday.getHolidays({ year: 2022, country: Country.Kazakhstan })
		}
		expect(t).toThrowError()
	})
	
})