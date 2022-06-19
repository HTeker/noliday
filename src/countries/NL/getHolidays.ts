import moment = require("moment")
import Country from "../../enums/country.enum"
import Holiday from "../../enums/holiday.enum"
import getEasterSunday from "./utils/getEasterSunday"

const getHolidays = (options: { year: number, country: Country }): Partial<{ [key in Holiday]: Date }> => {
	const { year } = options

	const easterSunday = getEasterSunday(year)
	const whitSunday = moment(easterSunday).add(7, 'week').toDate()

	return {
		[Holiday.AscensionDay]: moment(easterSunday).add(39, 'day').toDate(),
		[Holiday.BoxingDay]: new Date(`12-26-${year}`),
		[Holiday.ChristmasDay]: new Date(`12-25-${year}`),
		[Holiday.EasterMonday]: moment(easterSunday).add(1, 'day').toDate(),
		[Holiday.EasterSunday]: easterSunday,
		[Holiday.GoodFriday]: moment(easterSunday).subtract(2, 'day').toDate(),
		[Holiday.NL_Kingsday]: new Date(`04-27-${year}`),
		[Holiday.NL_LiberationDay]: new Date(`05-05-${year}`),
		[Holiday.NewYearsDay]: new Date(`01-01-${year}`),
		[Holiday.WhitMonday]: moment(whitSunday).add(1, 'day').toDate(),
		[Holiday.WhitSunday]: whitSunday,
	}
}

export default getHolidays