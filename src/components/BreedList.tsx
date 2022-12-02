import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { IBreedsList } from '../interfaces/IBreeds';
import { BreedCard } from './BreedCard';

type Props = {
	breedList: IBreedsList | null;
};

export const BreedList = ({ breedList }: Props) => {
	if (!breedList) {
		return <div>Loading...</div>;
	}

	return (
		<Grid
			container
			spacing={2}>
			{Object.entries(breedList).map(([key, value]) =>
				value.length > 0 ? (
					value.map((subBreed) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							key={subBreed}>
							<BreedCard
								breed={key}
								subBreed={subBreed}
							/>
						</Grid>
					))
				) : (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						key={key}>
						<BreedCard breed={key} />
					</Grid>
				)
			)}
		</Grid>
	);
};
