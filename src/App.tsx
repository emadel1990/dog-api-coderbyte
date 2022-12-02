import style from './app.module.css';
import { Views } from './routes/Views';

export const App = () => {
	return (
		<div className={style.app}>
			<Views />
		</div>
	);
};
