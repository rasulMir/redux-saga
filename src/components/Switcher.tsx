import React from 'react';
import { Typography } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { StyledBox } from './all.styles';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectState } from '../redux/store';
import { themeSwitcher } from '../redux/reducer';

interface Props {}

export default function Switcher({}: Props) {

	const { themeIsLight } = useAppSelector(selectState);
	const dispatch = useAppDispatch();

	return (
		<StyledBox onClick={() => dispatch(themeSwitcher())}>
			<Typography
				variant='body1'
			>
				{
					themeIsLight ? 'Светлый' : 'Темный'
				}
			</Typography>
			{
				themeIsLight ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />
			}
		</StyledBox>
	)
}