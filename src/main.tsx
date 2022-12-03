import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { BreedProvider } from './context/breeds/BreedProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastProvider } from './context/toasts/ToastProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<BreedProvider>
				<ToastProvider>
					<App />
				</ToastProvider>
			</BreedProvider>
		</BrowserRouter>
	</QueryClientProvider>
);
