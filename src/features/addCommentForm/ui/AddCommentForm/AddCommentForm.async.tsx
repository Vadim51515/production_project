import { type ComponentType, lazy, type LazyExoticComponent } from 'react';
import { type IAddCommentFormProps } from './AddCommentForm';

export const LazyAddCommentForm: LazyExoticComponent<ComponentType<IAddCommentFormProps>> = lazy(
    async () => await import('./AddCommentForm'),
);
