import { createSelector } from 'reselect'


const _task = ({
 tasks
}) => {
  return {
    tasks
  }
}

export const task = createSelector(state => state.task, _task)


