import React, { useState } from 'react';

import { MenuItem, Fade } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledButton, StyledMenu } from './all.styles';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { continentAction, countriesEmptyAction } from '../redux/reducer';

interface Props {}

export default function Filter({}: Props) {

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const dispatch = useAppDispatch();
  const open = Boolean(anchorEl);

	const handleWorldClick = () => {
		dispatch(countriesEmptyAction());
		handleClose();
	}

  const handleClick = (continent: string) => {

		dispatch(continentAction(continent));
		handleClose();

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

	return (
		<>
      <StyledButton
				variant='contained'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event: React.MouseEvent<HTMLElement>) =>  setAnchorEl(event.currentTarget)}
      >
        <span style={{ padding: '5px 0 0 0' }}>Фильтр</span>
				<KeyboardArrowDownIcon />
      </StyledButton>
      <StyledMenu
				color='inherit'
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleWorldClick}>World</MenuItem>
        <MenuItem onClick={() => handleClick('Africa')}>Africa</MenuItem>
        <MenuItem onClick={() => handleClick('Americas')}>America</MenuItem>
        <MenuItem onClick={() => handleClick('Asia')}>Asia</MenuItem>
        <MenuItem onClick={() => handleClick('Europe')}>Europe</MenuItem>
        <MenuItem onClick={() => handleClick('Oceania')}>Oceania</MenuItem>
        <MenuItem onClick={() => handleClick('Polar')}>Polar</MenuItem>
      </StyledMenu>
    </>
	)
}