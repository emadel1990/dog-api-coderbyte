import style from './toast.module.css';
import { ReactNode } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ToastContext } from './ToastContext';
import { IToastProvider } from '../../interfaces/IToast';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
	console.log(window.innerWidth);
	const toastDefConfig: IToastProvider = {
		position: 'bottom-right',
		type: 'default',
		autoClose: 2500,
		hideProgressBar: false,
		closeOnClick: true,
		rtl: false,
		pauseOnFocusLoss: false
	};

	const data = {
		toast
	};
	return (
		<ToastContext.Provider value={data}>
			<>
				{children}
				<ToastContainer
					{...toastDefConfig}
					toastClassName={style.toast}
					bodyClassName={style.body}
					limit={3}
				/>
			</>
		</ToastContext.Provider>
	);
};
