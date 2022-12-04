import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { FadeLoader } from 'react-spinners';
import { useBreeds } from '../hooks/useBreeds';
import { IMyTeam } from '../interfaces/IBreedsContext';

type Props = {
	image: string | null;
	name: string;
};

export const DogCard = ({ image, name }: Props) => {
	const [isInMyTeam, setIsInMyTeam] = useState(false);
	const myBreeds = useBreeds();

	useEffect(() => {
		myBreeds?.myTeam.forEach((breed: IMyTeam) => {
			if (breed.breed === name) {
				setIsInMyTeam(breed.team.some((breed: string) => breed === image));
			}
		});
	}, [myBreeds?.myTeam]);

	const isMaximumTeam = (): boolean => {
		let contador = 0;
		const currentTeam = [...myBreeds?.myTeam];
		currentTeam.map((breed) => {
			contador += breed.team.length;
		});
		return contador <= 9;
	};

	const handleAddToMyTeam = () => {
		if (!isMaximumTeam()) {
			toast.error('You have reached the maximum(10) number of dogs in your team');
			return;
		}
		if (image && name) {
			const currentTeam = [...myBreeds?.myTeam];
			const breedExists = currentTeam.find((item: IMyTeam) => item.breed === name);
			if (!breedExists) {
				toast.success('Breed added to your team!');
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
							toast.success('Breed added to your team!');
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
					<CardMedia
						sx={{ objectFit: 'scale-down' }}
						component="img"
						height="300"
						width={90}
						image={
							image ||
							'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
						}
						alt={`${image}`}
					/>
					<CardContent sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#45889192' }}>
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
								color="secondary"
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
