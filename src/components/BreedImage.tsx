import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { FadeLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

type Props = {
	image: string | null;
};

export const BreedImage = ({ image }: Props) => {
	return (
		<Card sx={{ backgroundColor: 'black', border: '1px solid #ffffff65' }}>
			{!image ? (
				<FadeLoader />
			) : (
				<CardMedia
					sx={{ objectFit: 'scale-down', cursor: 'pointer', backgroundColor: 'black' }}
					onClick={() => {
						console.log('CLICKED');
					}}
					component="img"
					height="300"
					image={
						image ||
						'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
					}
					alt={`${image}`}
				/>
			)}
		</Card>
	);
};
