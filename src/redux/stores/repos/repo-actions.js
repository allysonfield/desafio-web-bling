// import { push, goForward, goBack } from 'connected-react-router'

import * as ActionUtility from '../../../utils/action-utility'
import * as Effects from './repo-effects'

export const REQUEST_GET = 'Repos.REQUEST_GET'
export const REQUEST_GET_FINISHED = 'Repos.REQUEST_GET_FINISHED'

export const REQUEST_GET_ISSUES = 'Repos.REQUEST_GET_ISSUES'
export const REQUEST_GET_ISSUES_FINISHED = 'Reposwwww.REQUEST_GET_ISSUES_FINISHED'


export function obter(repositoryName) {
  return async (dispatch, getState) => {
    ActionUtility.createThunkEffect(dispatch, REQUEST_GET, Effects.obter, repositoryName);
  }
}

export function obterIssues(repositoryName) {
  return async (dispatch, getState) => {
    ActionUtility.createThunkEffect(dispatch, REQUEST_GET_ISSUES, Effects.obterIssues, repositoryName)
  }
}

