import { createContext } from 'react';
import { IBreedsContext } from 'interfaces/IBreedsContext';

export const BreedContext = createContext<IBreedsContext>(null!);
