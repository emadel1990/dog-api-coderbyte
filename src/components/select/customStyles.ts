export const customStyles = {
	option: (provided: any, state: any) => ({
		...provided,
		color: state.isSelected ? '#000000a7' : '#000000',
		fontFamily: 'Segoe UI',
		fontSize: '13px',
		maxWidth: '340px',
		width: '300px',
		padding: 10,
		borderBottom: '0.2px solid #0000005e'
	}),
	menu: (provided: any) => ({
		...provided,
		maxWidth: '600px',
		fontFamily: 'Segoe UI',
		fontSize: '13px'
	}),
	control: (provided: any) => ({
		// none of react-select's styles are passed to <Control />
		...provided,
		display: 'flex',
		flexWrap: 'nowrap',
		fontFamily: 'Segoe UI',
		fontSize: '14px',
		border: '1px solid #00000057',
		borderRadius: '4px',
		height: '45px',
		maxWidth: '600px',
		marginBottom: '10px',
		width: '310px'
	})
};
