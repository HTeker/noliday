import Country from "./enums/country.enum"
import Holiday from "./enums/holiday.enum"

const getHolidaysByYear = (year: number, options: { country: Country } = { country: Country.Netherlands }): Partial<{ [key in Holiday]: Date }> => {

	const { country } = options

	if (year < 0) throw new RangeError('Invalid year has been passed')

	const countryFunction = require(`./countries/${country}/getHolidaysByYear`).default

	return countryFunction(year, options)
}

export default getHolidaysByYear