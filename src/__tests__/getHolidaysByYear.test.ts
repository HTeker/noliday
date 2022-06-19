import noliday, { Country } from '../index'

describe('getHolidaysByYear()', () => {

	it('should throw an exception when a negative year is passed', () => {
		const t = () => {
			noliday.getHolidaysByYear(-1234, { country: Country.Netherlands })
		}
		expect(t).toThrow(RangeError)
	})

	it('should throw an exception if holidays for country cannot be determined', () => {
		const t = () => {
			noliday.getHolidaysByYear(2022, { country: Country.Kazakhstan })
		}
		expect(t).toThrowError()
	})
	
})