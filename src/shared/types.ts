// Общие пропсы, для всех компонентов которын используются в Field
import type { RouteProps } from 'react-router-dom';
import { type UserRole } from '../entities/User';

export interface ISharedFieldComponentProps {
    isReadOnly?: boolean;
    className?: string;
    dataTestId?: string;
}

export type TAppRoutesProps = RouteProps & {
    isAuthOnly?: boolean;
    roles?: UserRole[];
};

export interface ITestProps {
    dataTestId?: string;
}

export interface IFeaturesFlag {
    isArticleRatingEnabled?: boolean;
    isCounterEnabled?: boolean;
}
