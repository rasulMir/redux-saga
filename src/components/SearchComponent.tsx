import React, { useState } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './all.styles';
import SearchIcon from '@mui/icons-material/Search';
import { searchAction, countriesEmptyAction } from '../redux/reducer';
import { useAppDispatch } from '../redux/hooks';

interface Props {}

export default function SearchComponent({}: Props) {

	const [searchTxt, setSearchTxt] = useState<string>('');
	const dispatch = useAppDispatch();

	const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		
		const value: string = e.target.value.trim().toLowerCase();

		setSearchTxt(value);

		if (!value) {
			dispatch(countriesEmptyAction());
			return;
		}

		dispatch(searchAction(searchTxt));
	}

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				value={searchTxt}
				onChange={onChangeHandler}
				color='primary'
				placeholder="Search…"
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	)
}