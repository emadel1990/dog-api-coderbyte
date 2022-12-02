import { Routes, Route, Navigate } from 'react-router-dom';
import { App } from '../App';
import { Breed } from '../pages/breedPage/Breed';
import { SingleBreed } from '../pages/breedPage/SingleBreed';

export const Views = () => {
	return (
		<Routes>
			{/* <Route
				path="*"
				element={
					<Navigate
						to="home"
						replace
					/>
				}
			/>
			<Route
				path="/home"
				element={<Breed />}
			/>
			<Route
				path="/breedsName/:name"
				element={<SingleBreed />}
			/> */}
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
		</Routes>
	);
};
