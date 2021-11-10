import React, { useRef, useState } from 'react';
import IconeTarefa from '@assets/images/bar-chart.png';
import IconeTrash from '@assets/images/trash-bin.png';
import IconeClose from '@assets/images/close.png';

import {
  Checkbox,
  Close,
  Container, Content, Footer, Header, Image, InputCustom, InputContainer, TaskContainer, TaskContainerStart, Title, Trash, Button, Branch, Description, ButtonLogout
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { TaskSelectors } from '@selectors';
import { TaskActions } from '@redux/stores/actions';
import { useAuth } from '@providers/auth-provider';

const Task = () => {
  const inputRef = useRef()
  const [newtask, setNewtask] = useState('');
  const Task = useSelector(TaskSelectors.task)
  const dispatch = useDispatch();
  const {signOut} = useAuth()

  function inputClean(){
    setNewtask('')
    inputRef.current.focus()
  }

  function addTask(){
    dispatch(TaskActions.criar(newtask))
    setNewtask('')
  }

  function check(id){
    dispatch(TaskActions.check(id))
  }

  function remove(id){
    dispatch(TaskActions.deleteTask(id))
  }
  return (
    <Container>
      <Branch>Todo App</Branch>
      <Description>App para gerenciamneto de tarefas do dia a dia</Description>
      <ButtonLogout onClick={signOut}>Logout</ButtonLogout>
      <Content>
        <Header>
          <Image src={IconeTarefa} alt="icone da tarefa" />
          <Title>Lista de Tarefas</Title>
        </Header>
        {Task.tasks && Task.tasks.map((item, i) => (
          <TaskContainer key={i.toString()}>
            <TaskContainerStart>
              <Checkbox value={item.checked} onChange={() => check(item.id)} />
              <Title>{item.name}</Title>
            </TaskContainerStart>
            <Trash onClick={() => remove(item.id)} src={IconeTrash}  alt="icone de lixeira"/>
        </TaskContainer>
        ))}
        <Footer>
          <InputContainer>
            <InputCustom
              value={newtask}
              onChange={(event) => setNewtask(event.target.value)}
              ref={inputRef}
              placeholder="Qual é a nova tarefa?"
              type="text"
              maxLength={45}
            />
            <Close onClick={inputClean} src={IconeClose} />
          </InputContainer>
          <Button disabled={newtask === ''} onClick={addTask} >
            Adicionar tarefa
          </Button>
        </Footer>
      </Content>
    </Container>
  );
}

export default Task;