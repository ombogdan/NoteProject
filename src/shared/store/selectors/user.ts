import { createSelector } from 'reselect';

const selectUserStore = (store: any) => store.user;

export const selectIsUserAuthedStatus = createSelector(
  [selectUserStore],
  (userStore) => userStore.authed,
);

