import moment = require("moment")
import Country from "../../enums/country.enum"
import Holiday from "../../enums/holiday.enum"
import getEasterSunday from "./utils/getEasterSunday"

const getHolidays = (options: { year: number, country: Country }): { holiday: Holiday, date: Date }[] => {
	const { year } = options

	const easterSunday = getEasterSunday(year)
	const whitSunday = moment(easterSunday).add(7, 'week').toDate()

	return [
		{ holiday: Holiday.AscensionDay, date: moment(easterSunday).add(39, 'day').toDate()},
		{ holiday: Holiday.BoxingDay, date: moment.utc(`${year}-12-26`).toDate()},
		{ holiday: Holiday.ChristmasDay, date: moment.utc(`${year}-12-25`).toDate()},
		{ holiday: Holiday.EasterMonday, date: moment(easterSunday).add(1, 'day').toDate()},
		{ holiday: Holiday.EasterSunday, date: easterSunday},
		{ holiday: Holiday.GoodFriday, date: moment(easterSunday).subtract(2, 'day').toDate()},
		{ holiday: Holiday.NL_Kingsday, date: moment.utc(`${year}-04-27`).toDate()},
		{ holiday: Holiday.NL_LiberationDay, date: moment.utc(`${year}-05-05`).toDate()},
		{ holiday: Holiday.NewYearsDay, date: moment.utc(`${year}-01-01`).toDate()},
		{ holiday: Holiday.WhitMonday, date: moment(whitSunday).add(1, 'day').toDate()},
		{ holiday: Holiday.WhitSunday, date: whitSunday},
	]
}

export default getHolidays