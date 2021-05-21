import { Tarefa } from 'types/Tarefa';

/* --- STATE --- */
export interface TarefasState {
  status: number;
  loading: boolean;
  error?: TarefaErrorType | null;
  tarefas: Tarefa[];
}

export enum TarefaErrorType {
  RESPONSE_ERROR = 1,
  TAREFA_NOT_FOUND = 2,
  SEARCH_EMPTY = 3,
  TAREFAS_AVOID = 4,
  TAREFAS_RATE_LIMIT = 5,
}

export type ContainerState = TarefasState;
