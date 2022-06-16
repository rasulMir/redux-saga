import React from 'react';
import { StyledCountriesTop } from './all.styles';
import Filter from './Filter';
import SearchComponent from './SearchComponent';
interface Props {}


export default function CountriesTop({}: Props) {
	return (
		<StyledCountriesTop>
			<SearchComponent />
			<Filter />
		</StyledCountriesTop>
	)
}