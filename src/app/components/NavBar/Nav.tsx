import * as React from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import { ReactComponent as StarIcon } from './assets/star.svg';

export function Nav() {
  let history = useHistory();

  return (
    <Wrapper>
      <Item
        onClick={() => history.push('/')}
        title="Listagem de filmes"
        rel="noopener noreferrer"
      >
        <DocumentationIcon />
        Listagem
      </Item>
      <Item
        onClick={() => history.push('/favorite')}
        title="Filmes favoritos"
        rel="noopener noreferrer"
      >
        <StarIcon />
        Favoritos
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
