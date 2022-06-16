import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryWrapper, CountryBottomBorders, StyledChip } from './all.styles';
import CustomTypography from './CustomTypography';
import { useAppSelector } from '../redux/hooks';
import { selectState } from '../redux/store';



export default function Country() {

	const navigator = useNavigate();
	const { current } = useAppSelector(selectState);
	
	const handleClickCountry = (code: string) => {
		navigator(`/${ code }`);
	}

	return (
		<>
			{
				current &&
					(<CountryWrapper>
						<img src={current.flags.svg} alt={current.name} />

						<div>
							<Typography component='div' variant='h4' sx={{ mb: 2, flex: '0 0 100%' }}>
								{ current.name }
							</Typography>
							<CustomTypography title='Название' subTitle={current.nativeName} />
							<CustomTypography title='Домен верхнего уровня'  subTitle={current.topLevelDomain.join(' ')} />
							<CustomTypography title='Население' subTitle={ current.population.toString() } />
							<CustomTypography title='Валюты' subTitle={current.currencies[0].name} />
							<CustomTypography title='Регион' subTitle={current.region} />
							<CustomTypography title='Языки' subTitle={current.languages[0].name} />
							<CustomTypography title='Субрегион' subTitle={current.subregion} />
							<CustomTypography title='Столица' subTitle={current.capital} />

							<Typography variant='h6' sx={{ flex: '0 0 100%' }}>
								Приграничные страны: 
							</Typography>
							<CountryBottomBorders>
								{ 
									current?.borders ? current.borders.map(i => (
										<StyledChip label={i} key={i} onClick={() => handleClickCountry(i)} />
									)) : <>none</>
								}
							</CountryBottomBorders>
						</div>
					</CountryWrapper>)
			}
		</>
	)
}