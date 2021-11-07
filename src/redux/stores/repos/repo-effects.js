import * as EffectUtility from '../../../utils/effect-utility'
import githubApi from '../../../services/github-api'
import { Endpoints } from '../../../constants'


export async function obter(repositoryName) {
  return EffectUtility.get(githubApi, Endpoints.GithubApi.Repos.replace(':repositoryName', repositoryName))
}

export async function obterIssues(repositoryName) {
  return EffectUtility.get(githubApi, Endpoints.GithubApi.Issues.replace(':repositoryName', repositoryName))
}
