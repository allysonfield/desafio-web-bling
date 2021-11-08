import ArrayDuplicatedFilter from '@components/array-duplicated-filter';
import CalcRepeatWord from '@components/calculo-da-letra';
import Modal from '@components/modal';
import React, { useState } from 'react';

import {
  Container,
  Content
} from './styled';

const Home = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  
  return (
    <Container>
      <Content onClick={() => setModal1(true)}>
        <h3>Quantas vezes o caractere ocorre</h3>
      </Content>
      <Content onClick={() => setModal2(true)}>
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
        onBackdropPress={() => setModal1(false)}
        onClose={() => setModal1(false)}
        show={modal1}
        children={
          <CalcRepeatWord />
        }
      />

      <Modal
        onBackdropPress={() => setModal2(false)}
        onClose={() => setModal2(false)}
        show={modal2}
        children={
          <ArrayDuplicatedFilter />
        }
      />
    </Container>
  );
}

export default Home;