import * as moment from 'moment'
import noliday, { Country, Holiday } from '../../../index'

describe('NL - getHolidays()', () => {
	it('should return correct holidays for a given year', () => {
		const result = noliday.getHolidays({ year: 2022, country: Country.Netherlands })
		const expected = {
			[Holiday.AscensionDay]: moment.utc('2022-05-26').toDate(),
			[Holiday.BoxingDay]: moment.utc('2022-12-26').toDate(),
			[Holiday.ChristmasDay]: moment.utc('2022-12-25').toDate(),
			[Holiday.EasterMonday]: moment.utc('2022-04-18').toDate(),
			[Holiday.EasterSunday]: moment.utc('2022-04-17').toDate(),
			[Holiday.GoodFriday]: moment.utc('2022-04-15').toDate(),
			[Holiday.NL_Kingsday]: moment.utc('2022-04-27').toDate(),
			[Holiday.NL_LiberationDay]: moment.utc('2022-05-05').toDate(),
			[Holiday.NewYearsDay]: moment.utc('2022-01-01').toDate(),
			[Holiday.WhitMonday]: moment.utc('2022-06-06').toDate(),
			[Holiday.WhitSunday]: moment.utc('2022-06-05').toDate(),
		}

		expect(result).toMatchObject(expected)
	})
})