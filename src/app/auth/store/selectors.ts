import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
// createFeatureSelector with access to root state is deprecated as of https://github.com/ngrx/platform/issues/3179
// import { AppStateInterface } from 'src/app/shared/types/appState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
