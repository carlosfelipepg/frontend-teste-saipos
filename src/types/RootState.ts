import { TarefasState } from 'app/pages/Home/tarefas/slice/types';
import { ThemeState } from 'styles/theme/slice/types';

export interface RootState {
  theme?: ThemeState;
  tarefasRepo?: TarefasState;
}
