import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { toast } from 'react-toastify';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { FadeLoader } from 'react-spinners';
import { useBreeds } from '../hooks/useBreeds';
import { IMyTeam } from '../interfaces/IBreedsContext';

type Props = {
	image: string | null;
	name: string;
};

export const BreedImage = ({ image, name }: Props) => {
	const [isExploding, setIsExploding] = useState(false);
	const [isInMyTeam, setIsInMyTeam] = useState(false);
	const myBreeds = useBreeds();

	/* const isInMyTeam = myBreeds?.myTeam.some((breed: IMyTeam) => breed.breed === name); */

	useEffect(() => {
		myBreeds?.myTeam.forEach((breed: IMyTeam) => {
			if (breed.breed === name) {
				setIsInMyTeam(breed.team.some((breed: string) => breed === image));
			}
		});
	}, [myBreeds?.myTeam]);

	useEffect(() => {
		const timeOutID = setTimeout(() => {
			setIsExploding(false);
		}, 1000);
		return () => clearTimeout(timeOutID);
	}, [isExploding]);

	const handleAddToMyTeam = () => {
		if (image && name) {
			const currentTeam = [...myBreeds?.myTeam];
			const breedExists = currentTeam.find((item: IMyTeam) => item.breed === name);
			if (!breedExists) {
				setIsExploding(true);
				const newBreed: IMyTeam = {
					breed: name,
					team: [image]
				};
				myBreeds?.setMyTeam([...currentTeam, newBreed]);
				return;
			}
			if (breedExists) {
				currentTeam.map((item: IMyTeam) => {
					if (item.breed === name) {
						if (item.team.length < 3) {
							setIsExploding(true);
							item.team.push(image);
							myBreeds?.setMyTeam(currentTeam);
							return;
						} else {
							toast.error('You can only have 3 images per breed');
						}
					}
				});
				return;
			}
		}
	};

	const handleRemoveFromMyTeam = () => {
		if (image && name) {
			const currentTeam = [...myBreeds?.myTeam];
			currentTeam.map((item: IMyTeam) => {
				if (item.breed === name) {
					item.team = item.team.filter((breed: string) => breed !== image);
				}
			});
			myBreeds?.setMyTeam(currentTeam);
		}
	};

	return (
		<Card
			sx={{
				backgroundColor: 'black',
				border: `2px solid ${!isInMyTeam ? '#005e00' : '#b98800'}`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			{image === null ? (
				<FadeLoader
					color="white"
					speedMultiplier={1.5}
				/>
			) : (
				<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
					{isExploding && (
						<ConfettiExplosion
							duration={13000}
							floorHeight={1500}
							floorWidth={2000}
						/>
					)}
					<CardMedia
						sx={{ objectFit: 'scale-down', backgroundColor: 'black' }}
						component="img"
						height="300"
						image={
							image ||
							'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
						}
						alt={`${image}`}
					/>
					<CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
						{!isInMyTeam ? (
							<Button
								variant="contained"
								color="success"
								onClick={handleAddToMyTeam}>
								Add to my team
							</Button>
						) : (
							<Button
								variant="contained"
								color="warning"
								onClick={handleRemoveFromMyTeam}>
								Remove from my team
							</Button>
						)}
					</CardContent>
				</Box>
			)}
		</Card>
	);
};
