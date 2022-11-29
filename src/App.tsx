import style from './app.module.css';
import { Breed } from './pages/breedPage/Breed';

export const App = () => {
	return (
		<div className={style.app}>
			<Breed />
		</div>
	);
};
