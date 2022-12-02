import { Grid } from '@mui/material';
import { BreedImage } from './BreedImage';

type Props = {
	breedList: string[] | null;
};

export const SingleBreedList = ({ breedList }: Props) => {
	if (!breedList) {
		return <div>Loading...</div>;
	}

	return (
		<Grid
			container
			spacing={2}>
			{breedList.slice(0, 10).map((breed) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					key={breed}>
					<BreedImage image={breed} />
				</Grid>
			))}
		</Grid>
	);
};
