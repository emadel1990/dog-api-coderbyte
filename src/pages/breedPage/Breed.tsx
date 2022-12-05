import style from './breed.module.css';
import { Box, Button } from '@mui/material';
import { BreedList } from 'components/BreedList';
import { BreedSelect } from 'components/select/BreedSelect';
import { useNavigate } from 'react-router-dom';

export const Breed = () => {
	const navigate = useNavigate();
	return (
		<Box
			className={style.breed}
			sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<BreedSelect />
			<Button
				variant="contained"
				onClick={() => navigate('/myTeam')}>
				My Team
			</Button>
			<Box>
				<BreedList />
			</Box>
		</Box>
	);
};
