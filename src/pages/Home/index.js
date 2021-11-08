import CalcRepeatWord from '@components/calculo-da-letra';
import Modal from '@components/modal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RepoActions } from '../../redux/stores/actions';
import { RepoSelector } from '../../selectors';

import {
  Container, Content
} from './styled';

const Home = () => {
  const [modal1, setModal1] = useState(true);

  
  
  return (
    <Container>
      <Content>
        <h3>Quantas vezes o caractere ocorre</h3>
      </Content>
      <Content>
        <h3>Mescle 2 arrays com valores duplicados.</h3>
      </Content>
      <Content>
        <h3>Conserte o caos entre estas strings.</h3>
      </Content>
      <Content>
        <h3>Calcule o tempo em dias.</h3>
      </Content>
      <Content>
        <h3>Atualizando dados na tela</h3>
      </Content>
      <Content>
        <h3>Dados do repositório do Github</h3>
      </Content>
      <Content>
        <h3>Lista de Tarefas</h3>
      </Content>
      <Modal
        show={modal1}
        children={
          <CalcRepeatWord />
        }
      />
    </Container>
  );
}

export default Home;