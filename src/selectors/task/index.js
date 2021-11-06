import { createSelector } from 'reselect'


const _task = ({
  nome,
  descricao,
  habilitarTrainingCheck,
  permitirAcessoGaleria,
  habilitarAtividade,
  necessidadeCheckinCheckout,
  permitirGamification,
  exibirPontuacaoFinalAplicativo,
  exibirPesoPerguntaAplicativo,
}) => {
  return {
    nome,
    descricao,
    habilitarTrainingCheck,
    permitirAcessoGaleria,
    habilitarAtividade,
    necessidadeCheckinCheckout,
    permitirGamification,
    exibirPontuacaoFinalAplicativo,
    exibirPesoPerguntaAplicativo,
  }
}

export const task = createSelector(state => state.task, _task)


