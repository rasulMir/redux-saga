import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { StyledCard } from './all.styles';
import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { ICountriesCard } from '../types';
import { currentCodeAction } from '../redux/reducer';
import { useNavigate } from 'react-router-dom';
import CustomTypography from './CustomTypography';

export default function CountriesCard({ flags, name, population, region, capital, alpha2Code }: ICountriesCard) {

	const dispatch = useAppDispatch();
	const navigator = useNavigate();

	const handleClickCountry = () => {
		dispatch(currentCodeAction(alpha2Code));
		navigator(`${ alpha2Code }`);
	}

	return (
		<Grid item xs={11} sm={6} md={4} lg={3} sx={{ p: '10px' }}>
			<StyledCard onClick={ handleClickCountry }>
				<CardMedia
					component="img"
					height="140"
					image={flags.svg}
					alt={name}
				/>
				<CardContent>
					<Typography variant='h5' sx={{ mb: 5 }}>
						{ name }
					</Typography>
					<CustomTypography 
						title='Население'
						subTitle={ population.toString() }
					/>
					<CustomTypography 
						title='Регион'
						subTitle={ region }
					/>
					<CustomTypography 
						title='Столица'
						subTitle={ capital }
					/>

				</CardContent>
			</StyledCard>
		</Grid>
	)
}