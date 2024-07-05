import { createSelector } from 'reselect';

const selectUserStore = (store: any) => store.user;

export const selectIsUserAuthedStatus = createSelector(
  [selectUserStore],
  (userStore) => userStore.authed,
);

export const selectNotesList = createSelector(
  [selectUserStore],
  (userStore) => userStore.notesList,
);

export const selectUserName = createSelector(
  [selectUserStore],
  (userStore) => userStore.userName,
);

