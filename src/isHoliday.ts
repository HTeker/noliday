import Country from "./enums/country.enum";
import noliday from "./index";
import * as moment from 'moment'
import NDate from "./types/n-day";

const isHoliday = (options: { date: NDate, country: Country }): boolean => {
	const { date } = options

	const currentDate = moment.utc({ ...date, month: --date.month})
	const holidays = noliday.getHolidays({ year: date.year, ...options })

	for (const holiday of Object.values(holidays)) {
		if (currentDate.isSame(holiday, 'day')) return true
	}

	return false
}

export default isHoliday