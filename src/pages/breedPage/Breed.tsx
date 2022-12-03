import { Box, FormControl, Button } from '@mui/material';
import { BreedList } from '../../components/BreedList';

export const Breed = () => {
	return (
		<Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
				<input
					style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
					type="text"
					placeholder="Search breed..."
				/>
				<Button variant="contained">Search</Button>
			</FormControl>
			<Box sx={{ p: 3 }}>
				<BreedList />
			</Box>
		</Box>
	);
};
