import { Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SingleBreedList } from '../../components/SingleBreedList';
import { getImageByBreed } from '../../services/dogApi';

export const SingleBreed = () => {
	const [breed, setBreed] = useState<string[] | null>(null);
	const { name } = useParams();

	useEffect(() => {
		if (name) {
			getImageByBreed(name).then((res) => {
				setBreed(res);
			});
		}
	}, [name]);

	return (
		<Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Typography
				variant="h2"
				sx={{ color: 'white', textTransform: 'capitalize', pb: 1 }}>
				{name}
			</Typography>
			<Link
				to="/breeds"
				style={{ color: 'white', fontSize: '25px', fontFamily: 'Segoe UI', marginBottom: '5px' }}>
				Back to breeds
			</Link>
			{breed && (
				<SingleBreedList
					breedList={breed}
					name={name || ''}
				/>
			)}
		</Box>
	);
};
