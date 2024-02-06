import { lazy } from 'react';

export const LazyArticlesPage = lazy(async () => await import('./ArticlesPage'));
