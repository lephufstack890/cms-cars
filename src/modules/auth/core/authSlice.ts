import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getToken } from '@/hooks/useAuth';
import { UserModel } from '@/models';
import { RootState } from '@/store';

interface IAuthState {
  isLoggedIn: boolean;
  currentUser?: UserModel;
}

const initialState: IAuthState = {
  isLoggedIn: !!getToken().accessToken,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    loginSuccess(state, action: PayloadAction<UserModel>) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.currentUser = undefined;
      state.isLoggedIn = false;
    },
  },
});
// Actions
const authActions = authSlice.actions;
// Select
const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const selectCurrentUser = (state: RootState) => state.auth.currentUser;
// Reducer
const authReducer = authSlice.reducer;

export { authActions, authReducer, selectCurrentUser, selectIsLoggedIn };
