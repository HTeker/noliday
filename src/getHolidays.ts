import Country from "./enums/country.enum"
import Holiday from "./enums/holiday.enum"

const getHolidays = (options: { year: number, country: Country }): Partial<{ [key in Holiday]: Date }> => {

	const { year, country } = options 

	if (year < 0) throw new RangeError('Invalid year has been passed')

	const countryFunction = require(`./countries/${country}/getHolidays`).default

	return countryFunction(options)
}

export default getHolidays