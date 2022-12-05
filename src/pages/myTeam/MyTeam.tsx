import { useState, useEffect } from 'react';
import style from 'pages/breedPage/breed.module.css';
import { Grid, Box, Typography } from '@mui/material';
import { DogCard } from 'components/DogCard';
import { useBreeds } from 'hooks/useBreeds';
import { Link } from 'react-router-dom';

export const MyTeam = () => {
	const breedsContext = useBreeds();
	const [dogList, setDogList] = useState<any[]>([]);

	useEffect(() => {
		listBreeds();
	}, [breedsContext.myTeam]);

	const listBreeds = () => {
		const list: any[] = [];
		breedsContext.myTeam.map((item, index) => {
			item.team.map((img, index) => {
				list.push({ name: item.breed, img: img });
			});
		});
		setDogList(list);
	};

	return (
		<Box
			className={style.breed}
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5, width: '80%' }}>
			<Typography
				variant="h3"
				sx={{ mt: 2, mb: 1, color: 'white' }}>
				My Team
			</Typography>
			<Link
				to="/breeds"
				style={{ color: 'white', fontSize: '25px', fontFamily: 'Segoe UI', marginBottom: '15px' }}>
				Back to breeds
			</Link>
			<Grid
				id="my-team-list"
				sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}
				container
				spacing={2}>
				{dogList &&
					dogList.map((breed, index) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							key={`${breed.name}${index + 1}`}>
							<DogCard
								key={index + 1}
								image={breed.img}
								name={breed.name}
							/>
						</Grid>
					))}
			</Grid>
		</Box>
	);
};
