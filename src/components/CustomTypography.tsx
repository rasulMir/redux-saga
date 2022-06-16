import React from 'react';
import { Typography } from '@mui/material';

interface Props {
	title: string;
	subTitle: string | undefined;
}

export default function CustomTypography({
	title,
	subTitle
}: Props) {
	return (
		<Typography variant='h6'>
			{ title }:  
			<Typography variant='body1' component='span' sx={{ pl: 2 }}>
				{ subTitle }
			</Typography>
		</Typography>
	)
}