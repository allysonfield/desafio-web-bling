import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RepoActions } from '../../redux/stores/actions';
import { RepoSelector } from '../../selectors';

// import {
//   Container
// } from './styled';

const Repo = () => {

  const dispatch = useDispatch();
  const repo = useSelector(RepoSelector.repo);

  const repos = async () => {
    await dispatch(RepoActions.obter('anchetaWern/React-Native-Food-Delivery'));
  }

  useEffect(() => {
    repos()
  }, [])
  return (
    <div>
      <h1>Repo</h1>
    </div>
  );
}

export default Repo;