import noliday, { Country } from '../index'
import NDate from '../types/n-day'

describe('isHoliday()', () => {
	it('should return false if the day is not a holiday for the country', () => {
		const date: NDate = { day: 5, month: 1, year: 2022 }
		const result = noliday.isHoliday({ date, country: Country.Netherlands })

		expect(result).toBe(false)
	})
	it('should return true if day is a holiday for the country', () => {
		const date: NDate = { day: 27, month: 4, year: 2022 }
		const result = noliday.isHoliday({ date, country: Country.Netherlands })

		expect(result).toBe(true)
	})
})