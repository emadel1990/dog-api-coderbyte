import { Box, FormControl, Button } from '@mui/material';
import { BreedList } from '../../components/BreedList';
import { BreedSelect } from '../../components/select/BreedSelect';

export const Breed = () => {
	return (
		<Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<BreedSelect />
			<Box sx={{ p: 3 }}>
				<BreedList />
			</Box>
		</Box>
	);
};
