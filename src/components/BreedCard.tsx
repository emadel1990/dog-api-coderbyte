import { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { getBreedImage } from '../services/dogApi';
import { FadeLoader } from 'react-spinners';
import { useNavigate, Link } from 'react-router-dom';

type Props = {
	breed: string;
	subBreed?: string;
};

export const BreedCard = ({ breed, subBreed }: Props) => {
	const [image, setImage] = useState<string | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		getBreedImage(breed).then((res) => {
			setImage(res.message);
		});
	}, []);

	return (
		<Card sx={{ backgroundColor: 'black', border: '1px solid #ffffff65' }}>
			{!image ? (
				<FadeLoader />
			) : (
				<CardMedia
					sx={{ objectFit: 'scale-down', cursor: 'pointer', backgroundColor: 'black' }}
					onClick={() => {
						navigate(`/breed/${breed}`);
					}}
					component="img"
					height="300"
					image={
						image ||
						'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
					}
					alt={`${breed} image`}
				/>
			)}
			<CardContent sx={{ display: 'flex', backgroundColor: '#253a44' }}>
				<Typography
					sx={{ color: 'white', textTransform: 'capitalize', mr: 1 }}
					gutterBottom
					variant="h5"
					component="div">
					{breed}
				</Typography>
				{subBreed && (
					<Typography
						sx={{ color: 'white', textTransform: 'capitalize' }}
						gutterBottom
						variant="h5"
						component="div">
						{`- ${subBreed}`}
					</Typography>
				)}
			</CardContent>
		</Card>
	);
};
