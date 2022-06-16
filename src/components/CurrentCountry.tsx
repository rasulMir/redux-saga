import React, { useEffect } from 'react';
import { StyledCountries } from './all.styles';
import {Container } from '@mui/material';
import BackButton from './BackButton';
import Country from './Country';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { currentCodeAction } from '../redux/reducer';

interface Props {}

export default function CurrentCountry({}: Props) {
	
	const { country } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (country) dispatch(currentCodeAction(country));
		else return;
	}, [country]);
	
	return (
		<StyledCountries>
			<Container maxWidth='lg'>
				<BackButton />

				<Country />
			</Container>
		</StyledCountries>
	)
}