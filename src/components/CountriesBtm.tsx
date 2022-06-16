import React, { useEffect, useState } from 'react';
import { Grid, LinearProgress } from '@mui/material';
import CountriesCard from './CountriesCard';
import { useAppSelector } from '../redux/hooks';
import { selectState } from '../redux/store';

interface Props {}

export default function CountriesBtm({}: Props) {

	const { countries } = useAppSelector(selectState);

	return (
		<Grid container justifyContent='center' alignItems='flex-start'>
			{
				countries.map((i, id) => (
					<CountriesCard  key={id} 
						flags={i.flags}
						name={i.name}
						population={i.population}
						region={i.region}
						capital={i.capital}
						alpha2Code={i.alpha2Code}
					/>
				))
			}
		</Grid>
	)
}