import { ReactNode, useState, useEffect } from 'react';
import { BreedContext } from './BreedContext';
import { IMyTeam, IBreedsImages } from 'interfaces/IBreedsContext';
import { useQuery } from '@tanstack/react-query';
import { IBreedsList } from 'interfaces/IBreeds';
import { getAllBreeds, getImageByBreed } from 'services/dogApi';

export const BreedProvider = ({ children }: { children: ReactNode }) => {
	const [myTeam, setMyTeam] = useState<IMyTeam[]>([]);
	const [breeds, setBreeds] = useState<IBreedsList>({} as IBreedsList);
	const [breedsImages, setBreedsImages] = useState<IBreedsImages>({});
	const {
		data: breedsData,
		isLoading: isBreedsLoading,
		error: breedsError,
		isSuccess: isBreedsSuccess
	} = useQuery({
		queryKey: ['breeds'],
		queryFn: getAllBreeds
	});

	useEffect(() => {
		if (breedsData) {
			setBreeds(breedsData);
			setBreedsImages(searchBreedsImages(breedsData));
			searchEveryBreed(searchBreedsImages(breedsData));
		}
	}, [isBreedsSuccess]);

	useEffect(() => {
		const savedTeam = localStorage.getItem('myTeam');
		if (savedTeam) {
			setMyTeam(JSON.parse(savedTeam));
		}
	}, []);

	useEffect(() => {
		myTeam.forEach((item) => {
			if (item.team.length === 0) {
				const newTeam = myTeam.filter((team) => team.breed !== item.breed);
				setMyTeam(newTeam);
			}
		});
		localStorage.setItem('myTeam', JSON.stringify(myTeam));
	}, [myTeam]);

	const searchBreedsImages = (breeds: IBreedsList): IBreedsImages => {
		const breedsImages: IBreedsImages = {};
		Object.keys(breeds).forEach((breed) => {
			if (breeds[breed].length > 0) {
				breeds[breed].forEach((subBreed) => {
					breedsImages[`${breed.toLocaleLowerCase()}/${subBreed.toLocaleLowerCase()}`] = null;
				});
			} else {
				breedsImages[`${breed.toLocaleLowerCase()}`] = null;
			}
		});
		return breedsImages;
	};

	const searchEveryBreed = async (breeds: IBreedsImages) => {
		const promises: Promise<any>[] = [];
		Object.keys(breeds).forEach((breed) => {
			promises.push(getImageByBreed(breed));
		});
		Promise.allSettled(promises).then((results) => {
			results.forEach((result) => {
				if (result.status === 'fulfilled') {
					const breed = result.value[0].split('/')[4].replace('-', '/');
					setBreedsImages((prev) => ({
						...prev,
						[breed]: result.value[0]
					}));
				}
			});
		});
	};

	const value = {
		myTeam,
		setMyTeam,
		breeds,
		isBreedsLoading,
		breedsError,
		breedsImages
	};
	return <BreedContext.Provider value={value}>{children}</BreedContext.Provider>;
};
