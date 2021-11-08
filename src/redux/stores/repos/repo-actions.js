// import { push, goForward, goBack } from 'connected-react-router'

import github_api from '@services/github-api'
import * as ActionUtility from '@utils/action-utility'

export const REQUEST_GET = 'Repo.REQUEST_GET'
export const REQUEST_GET_FINISHED = 'Repos.REQUEST_GET_FINISHED'

export const REQUEST_GET_ISSUES = 'Repo.REQUEST_GET_ISSUES'
export const REQUEST_GET_ISSUES_FINISHED = 'Repo.REQUEST_GET_ISSUES_FINISHED'


export function obter(repositoryName, error) {
  return async (dispatch, getState) => {

    dispatch(ActionUtility.createAction(REQUEST_GET))

    try {
      const response = await github_api.get(`/repos/${repositoryName}`);
      await dispatch(ActionUtility.createAction(REQUEST_GET_FINISHED, response.data))

      dispatch(obterIssues(repositoryName));

      return { response: response.data, isError: false }
    } catch (err) {
      error()
    }

    
  }
}

export function obterIssues(repositoryName) {
  return async (dispatch, getState) => {

    dispatch(ActionUtility.createAction(REQUEST_GET_ISSUES));

    const response = await github_api.get(`/repos/${repositoryName}/issues`);

    dispatch(ActionUtility.createAction(REQUEST_GET_ISSUES_FINISHED, response.data));

    return { response: response.data, isError: false }
  }
}

