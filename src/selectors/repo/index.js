import { createSelector } from 'reselect'


const _repo = ({
  id,
  name,
  full_name,
  owner,
  description,
  stargazers_count,
  forks_count,
  open_issues_count,
  issues_url,
  issues,
}) => {
  return {
    id,
    name,
    full_name,
    owner,
    description,
    stargazers_count,
    forks_count,
    open_issues_count,
    issues_url,
    issues,
  }
}

export const repo = createSelector(state => state.repo, _repo)


