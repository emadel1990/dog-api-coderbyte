import { toast } from 'react-toastify';

export interface IToastConfig {
	toast: typeof toast;
}

export interface IToastProvider {
	position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
	type?: 'default' | 'info' | 'success' | 'warning' | 'error';
	autoClose?: number;
	hideProgressBar?: boolean;
	closeOnClick?: boolean;
	rtl?: boolean;
	pauseOnFocusLoss?: boolean;
	draggable?: boolean;
	pauseOnHover?: boolean;
}
