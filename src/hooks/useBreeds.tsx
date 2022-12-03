import { useContext } from 'react';
import { BreedContext } from '../context/breeds/BreedContext';

export const useBreeds = () => {
	return useContext(BreedContext);
};
