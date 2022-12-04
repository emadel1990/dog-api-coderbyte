import { useState, useEffect } from 'react';
import Select from 'react-select';
import { customStyles } from './customStyles';
import { FormControl } from '@mui/material';
import lodash from 'lodash';
import { useBreeds } from '../../hooks/useBreeds';
import { useNavigate } from 'react-router-dom';

interface ISelectState {
	readonly isClearable: boolean;
	readonly isDisabled: boolean;
	readonly isLoading: boolean;
	readonly isRtl: boolean;
	readonly isSearchable: boolean;
}
interface ISelectItems {
	value: number;
	label: string;
}

export const BreedSelect = () => {
	const breedContext = useBreeds();
	const navigate = useNavigate();
	const [selectState] = useState<ISelectState>({
		isClearable: true,
		isDisabled: false,
		isLoading: false,
		isRtl: false,
		isSearchable: true
	});
	const [breedItems, setBreedItems] = useState<ISelectItems[]>([
		{ value: 1, label: 'Breed 1' },
		{ value: 2, label: 'Breed 2' }
	]);
	const [selectedBreed, setSelectedBreed] = useState<ISelectItems | null>(null);
	const [breedTerm, setBreedTerm] = useState<string>('');

	const debounceInputTerm = lodash.debounce((e: string) => setBreedTerm(e), 1000);

	useEffect(() => {
		const options: ISelectItems[] = [];
		Object.keys(breedContext.breeds).forEach((breed, index) => {
			options.push({ value: index + 1, label: breed });
		});
		setBreedItems(options);
	}, []);

	useEffect(() => {
		if (selectedBreed?.label) {
			navigate(`/breed/${selectedBreed.label}`);
		}
	}, [selectedBreed]);

	return (
		<FormControl>
			<Select
				value={selectedBreed}
				onInputChange={(e) => debounceInputTerm(e)}
				onChange={(value) => setSelectedBreed(value)}
				styles={customStyles}
				isDisabled={selectState.isDisabled}
				isClearable={selectState.isClearable}
				isSearchable={selectState.isSearchable}
				name="breed-select"
				options={breedItems}
				loadingMessage={() => 'Cargando...'}
				isLoading={breedContext?.isBreedsLoading}
				placeholder="Search for a breed..."
			/>
		</FormControl>
	);
};
