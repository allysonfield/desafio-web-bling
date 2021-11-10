import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RepoActions } from '../../redux/stores/actions';
import { RepoSelector } from '../../selectors';

import {
  Button,
  Container, Content, Description, Divisor, Input, IssueIcon, ResultContainer, SearchContainer, Title
} from './styled';

const Repo = () => {

  const dispatch = useDispatch();
  const repo = useSelector(RepoSelector.repo);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false)

  const getError = () => {
    setError(true)
  }
  const repos = (event) => {
    dispatch(RepoActions.obter(search, getError));
    event.preventDefault();
  }

  const onChangeText = (event) => {
    setError(false)
    setSearch(event.target.value)
  }

  
  return (
    <Container>
      <Content>
        <Title>Dados do repositório</Title>
        <Divisor />
        <SearchContainer onSubmit={repos} error={error}>
          <Input
            value={search}
            onChange={onChangeText}
          />
          <Button onClick={repos} type="submit" value="Pesquisar" />
        </SearchContainer>
       {repo.name && 
       <>
        <ResultContainer>
          <Description>ID: </Description>
          <span>{repo.id}</span>
        </ResultContainer>
        <ResultContainer>
          <Description>Name: </Description>
          <span>{repo.name}</span>
        </ResultContainer>
        <ResultContainer>
          <Description>Fullname: </Description>
          <span>{repo.full_name}</span>
        </ResultContainer>
        <ResultContainer>
          <Description>Owner: </Description>
          <img
            src={repo.owner.avatar_url}
            style={{height: '20px', width: '20px', marginRight: '10px'}}
            alt={repo.name}
          />
          <span>{repo.name}</span>
        </ResultContainer>
        <ResultContainer>
        <span>{repo.stargazers_count}</span>
          <img
            src="https://img.icons8.com/ios/50/000000/star--v1.png"
            alt="stargazer"
            style={{height: '17px', width: '17px', marginLeft: '5px', marginRight: '10px'}}
          />
          <span>{repo.forks_count}</span>
          <img 
            src="https://img.icons8.com/ios-filled/50/000000/code-fork.png"
            alt="forks"
            style={{height: '17px', width: '17px', marginLeft: '5px'}}
          />
          
        </ResultContainer>
        <ResultContainer>
          <Description>Issues: </Description>
          <IssueIcon />
          <span>{repo.issues.length}</span>
          
        </ResultContainer>
        </>
       }
      </Content>
    </Container>
  );
}

export default Repo;