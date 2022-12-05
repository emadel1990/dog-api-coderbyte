import { Routes, Route, Navigate } from 'react-router-dom';
import { SingleBreed, Breed, MyTeam } from '@/pages';

export const Views = () => {
	return (
		<Routes>
			<Route
				path="*"
				element={
					<Navigate
						to="/home"
						replace
					/>
				}
			/>
			<Route
				path="/home"
				element={<Breed />}
			/>
			<Route
				path="/breed/:name"
				element={<SingleBreed />}
			/>
			<Route
				path="/myTeam"
				element={<MyTeam />}
			/>
		</Routes>
	);
};
