import style from './breed.module.css';
import { Box, FormControl, Button } from '@mui/material';
import { BreedList } from '../../components/BreedList';
import { BreedSelect } from '../../components/select/BreedSelect';

export const Breed = () => {
	return (
		<Box
			className={style.breed}
			sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<BreedSelect />
			<Box>
				<BreedList />
			</Box>
		</Box>
	);
};
