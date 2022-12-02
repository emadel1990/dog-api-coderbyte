const baseUrl = import.meta.env.VITE_API_DOG_URL;

export const getAllBreeds = async () => {
	const response = await fetch(`${baseUrl}/breeds/list/all`);
	const data = await response.json();
	return data;
};

export const getSubBreeds = async (breed: string) => {
	const response = await fetch(`${baseUrl}/breed/${breed}/list`);
	const data = await response.json();
	return data;
};

export const getBreedImage = async (breed: string) => {
	const response = await fetch(`${baseUrl}/breed/${breed}/images/random`);
	const data = await response.json();
	return data;
};

export const getAllImagesByBreed = async (breed: string) => {
	const response = await fetch(`${baseUrl}/breed/${breed}/images`);
	const data = await response.json();
	return data;
};
