export default function Paginate(array: string[], pageSize: number, pageNumber: number) {
	return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
