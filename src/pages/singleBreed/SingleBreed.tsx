import { Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DogList } from '../../components/DogList';
import { getImageByBreed } from '../../services/dogApi';

export const SingleBreed = () => {
	const [breed, setBreed] = useState<string[] | null>(null);
	const { name } = useParams();

	useEffect(() => {
		if (name) {
			getImageByBreed(name).then((res: any) => {
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
				<DogList
					breedList={breed}
					name={name || ''}
				/>
			)}
		</Box>
	);
};
