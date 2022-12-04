import { useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { IBreedsList } from 'interfaces/IBreeds';
import { BreedCard } from './BreedCard';
import { Paginator } from './Paginator';
import Paginate from 'utils/paginator';
import { Loading } from './Loading';
import { useBreeds } from 'hooks/useBreeds';

export const BreedList = () => {
	const myBreeds = useBreeds();
	const [breedList, setBreedList] = useState<IBreedsList>({} as IBreedsList);
	const [flatBreedList, setFlatBreedList] = useState<string[]>([]);
	const [pageSize, setPageSize] = useState<number>(10);
	const [pageNumber, setPageNumber] = useState<number>(1);

	useEffect(() => {
		if (myBreeds?.breeds) {
			setBreedList(myBreeds.breeds);
		}
	}, [myBreeds?.breeds]);

	if (!breedList) {
		return <Loading />;
	}

	if (myBreeds?.breedsError) {
		return (
			<Typography
				variant="h6"
				color="error">
				Error loading breeds.. {myBreeds?.breedsError}
			</Typography>
		);
	}

	const flatBreedListFn = () => {
		const arr: string[] = [];
		Object.keys(breedList).forEach((breed) => {
			if (breedList[breed]?.length > 0) {
				breedList[breed]?.forEach((subBreed) => {
					arr.push(`${breed}/${subBreed}`);
				});
			} else {
				arr.push(`${breed}`);
			}
		});
		return arr;
	};

	useEffect(() => {
		if (breedList) {
			setFlatBreedList(flatBreedListFn());
		}
	}, [breedList]);

	return (
		<Paginator
			breedList={flatBreedList}
			pageNumber={pageNumber}
			pageSize={pageSize}
			setPageNumber={setPageNumber}
			setPageSize={setPageSize}>
			<Grid
				container
				spacing={2}>
				{flatBreedList &&
					Paginate(flatBreedList, pageSize, pageNumber).map((breed) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							key={breed}>
							<BreedCard breed={breed} />
						</Grid>
					))}
			</Grid>
		</Paginator>
	);
};
