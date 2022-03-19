import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';

export const registerAction = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);
