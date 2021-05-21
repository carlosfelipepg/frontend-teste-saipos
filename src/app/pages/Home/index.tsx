import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { TarefasPendentes } from './tarefas';
import { P } from './components/P';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Tarefas Pendentes" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <P>Tarefas Pendentes</P>
        <TarefasPendentes />
      </PageWrapper>
    </>
  );
}
