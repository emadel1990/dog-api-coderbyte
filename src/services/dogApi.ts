const baseUrl = import.meta.env.VITE_API_DOG_URL;

export const getAllBreeds = async () => {
	const response = await fetch(`${baseUrl}/breeds/list/all`);
	const data = await response.json();
	return data.message;
};

export const getSubBreeds = async (breed: string) => {
	const response = await fetch(`${baseUrl}/breed/${breed}/list`);
	const data = await response.json();
	return data;
};

export const getBreedImageByQuery = async ({ queryKey }: { queryKey: string[] }) => {
	if (queryKey[1] === undefined) return;
	const response = await fetch(`${baseUrl}/breed/${queryKey[1]}/images/random`);
	const data = await response.json();
	return data;
};

export const getImageByBreed = async (breed: string): Promise<string> => {
	const newBreed = breed.replace('-', '/').replace(/\s/g, '');

	const response = await fetch(`${baseUrl}/breed/${newBreed}/images`);
	const data = await response.json();
	return data.message;
};

/* export const getAllImagesByBreed = async (breed: string) => {
	const response = await fetch(`${baseUrl}/breed/${breed}/images`);
	const data = await response.json();
	return data;
}; */
