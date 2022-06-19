import noliday, { Country, Holiday } from '../../../index'

describe('NL - getHolidaysByYear()', () => {
	it('should return correct holidays for a given year', () => {
		const result = noliday.getHolidaysByYear(2022, { country: Country.Netherlands })
		const expected = {
			[Holiday.AscensionDay]: new Date('05-26-2022'),
			[Holiday.BoxingDay]: new Date('12-26-2022'),
			[Holiday.ChristmasDay]: new Date('12-25-2022'),
			[Holiday.EasterMonday]: new Date('04-18-2022'),
			[Holiday.EasterSunday]: new Date('04-17-2022'),
			[Holiday.GoodFriday]: new Date('04-15-2022'),
			[Holiday.NL_Kingsday]: new Date('04-27-2022'),
			[Holiday.NL_LiberationDay]: new Date('05-05-2022'),
			[Holiday.NewYearsDay]: new Date('01-01-2022'),
			[Holiday.WhitMonday]: new Date('06-06-2022'),
			[Holiday.WhitSunday]: new Date('06-05-2022'),
		}

		expect(result).toMatchObject(expected)
	})
})