import { Container, Stack } from '@mui/material';
import React from 'react';
import { StyledCountries } from './all.styles';
import CountriesBtm from './CountriesBtm';
import CountriesTop from './CountriesTop';

interface Props {}

export default function Countries({}: Props) {
	return (
		<StyledCountries>
			<Container maxWidth='lg'>
				<Stack spacing={2}>
					<CountriesTop />
					<CountriesBtm />
				</Stack>
			</Container>
		</StyledCountries>
	)
}