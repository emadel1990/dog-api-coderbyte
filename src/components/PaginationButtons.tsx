import { Dispatch, SetStateAction } from 'react';
import { Button, Box, Typography } from '@mui/material';

type Props = {
	breedList: string[] | null;
	pageSize: number;
	pageNumber: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
};

export const PaginationButtons = ({ breedList, pageSize, pageNumber, setPageNumber }: Props) => {
	return (
		<>
			<Button
				sx={{ m: 1, width: '80px', '&.Mui-disabled': { backgroundColor: '#808080' }, fontWeight: '600' }}
				color="secondary"
				variant="contained"
				onClick={() => setPageNumber(1)}
				disabled={pageNumber === 1}>
				{'<<'}
			</Button>
			<Button
				sx={{ m: 1, width: '80px', '&.Mui-disabled': { backgroundColor: '#808080' }, fontWeight: '600' }}
				color="secondary"
				variant="contained"
				onClick={() => setPageNumber(pageNumber - 1)}
				disabled={pageNumber === 1}>
				{'<'}
			</Button>
			<Button
				sx={{ m: 1, width: '80px', '&.Mui-disabled': { backgroundColor: '#808080' }, fontWeight: '600' }}
				variant="contained"
				onClick={() => setPageNumber(pageNumber + 1)}
				disabled={pageNumber === Math.ceil(breedList!.length / pageSize)}>
				{'>'}
			</Button>
			<Button
				sx={{ m: 1, width: '80px', '&.Mui-disabled': { backgroundColor: '#808080' }, fontWeight: '600' }}
				variant="contained"
				onClick={() => setPageNumber(Math.ceil(breedList!.length / pageSize))}
				disabled={pageNumber === Math.ceil(breedList!.length / pageSize)}>
				{'>>'}
			</Button>
			;
		</>
	);
};
