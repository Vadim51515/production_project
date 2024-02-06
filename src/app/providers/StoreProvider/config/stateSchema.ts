import { type EnhancedStore, type Reducer, type ReducersMapObject, type UnknownAction } from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type IArticleDetailsState } from '../../../../entities/Article/model/types';
import { type ICounterState } from '../../../../entities/Counter';
import { type IProfileState } from '../../../../entities/Profile';
import { type IUserState } from '../../../../entities/User';
import { type ICommentFormState } from '../../../../features/addCommentForm';
import { type ILoginState } from '../../../../features/AuthByUsername';
import { type IArticleCommentsState, type IArticleRecommendationState } from '../../../../pages/ArticleDetailsPage';
import { type IArticlesPageState } from '../../../../pages/ArticlesPage';
import { type rtkApi } from '../../../../shared/api';
import { type RuntimeStatuses } from '../../../../shared/constants/common';
import { type IUIPageState } from '../../../../widgets/Page';
import type { Func, TFormErrors } from '../../../types';

export interface IStateSchema {
    counter: ICounterState;
    user: IUserState;
    uiPage: IUIPageState;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    // Асинхронные редюсеры
    login?: ILoginState;
    profile?: IProfileState;
    articleDetails?: IArticleDetailsState;
    articleDetailsComments?: IArticleCommentsState;
    addCommentForm?: ICommentFormState;
    articlesPage?: IArticlesPageState;
    articleRecommendation?: IArticleRecommendationState;
}

export type IStateKey = keyof IStateSchema;

export interface IReducerManager {
    getReducerMap: Func<[], ReducersMapObject<IStateSchema>>;
    reduce: Func<[IStateSchema?, UnknownAction?], IStateSchema>;
    add: Func<[IStateKey, Reducer]>;
    remove: Func<[IStateKey]>;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager;

    addModule: (key: string, reducer: Reducer, isReplace?: boolean) => void;
    removeModule: (key: string) => void;
}

export interface ISharedState {
    status: RuntimeStatuses;
    error?: string;
    formErrors?: TFormErrors<string>;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: IStateSchema;
}
