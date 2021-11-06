import { produce } from 'immer'

import baseReducer from '@utils/base-reducer'
import * as Actions from './task-actions'
import { getFileExtension, getFileNameWithoutExtension } from '@utils/file-utility'
import { indexOfId } from '@utils/object-utility'
import { DocumentoStatus } from '@constants'

export const initialState = {
  id: null,
  nome: '',
  descricao: '',
  habilitarTrainingCheck: false,
  permitirAcessoGaleria: false,
  habilitarAtividade: true,
  necessidadeCheckinCheckout: false,
  permitirGamification: false,
  exibirPontuacaoFinalAplicativo: false,
  exibirPesoPerguntaAplicativo: false,
  documentos: [],
}

const taskReducer = baseReducer(initialState, {
  [Actions.REQUEST_GET_FINISHED](state, { payload }) {
    return produce(state, draft => {
      draft.id = payload.id
      draft.nome = payload.nome
      draft.descricao = payload.descricao
      draft.habilitarTrainingCheck = payload.habilitarTrainingCheck
      draft.permitirAcessoGaleria = payload.permitirAcessoGaleria
      draft.habilitarAtividade = payload.habilitarAtividade
      draft.necessidadeCheckinCheckout = payload.necessidadeCheckinCheckout
      draft.permitirGamification = payload.permitirGamification
      draft.exibirPontuacaoFinalAplicativo = payload.exibirPontuacaoFinalAplicativo
      draft.exibirPesoPerguntaAplicativo = payload.exibirPesoPerguntaAplicativo

      draft.documentos = payload.taskDocumentos
        .filter(documento => documento.status === DocumentoStatus.Ativo)
        .map(({ id, nomeArquivoOriginal, tamanhoMB, nomeArquivo }) => {
          return {
            id,
            arquivo: getFileNameWithoutExtension(nomeArquivoOriginal),
            extensao: getFileExtension(nomeArquivoOriginal),
            tamanho: `${tamanhoMB} MB`,
            uri: nomeArquivo,
            anexado: true,
            anexando: false,
            progresso: 0,
            erro: false,
            mensagemErro: null,
          }
        })
    })
  },
  [Actions.SET_DATA](state, { payload }) {
    return produce(state, draft => {
      draft.nome = payload.nome
      draft.descricao = payload.descricao
      draft.habilitarTrainingCheck = payload.habilitarTrainingCheck
      draft.permitirAcessoGaleria = payload.permitirAcessoGaleria
      draft.habilitarAtividade = payload.habilitarAtividade
      draft.necessidadeCheckinCheckout = payload.necessidadeCheckinCheckout
      draft.permitirGamification = payload.permitirGamification
      draft.exibirPontuacaoFinalAplicativo = payload.exibirPontuacaoFinalAplicativo
      draft.exibirPesoPerguntaAplicativo = payload.exibirPesoPerguntaAplicativo
    })
  },
  [Actions.REQUEST_ATUALIZAR_DADOS_FINISHED](state, { payload }) {
    return produce(state, draft => {
      draft.nome = payload.nome
      draft.descricao = payload.descricao
      draft.habilitarTrainingCheck = payload.habilitarTrainingCheck
      draft.permitirAcessoGaleria = payload.permitirAcessoGaleria
      draft.habilitarAtividade = payload.habilitarAtividade
      draft.necessidadeCheckinCheckout = payload.necessidadeCheckinCheckout
      draft.permitirGamification = payload.permitirGamification
      draft.exibirPontuacaoFinalAplicativo = payload.exibirPontuacaoFinalAplicativo
      draft.exibirPesoPerguntaAplicativo = payload.exibirPesoPerguntaAplicativo
    })
  },
  [Actions.REQUEST_UPLOAD_DOCUMENTO](state, { payload }) {
    return produce(state, draft => {
      draft.documentos.push(payload)
    })
  },
  [Actions.REQUEST_UPLOAD_DOCUMENTO_FINISHED](state, { payload: { id, newId, uri }, error, meta }) {
    return produce(state, draft => {
      const index = indexOfId(state.documentos, id)

      draft.documentos[index].id = newId
      draft.documentos[index].uri = uri
      draft.documentos[index].anexado = true
      draft.documentos[index].anexando = false
      draft.documentos[index].mensagemErro = null
      draft.documentos[index].progresso = 0
    })
  },
  [Actions.REQUEST_UPLOAD_DOCUMENTO_SET_PROGRESS](state, { payload: { id, progresso } }) {
    return produce(state, draft => {
      const index = indexOfId(state.documentos, id)

      draft.documentos[index].progresso = progresso
    })
  },
  [Actions.REQUEST_UPLOAD_DOCUMENTO_ERROR](state, { payload: { id }, meta: { mensagemErro } }) {
    return produce(state, draft => {
      const index = indexOfId(state.documentos, id)

      draft.documentos[index].anexado = false
      draft.documentos[index].anexando = false
      draft.documentos[index].erro = true
      draft.documentos[index].mensagemErro = mensagemErro
      draft.documentos[index].progresso = 0
    })
  },
})

export default taskReducer
