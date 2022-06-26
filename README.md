[![npm version](https://badge.fury.io/js/noliday.svg)](https://badge.fury.io/js/noliday)

# noliday

> A library for calculating the dates of national holidays

## Table of contents

- [noliday](#noliday)
	- [Table of contents](#table-of-contents)
	- [Installation](#installation)
	- [Usage](#usage)
	- [API](#api)
		- [getHolidays](#getholidays)
		- [isHoliday](#isholiday)
	- [Types and enums](#types-and-enums)

## Installation

```sh
$ npm install noliday
```

## Usage

```ts
import noliday, { Country } from 'noliday'

const holidays = noliday.getHolidays({ year: 2022, country: Country.Netherlands})

console.log(holidays)
```

```sh
{
  'Ascension Day': 2022-05-26T00:00:00.000Z,
  'Boxing Day': 2022-12-26T00:00:00.000Z,
  'Christmas Day': 2022-12-25T00:00:00.000Z,
  'Easter Monday': 2022-04-18T00:00:00.000Z,
  'Easter Sunday': 2022-04-17T00:00:00.000Z,
  'Good Friday': 2022-04-15T00:00:00.000Z,
  'Kingsday (NL)': 2022-04-27T00:00:00.000Z,
  'Liberation Day (NL)': 2022-05-05T00:00:00.000Z,
  "New Year's Day": 2022-01-01T00:00:00.000Z,
  'Whit Monday': 2022-06-06T00:00:00.000Z,
  'Whit Sunday': 2022-06-05T00:00:00.000Z
}
```

## API

### getHolidays

```ts
getHolidays(options: { year: number, country: Country }): { holiday: Holiday, date: Date }[]
```

### isHoliday

```ts
isHolday(options: { date: NDate, country: Country }): boolean
```

## Types and enums
- [Country](https://github.com/HTeker/noliday/blob/master/src/enums/country.enum.ts)
- [Holiday](https://github.com/HTeker/noliday/blob/master/src/enums/holiday.enum.ts)
- [NDate](https://github.com/HTeker/noliday/blob/master/src/types/n-day.ts)