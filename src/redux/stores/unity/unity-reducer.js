import { produce } from 'immer'

import baseReducer from '@utils/base-reducer'
import * as Actions from './unity-actions'

export const initialState = {
  id: null,
  nome: '',
  organizacaoId: '',
  cnpj: '',
  telefone: '',
  endereco: {
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    estado: '',
    pais: '',
  },
  gruposUnidades: [],
  usuarios: [],
}

const unityReducer = baseReducer(initialState, {
  [Actions.REQUEST_CRIAR](state, payload) {
    return produce(state, draft => {
      draft.nome = payload.nome
      draft.organizacaoId = payload.organizacaoId
      draft.cnpj = payload.cnpj
      draft.telefone = payload.telefone
      draft.endereco = payload.endereco
    })
  },
})

export default unityReducer
