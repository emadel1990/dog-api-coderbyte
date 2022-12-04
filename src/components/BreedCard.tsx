import { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { FadeLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { useBreeds } from '../hooks/useBreeds';

type Props = {
	breed: string;
};

export const BreedCard = ({ breed }: Props) => {
	const myBreeds = useBreeds();
	const [lengthTeam, setLengthTeam] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		Object.entries(myBreeds?.myTeam).forEach(([key, value]) => {
			if (value.breed === breed) {
				setLengthTeam(value.team.length);
			}
		});
		console.log(`breed/${breed}`);
	}, [breed]);

	return (
		<Card sx={{ backgroundColor: 'black', border: '1px solid #ffffff65', overflow: 'visible' }}>
			{myBreeds?.breedsImages[breed] === null ? (
				<Box sx={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<FadeLoader color={'white'} />
				</Box>
			) : (
				<CardMedia
					sx={{ objectFit: 'scale-down', cursor: 'pointer', backgroundColor: 'black' }}
					onClick={() => {
						navigate(`/breed/${breed.split('/')[0]} - ${breed.split('/')[1]}`);
					}}
					component="img"
					height="300"
					image={
						myBreeds?.breedsImages[breed] ||
						'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
					}
					alt={`${breed} image`}
				/>
			)}
			<CardContent sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#253a44' }}>
				<Typography
					sx={{ color: 'white', textTransform: 'capitalize', mr: 1 }}
					gutterBottom
					variant="h5"
					component="div">
					{breed}
				</Typography>
				{lengthTeam > 0 ? (
					<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<Typography
							sx={{ mr: 2, color: '#ffffff' }}
							fontWeight="500">{`Team size`}</Typography>
						<Box
							sx={{
								width: '30px',
								height: '30px',
								borderRadius: '5px',
								color: 'white',
								backgroundColor: '#1976d2',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Typography fontWeight="600">{lengthTeam}</Typography>
						</Box>
					</Box>
				) : (
					<Box style={{ height: '30px' }}></Box>
				)}
			</CardContent>
		</Card>
	);
};
