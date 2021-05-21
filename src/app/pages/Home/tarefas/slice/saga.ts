import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectStatus } from './selectors';
import { tarefasActions as actions } from '.';
import { Tarefa } from 'types/Tarefa';
import { TarefaErrorType } from './types';

export function* getTarefas() {
  yield delay(500);
  const status: string = yield select(selectStatus);

  const requestURL = `${process.env.REACT_APP_URL_BACK}api/tarefas/listar_tarefas/`;

  try {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify({ status });

    const tarefas: Tarefa[] = yield call(request, requestURL, {
      method: 'post',
      body,
      headers,
    });
    yield put(actions.tarefasLoaded(tarefas));
  } catch (err) {
    yield put(actions.tarefaError(TarefaErrorType.RESPONSE_ERROR));
  }
}

export function* tarefasSaga() {
  yield takeLatest(actions.loadTarefas.type, getTarefas);
  yield takeLatest(actions.mudarStatus.type, getTarefas);
}
