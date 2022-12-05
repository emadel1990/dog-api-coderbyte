import { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DogList } from '../../components/DogList';
import { getImageByBreed } from 'services/dogApi';

export const SingleBreed = () => {
	const navigate = useNavigate();
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
			<Box sx={{ display: 'flex', justifyContent: 'space-between', width: ' 350px' }}>
				<Button
					variant="contained"
					color="success"
					onClick={() => navigate('/breeds')}>
					Back to breeds
				</Button>
				<Button
					variant="contained"
					onClick={() => navigate('/myTeam')}>
					Go to My Team
				</Button>
			</Box>
			{breed && (
				<DogList
					breedList={breed}
					name={name || ''}
				/>
			)}
		</Box>
	);
};
