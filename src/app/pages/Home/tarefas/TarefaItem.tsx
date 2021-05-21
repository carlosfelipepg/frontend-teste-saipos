import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as StarIcon } from './assets/star.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useTarefasSlice } from './slice';

interface Props {
  id: number;
  status: string;
  responsavel: string;
  email: string;
  descricao: string;
}

export function TarefaItem({
  id,
  status,
  responsavel,
  email,
  descricao,
}: Props) {
  const { actions } = useTarefasSlice();

  const alert = useAlert();

  const dispatch = useDispatch();

  let history = useHistory();

  function mudarStatus() {
    dispatch(actions.mudarStatus('pendente'));
    alert.show('Concluída!', {
      timeout: 2000,
      type: 'success',
    });
  }

  return (
    <Wrapper>
      <Name>
        {responsavel} - {email}
      </Name>
      <Name>{descricao}</Name>
      <Info>
        <StarCount onClick={() => mudarStatus()}>Concluir</StarCount>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  flex-direction: column;
  padding: 0 1rem;
  min-height: 2.75rem;
  font-weight: 500;
  max-width: 20rem;
  min-width: 20rem;
  color: ${p => p.theme.text};
  &:nth-child(odd) {
    background-color: ${p => p.theme.backgroundVariant};
  }
`;

const Name = styled.button`
  height: 7rem;
  background: transparent;
  border: none;
  color: ${p => p.theme.primary};
  text-decoration: none;
  &:focus {
    outline-width: 0;
  }
  &:active {
    opacity: 0.4;
  }
`;

const Info = styled.div`
  flex: 1;
  padding: 1rem;
`;

const StarCount = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  background: transparent;
  border: none;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
    cursor: pointer;
  }
  &:focus {
    outline-width: 0;
  }
  .icon {
    margin-right: 0.125rem;
  }
`;
