import { createSelector } from 'reselect';
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema';
import { UserRole } from '../types';

export const userAuthDataSelector = (state: IStateSchema) => state.user.authData;
export const isInitSelector = (state: IStateSchema) => state.user.isInit;
export const getUserRolesSelector = (state: IStateSchema) => state.user.authData?.roles;
export const isUserAdminSelector = createSelector(getUserRolesSelector, (roles) => roles?.includes(UserRole.Admin));
export const isUserManagerSelector = createSelector(getUserRolesSelector, (roles) => !!roles?.includes(UserRole.Manager));
