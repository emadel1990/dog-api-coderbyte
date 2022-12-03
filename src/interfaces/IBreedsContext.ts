import { Dispatch, SetStateAction } from 'react';
import { IBreedsList } from './IBreeds';

export interface IBreedsContext {
	myTeam: IMyTeam[];
	setMyTeam: Dispatch<SetStateAction<IMyTeam[]>>;
	breeds: IBreedsList;
	isBreedsLoading: boolean;
	breedsError: any;
	breedsImages: IBreedsImages;
}

export interface IMyTeam {
	breed: string;
	team: string[];
}

export interface IBreedsImages {
	[key: string]: string | null;
}
