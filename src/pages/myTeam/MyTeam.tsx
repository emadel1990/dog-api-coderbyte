import { useState, useEffect } from 'react';
import style from 'pages/breedPage/breed.module.css';
import { Grid, Box, Typography, Button } from '@mui/material';
import { DogCard } from 'components/DogCard';
import { useBreeds } from 'hooks/useBreeds';
import { useNavigate } from 'react-router-dom';

export const MyTeam = () => {
	const navigate = useNavigate();
	const breedsContext = useBreeds();
	const [dogList, setDogList] = useState<any[]>([]);
	const [breedList, setBreedList] = useState<any[]>([]);

	useEffect(() => {
		listBreeds();
	}, [breedsContext.myTeam]);

	const listBreeds = () => {
		const list: any[] = [];
		const breeds: any[] = [];
		breedsContext.myTeam.map((item, index) => {
			breeds.push(`${item.breed.charAt(0).toUpperCase()}${item.breed.slice(1)}`);
			item.team.map((img, index) => {
				list.push({ name: item.breed, img: img });
			});
		});
		setBreedList(breeds);
		setDogList(list);
	};

	return (
		<Box
			className={style.breed}
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mb: 5, width: '80%' }}>
			<Typography
				variant="h3"
				sx={{ mt: 2, mb: 1, color: 'white', alignSelf: 'center' }}>
				My Team
			</Typography>
			<Button
				variant="contained"
				color="success"
				onClick={() => navigate('/breeds')}
				sx={{ alignSelf: 'center' }}>
				Back to breeds
			</Button>
			{breedList &&
				breedList.map((item, index) => (
					<Box
						key={`${item}-${index + 1}`}
						sx={{ width: '100%' }}>
						<Typography
							variant="h3"
							sx={{ color: 'white', mt: 1, mb: 1 }}>
							{item}
						</Typography>
						<Grid
							id="my-team-list"
							container
							spacing={2}>
							{dogList &&
								dogList.map(
									(breed, index) =>
										breed.name === item.toLowerCase() && (
											<Grid
												item
												xs={12}
												sm={10}
												md={6}
												lg={4}
												key={`${breed.name}${index + 1}`}>
												<DogCard
													key={index + 1}
													image={breed.img}
													name={breed.name}
												/>
											</Grid>
										)
								)}
						</Grid>
					</Box>
				))}
		</Box>
	);
};
