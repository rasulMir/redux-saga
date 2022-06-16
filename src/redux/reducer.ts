import { ActionsTypes, ITHEME, ICONTINENT, ICOUNTRIESEMPTY, ICURRENTCODE, ISEARCHED, IInitialState, ICountries } from "../types";

const initialState = {
	continent: '',
	themeIsLight: true,
	countries: [],
	current: null,
	capitalCurrent: null,
} as IInitialState;

export const continentAction = (continent: string): ICONTINENT => ({ type: ActionsTypes.CONTINENT, payload: continent });

export const searchAction = (value: string): ISEARCHED => ({ type: ActionsTypes.SEARCH_VALUE, payload: value });

export const themeSwitcher = (): ITHEME => ({ type: ActionsTypes.THEME });

export const currentCodeAction = (code: string): ICURRENTCODE => ({ type: ActionsTypes.CURRENT_CODE, payload: code });

export const countriesEmptyAction = (): ICOUNTRIESEMPTY => ({ type: ActionsTypes.COUNTRIES_EMPTY });

function countryReducer(state = initialState, action: ICountries): IInitialState {
	switch (action.type) {
		case ActionsTypes.COUNTRIES:
			{
				return { ...state, countries: action.payload }
				break;
			}

		case ActionsTypes.CONTINENT:
			{
				const filtered = state.countries.filter(i => i.region === action.payload);
				const all = [ ...state.countries, ...filtered ];
				return { ...state, countries: all.reverse() }
			}

		case ActionsTypes.COUNTRIES_EMPTY:
			{
				return { ...state }
				break;
			}

		case ActionsTypes.SEARCH_VALUE:
			{
				const searched = state.countries.filter(i => i.name.trim().toLowerCase().includes(action.payload));
				return { ...state, countries: searched }
				break;
			}

		case ActionsTypes.THEME:
			{
				return { ...state, themeIsLight: !state.themeIsLight }
				break;
			}

		case ActionsTypes.CURRENT:
			{
				return { ...state, current: action.payload }
				break;
			}
		case ActionsTypes.CURRENT_CODE:
			{
				return { ...state, capitalCurrent: action.payload }
				break;
			}
		default:
			return state;
			break;
	}
}

export default countryReducer;