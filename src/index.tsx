import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import './app/styles/index.scss';
import ErrorBoundary from '@/app/providers/ErrorBoundary/ui/ErrorBoundary';
import { StoreProvider } from './app/providers/StoreProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import '@/shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
export { Theme } from './shared/enums';
