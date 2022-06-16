import React, { useMemo } from 'react';
import Switcher from './Switcher';
import { useAppSelector } from '../redux/hooks';
import { selectState } from '../redux/store';
import { StyledAppBar } from './all.styles';
import { Outlet } from 'react-router-dom';
import { createTheme, Paper, ThemeProvider, Palette } from '@mui/material';

interface Props {};

export default function Main({}: Props) {

	const { themeIsLight } = useAppSelector(selectState);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
					mode: 'light',
					...(themeIsLight
						? {
								primary: {
									main: '#fff',
								},
								secondary: {
									main: '#FBFAFB'
								},
								text: {
									primary: '#000',
								}
							}
						: {
								primary: {
									main: '#1F2A36',
								},
								secondary: {
									main: '#293843'
								},
								text: {
									primary: '#fff',
								}
							}),
				},
      }),
    [themeIsLight],
  );

	return (
		<ThemeProvider theme={theme}>
			<Paper sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<StyledAppBar position='static' elevation={4} >
					<Switcher />
				</StyledAppBar>
				<Outlet />
			</Paper>
		</ThemeProvider>
	)
}