import React from 'react';
import { Box } from '@mui/material';
import { StyledBackButton } from './all.styles';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate } from 'react-router-dom';

interface Props {}

export default function BackButton({}: Props) {

	const navigator = useNavigate();
	return (
		<Box sx={{ mb: '25px'}}>
			<StyledBackButton onClick={() => navigator(-1)}>
				<KeyboardBackspaceOutlinedIcon color='inherit' sx={{ pr: '5px' }} />
				Back
			</StyledBackButton>
		</Box>
	)
}