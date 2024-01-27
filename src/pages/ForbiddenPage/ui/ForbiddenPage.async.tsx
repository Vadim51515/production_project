import { lazy } from 'react'

export const LazyForbiddenPage = lazy(async () => await import('./ForbiddenPage'))
