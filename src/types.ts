export interface IInitialState {
	continent: string,
	themeIsLight: boolean,
	countries: ICountriesCard[],
	current: ICountry | null,
	capitalCurrent: string | null
}

export enum ActionsTypes {
	CONTINENT = 'CONTINENT',
	COUNTRIES_EMPTY = 'COUNTRIES_EMPTY',
	SEARCH_VALUE = 'SEARCH_VALUE',
	THEME = 'THEME',
	COUNTRIES = 'COUNTRIES',
	CURRENT = 'CURRENT',
	CURRENT_CODE = 'CURRENT_CODE',
}

export interface ICURRENTCODE {
	type: ActionsTypes.CURRENT_CODE,
	payload: string
}

export interface ICONTINENT {
	type: ActionsTypes.CONTINENT,
	payload: string,
}

export interface ITHEME {
	type: ActionsTypes.THEME,
}
export interface ICOUNTRIESEMPTY {
	type: ActionsTypes.COUNTRIES_EMPTY,
}
export interface ICOUNTRIES {
	type: ActionsTypes.COUNTRIES,
	payload: ICountriesCard[],
}
export interface ICURRENT {
	type: ActionsTypes.CURRENT,
	payload: ICountry
}
export interface ISEARCHED {
	type: ActionsTypes.SEARCH_VALUE,
	payload: string
}

export type ICountries = ICURRENT | ICOUNTRIES | ITHEME | ICURRENTCODE | ISEARCHED | ICOUNTRIESEMPTY | ICONTINENT;


export interface ICountriesCard {
	flags: {
		png: string,
		svg: string,
	},
	name: string,
	population: number,
	region: string,
	capital: string,
	alpha2Code: string,
}

export interface ICountry {
	name: string,
	topLevelDomain: string[],
	alpha2Code: string,
	alpha3Code: string,
	callingCodes: string[],
	capital: string,
	altSpellings: string[],
	subregion: string,
	region: string,
	population: number,
	latlng: number[],
	demonym: string,
	area: number,
	gini: number,
	timezones: string[],
	borders: string[],
	nativeName: string,
	numericCode: string,
	flags: {
		svg: string, png: string
	},
	currencies: [
		{
			code: string,
			name: string,
			symbol: string
		}
	],
	languages: [
		{
			iso639_1: string,
			iso639_2: string,
			name: string,
			nativeName: string
		}
	],
	translations: {
		br: string,
		pt: string,
		nl: string,
		hr: string,
		fa: string,
		de: string,
		es: string,
		fr: string,
		ja: string,
		it: string,
		hu: string
	},
	flag: string,
	regionalBlocs: [
		{
			acronym: string,
			name: string,
			otherNames: string[]
		},
		{
			acronym: string,
			name: string,
			otherAcronyms: string[],
			otherNames: string[],
		}
	],
	cioc: string,
	independent: boolean
}