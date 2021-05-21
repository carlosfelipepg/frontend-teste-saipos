import { PayloadAction } from '@reduxjs/toolkit';
import { Tarefa } from 'types/Tarefa';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { tarefasSaga } from './saga';
import { TarefasState, TarefaErrorType } from './types';

export const initialState: TarefasState = {
  status: 0,
  tarefas: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'tarefasRepo',
  initialState,
  reducers: {
    loadTarefas(state) {
      state.loading = true;
      state.error = null;
      state.tarefas = [];
    },
    tarefasLoaded(state, action: PayloadAction<Tarefa[]>) {
      const tarefas = action.payload;
      state.tarefas = tarefas;
      state.loading = false;
    },
    tarefaError(state, action: PayloadAction<TarefaErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
    mudarStatus(state, action: PayloadAction<string>) {
      const status = action.payload;
      state.loading = true;
    },
  },
});

export const { actions: tarefasActions, reducer } = slice;

export const useTarefasSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: tarefasSaga });
  return { actions: slice.actions };
};
