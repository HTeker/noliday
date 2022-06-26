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
		[Holiday.BoxingDay]: moment.utc(`${year}-12-26`).toDate(),
		[Holiday.ChristmasDay]: moment.utc(`${year}-12-25`).toDate(),
		[Holiday.EasterMonday]: moment(easterSunday).add(1, 'day').toDate(),
		[Holiday.EasterSunday]: easterSunday,
		[Holiday.GoodFriday]: moment(easterSunday).subtract(2, 'day').toDate(),
		[Holiday.NL_Kingsday]: moment.utc(`${year}-04-27`).toDate(),
		[Holiday.NL_LiberationDay]: moment.utc(`${year}-05-05`).toDate(),
		[Holiday.NewYearsDay]: moment.utc(`${year}-01-01`).toDate(),
		[Holiday.WhitMonday]: moment(whitSunday).add(1, 'day').toDate(),
		[Holiday.WhitSunday]: whitSunday,
	}
}

export default getHolidays