import * as moment from 'moment'

const intermediateDates: {[key: number]: string} = {
	[0]: '03-27',
	[1]: '04-14',
	[2]: '04-03',
	[3]: '03-23',
	[4]: '04-11',
	[5]: '03-31',
	[6]: '04-18',
	[7]: '04-08',
	[8]: '03-28',
	[9]: '04-16',
	[10]: '04-05',
	[11]: '05-25',
	[12]: '04-13',
	[13]: '04-02',
	[14]: '03-22',
	[15]: '04-10',
	[16]: '03-30',
	[17]: '04-17',
	[18]: '04-07',
	[19]: '03-27',
}

const getEasterSunday = (year: number): Date => {
	const index = (year - Math.floor(year / 19) * 19) + 1
	const date = intermediateDates[index]
	const intermediateDate = moment(`${date}-${year}`, 'MM-DD-YYYY')

	const targetWeekday = 7 // Sunday
	const currentWeekday = intermediateDate.isoWeekday()

	if (currentWeekday <= targetWeekday) intermediateDate.isoWeekday(targetWeekday)

	return intermediateDate.toDate()
}

export default getEasterSunday