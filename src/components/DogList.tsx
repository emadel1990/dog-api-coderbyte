import { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { DogCard } from './DogCard';
import Paginate from '../utils/paginator';
import { Paginator } from './Paginator';
import { Loading } from './Loading';

type Props = {
	breedList: string[] | null;
	name: string;
};

export const DogList = ({ breedList, name }: Props) => {
	const [pageSize, setPageSize] = useState<number>(10);
	const [pageNumber, setPageNumber] = useState<number>(1);

	if (!breedList) {
		return <Loading />;
	}

	return (
		<Paginator
			breedList={breedList}
			pageNumber={pageNumber}
			pageSize={pageSize}
			setPageNumber={setPageNumber}
			setPageSize={setPageSize}>
			<Grid
				id="single-breed-list"
				sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', pl: 4, pr: 4 }}
				container
				spacing={2}>
				{Paginate(breedList, pageSize, pageNumber).map((breed, index) => (
					<Grid
						item
						xs={12}
						sm={8}
						md={4}
						lg={3}
						key={`${breed}${name}`}>
						<DogCard
							key={index + 1}
							image={breed}
							name={name}
						/>
					</Grid>
				))}
			</Grid>
		</Paginator>
	);
};
