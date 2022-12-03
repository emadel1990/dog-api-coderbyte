import { ClimbingBoxLoader } from 'react-spinners';
import { Box, Typography } from '@mui/material';
export const Loading = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				left: '50%',
				top: '45%',
				transform: 'translate(-50%, -45%)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
			<ClimbingBoxLoader
				color="#fff"
				size={20}
				speedMultiplier={1.3}
			/>
			<Typography
				variant="h3"
				sx={{ color: 'white', mt: 3 }}>
				Loading...
			</Typography>
		</Box>
	);
};
