import { createContext } from 'react';
import { IToastConfig } from 'interfaces/IToast';
export const ToastContext = createContext<IToastConfig>(null!);
