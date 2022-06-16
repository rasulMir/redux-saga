import { AppBar, Box, InputBase, Button, Card, Chip, Menu } from '@mui/material';
import { styled } from '@mui/system';

export const StyledMenu = styled(Menu)(({ theme }) => ({
	'& ul': {
		color: theme.palette.text.primary,
		background: theme.palette.secondary.main,
	}
}));

export const StyledButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	flexDirection: 'row',
	padding: '24px',
}));

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: transparent;
`;

export const StyledCountriesTop = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
	}
}));

export const StyledCountries = styled('div')(({ theme }) => ({
	padding: '25px 0',
	background: theme.palette.secondary.main,
	flex: '1 0'
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  marginBottom: 15,
	background: theme.palette.primary.main,
  width: '100%',
	boxShadow: '0 1px 2px 1px grey',
	color: theme.palette.text.primary,
  [theme.breakpoints.up('sm')]: {
		marginBottom: 0,
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: `width .3s linear`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
	background: theme.palette.primary.main, 
	cursor: 'pointer',
}));

export const StyledBackButton = styled(Button)(({ theme }) => ({
	background: theme.palette.primary.main,
	color: theme.palette.text.primary,
	padding: '10px 30px',
	display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CountryWrapper = styled('div')(({ theme }) => ({
	
	[theme.breakpoints.down('md')]: {
		display: 'block',
		'& > img': {
			width: '100%',
		}
	},
	[theme.breakpoints.up('md')]: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& > img': {
			maxWidth: '45%',
		},
		'& > div': {
			paddingLeft: '30px',
			flexBasis: '55%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			flexWrap: 'wrap',

			'& > h6': {
				flex: '0 0 50%',
				paddingRight: '5px'
			}
		}
	},
}));

export const CountryBottomBorders = styled('div')`
	flex: 0 0 100%;
	padding: 10px 0;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

export const StyledChip = styled(Chip)(({ theme }) => ({
	background: theme.palette.primary.main,
	boxShadow: '1px 1px 10px 1px grey',
	borderRadius: 'none',
	cursor: 'pointer',

	'&:not(:first-of-type)': {
		margin: '5px 0 5px 5px',
	}
}));