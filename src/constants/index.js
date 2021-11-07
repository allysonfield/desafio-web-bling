const Routes = {
  Home: '/home',
  SignOut: '/signout',
  SignIn: '/signin',
  Repo: '/repo',
  AuthenticationCallback: '/auth/callback',
  Task: {
    New: '/task/new',
    Home: '/task/:id',
  },
}


const Endpoints = {
  LoginApi: {
    entrar: '/'
  },
  GithubApi: {
    Repos: '/repos/:repositoryName',
    Issues: '/repos/:repositoryName/issues'
  },
  TasksAPI: {
    Task: {
      Obter: '/tasks/:taskId',
      Criar: '/tasks',
      AtualizarDados: '/tasks/:taskId/dados',
      Deletar: '/tasks/:taskId/:motivo',
    },
    Usuario: {
      Criar: '/usuarios',
      Obter: '/usuarios',
      Importar: '/usuarios/importar',
      ObterTemplate: '/usuarios/template',
    },
  },
}

const Notification = {
  Error: 1,
  Warning: 2,
  Success: 3,
}

const DocumentoStatus = {
  Excluido: 0,
  Ativo: 1,
  Desativado: 2,
}

const MessageModalType = {
  Success: 1,
  Warning: 2,
  Error: 3,
}

const MessageModalTypeString = {
  Success: 'Success',
  Warning: 'Warning',
  Error: 'Error',
}



const PerguntaStatus = {
  Excluido: 0,
  Ativo: 1,
  Desativado: 2,
}



export { Routes, Endpoints, Notification, DocumentoStatus, MessageModalType, PerguntaStatus, MessageModalTypeString }