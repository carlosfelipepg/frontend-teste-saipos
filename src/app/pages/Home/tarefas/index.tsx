import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { FormLabel } from 'app/components/FormLabel';
import { Input } from './components/Input';
import { TextButton } from './components/TextButton';
import {
  selectStatus,
  selectTarefas,
  selectLoading,
  selectError,
} from './slice/selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { TarefaErrorType } from './slice/types';
import { TarefaItem } from './TarefaItem';
import { useTarefasSlice } from './slice';

export function TarefasPendentes() {
  const { actions } = useTarefasSlice();

  const status = useSelector(selectStatus);
  const tarefas = useSelector(selectTarefas);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const onChangeSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(actions.changeSearch(evt.currentTarget.value));
    dispatch(actions.loadTarefas());
  };

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadTarefas());
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  return (
    <Wrapper>
      {tarefas?.length > 0 ? (
        <ListTarefas>
          {tarefas.map(movie => (
            <TarefaItem
              key={movie.id}
              id={movie.id}
              status={movie.status}
              responsavel={movie.responsavel}
              email={movie.email}
              descricao={movie.descricao}
            />
          ))}
        </ListTarefas>
      ) : error ? (
        <ErrorText>{repoErrorText(error)}</ErrorText>
      ) : null}
    </Wrapper>
  );
}

export const repoErrorText = (error: TarefaErrorType) => {
  switch (error) {
    case TarefaErrorType.TAREFA_NOT_FOUND:
      return 'Tarefa não encontrado 😞';
    case TarefaErrorType.SEARCH_EMPTY:
      return 'Pesquisa vazia';
    case TarefaErrorType.TAREFAS_AVOID:
      return 'Lista de tarefas vazia 🥺';
    case TarefaErrorType.TAREFAS_RATE_LIMIT:
      return 'Muitos resultados 🤔';
    default:
      return 'Ocorreu um erro!';
  }
};

const ListTarefas = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  ${TextButton} {
    margin: 16px 0;
    font-size: 0.875rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Input} {
    width: ${100 / 3}%;
    margin-right: 0.5rem;
  }
`;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${FormLabel} {
    margin-bottom: 0.25rem;
    margin-left: 0.125rem;
  }
`;
