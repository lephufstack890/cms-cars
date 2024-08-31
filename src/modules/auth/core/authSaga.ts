import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, select, take } from 'redux-saga/effects';

import { UserModel } from '@/models';
import { authActions, selectIsLoggedIn } from '@/modules/auth/core/authSlice';
// import { history } from '@/utils';

function* handleSetAuth(_: UserModel) {
  // yield history.push('/dashboard');
}

function* handleSetEmptyAuth() {
  // TODO: handle reset all init value like menu, ...
  // yield history.push('/auth');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn: boolean = yield select(selectIsLoggedIn);

    if (!isLoggedIn) {
      const action: PayloadAction<UserModel> = yield take(authActions.loginSuccess.type);
      yield fork(handleSetAuth, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleSetEmptyAuth);
  }
}

function* authSaga() {
  yield fork(watchLoginFlow);
}

export { authSaga };
