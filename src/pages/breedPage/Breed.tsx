import { useEffect, useState } from 'react';
import { Box, FormControl, Button } from '@mui/material';
import { BreedList } from '../../components/BreedList';
import { getAllBreeds, getSubBreeds } from '../../services/dogApi';
import { IBreedsList } from '../../interfaces/IBreeds';

export const Breed = () => {
	const [breeds, setBreeds] = useState<IBreedsList | null>(null);

	useEffect(() => {
		getAllBreeds().then((res) => {
			const breedList: IBreedsList = res.message;
			setBreeds(breedList);
		});
	}, []);

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
				<BreedList breedList={breeds} />
			</Box>
		</Box>
	);
};
