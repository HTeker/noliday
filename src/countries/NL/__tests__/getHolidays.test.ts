import * as moment from 'moment'
import noliday, { Country, Holiday } from '../../../index'

describe('NL - getHolidays()', () => {
	it('should return correct holidays for a given year', () => {
		const result = noliday.getHolidays({ year: 2022, country: Country.Netherlands })
		const expected = [
			{ holiday: Holiday.AscensionDay, date: moment.utc('2022-05-26').toDate()},
			{ holiday: Holiday.BoxingDay, date: moment.utc('2022-12-26').toDate()},
			{ holiday: Holiday.ChristmasDay, date: moment.utc('2022-12-25').toDate()},
			{ holiday: Holiday.EasterMonday, date: moment.utc('2022-04-18').toDate()},
			{ holiday: Holiday.EasterSunday, date: moment.utc('2022-04-17').toDate()},
			{ holiday: Holiday.GoodFriday, date: moment.utc('2022-04-15').toDate()},
			{ holiday: Holiday.NL_Kingsday, date: moment.utc('2022-04-27').toDate()},
			{ holiday: Holiday.NL_LiberationDay, date: moment.utc('2022-05-05').toDate()},
			{ holiday: Holiday.NewYearsDay, date: moment.utc('2022-01-01').toDate()},
			{ holiday: Holiday.WhitMonday, date: moment.utc('2022-06-06').toDate()},
			{ holiday: Holiday.WhitSunday, date: moment.utc('2022-06-05').toDate()},
		]

		expect(result).toMatchObject(expected)
	})
})