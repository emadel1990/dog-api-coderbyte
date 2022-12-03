import { ReactNode, Dispatch, SetStateAction } from 'react';
import { PaginationButtons } from './PaginationButtons';
import { Box, Typography, Button } from '@mui/material';
import { Loading } from './Loading';

type Props = {
	breedList: string[];
	pageSize: number;
	setPageSize: Dispatch<SetStateAction<number>>;
	pageNumber: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
	children: ReactNode;
};

export const Paginator = ({ breedList, children, pageSize, setPageSize, pageNumber, setPageNumber }: Props) => {
	if (!breedList) {
		return <Loading />;
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<select
				style={{ height: '30px', width: '120px', cursor: 'pointer', margin: '10px' }}
				value={pageSize}
				onChange={(e) => {
					setPageSize(Number(e.target.value));
					if (pageNumber > Math.ceil(breedList.length / Number(e.target.value))) {
						setPageNumber(1);
					}
				}}>
				{[10, 20, 30, 40, 50].map((pageSize) => (
					<option
						key={pageSize}
						value={pageSize}>
						Show {pageSize}
					</option>
				))}
			</select>
			<Typography sx={{ color: 'white', mb: 1 }}>{`Page ${pageNumber} of ${Math.ceil(breedList.length / pageSize)}`}</Typography>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 2 }}>
				<PaginationButtons
					pageSize={pageSize}
					breedList={breedList}
					pageNumber={pageNumber}
					setPageNumber={setPageNumber}
				/>
			</Box>
			<Box>{children}</Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
				<PaginationButtons
					pageSize={pageSize}
					breedList={breedList}
					pageNumber={pageNumber}
					setPageNumber={setPageNumber}
				/>
			</Box>
		</Box>
	);
};
