import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.tarefasRepo || initialState;

export const selectStatus = createSelector(
  [selectDomain],
  tarefasState => tarefasState.status,
);

export const selectLoading = createSelector(
  [selectDomain],
  tarefasState => tarefasState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  tarefasState => tarefasState.error,
);

export const selectTarefas = createSelector(
  [selectDomain],
  tarefasState => tarefasState.tarefas,
);
