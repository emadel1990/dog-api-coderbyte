import { Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SingleBreedList } from '../../components/SingleBreedList';
import { IBreedsList } from '../../interfaces/IBreeds';
import { getAllImagesByBreed } from '../../services/dogApi';

export const SingleBreed = () => {
	const [breed, setBreed] = useState<string[] | null>(null);
	const { name } = useParams();

	useEffect(() => {
		if (name) {
			getAllImagesByBreed(name).then((res) => {
				console.log(res);
				setBreed(res.message);
			});
		}
	}, [name]);

	return (
		<Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Typography
				variant="h2"
				sx={{ color: 'white', textTransform: 'capitalize', pb: 2 }}>
				{name}
			</Typography>
			<SingleBreedList breedList={breed} />
		</Box>
	);
};
