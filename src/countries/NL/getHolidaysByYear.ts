import moment = require("moment")
import Country from "../../enums/country.enum"
import Holiday from "../../enums/holiday.enum"
import calculateEasterSundayByYear from "./utils/calculateEasterSundayByYear"

const getHolidaysByYear = (year: number, options: { country: Country } = { country: Country.Netherlands }): Partial<{ [key in Holiday]: Date }> => {
	const easterSundayDate = calculateEasterSundayByYear(year)
	const whitSundayDate = moment(easterSundayDate).add(7, 'week').toDate()

	return {
		[Holiday.AscensionDay]: moment(easterSundayDate).add(39, 'day').toDate(),
		[Holiday.BoxingDay]: new Date(`12-26-${year}`),
		[Holiday.ChristmasDay]: new Date(`12-25-${year}`),
		[Holiday.EasterMonday]: moment(easterSundayDate).add(1, 'day').toDate(),
		[Holiday.EasterSunday]: easterSundayDate,
		[Holiday.GoodFriday]: moment(easterSundayDate).subtract(2, 'day').toDate(),
		[Holiday.NL_Kingsday]: new Date(`04-27-${year}`),
		[Holiday.NL_LiberationDay]: new Date(`05-05-${year}`),
		[Holiday.NewYearsDay]: new Date(`01-01-${year}`),
		[Holiday.WhitMonday]: moment(whitSundayDate).add(1, 'day').toDate(),
		[Holiday.WhitSunday]: whitSundayDate,
	}
}

export default getHolidaysByYear