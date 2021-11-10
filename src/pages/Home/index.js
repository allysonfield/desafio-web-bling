import ArrayDuplicatedFilter from '@components/array-duplicated-filter';
import AtualizandoDadosNaTela from '@components/atualizando-dados-na-tela';
import CalculeTempoEmDias from '@components/calcule-tempo-dias';
import CalcRepeatWord from '@components/calculo-da-letra';
import ConserteCaosEntreStrings from '@components/conserte-caos-entre-strings';
import Modal from '@components/modal';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import {
  Container,
  Content
} from './styled';

const Home = () => {
  const history = useHistory();
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  
  return (
    <Container>
      <Content onClick={() => setModal1(true)}>
        <h3>Quantas vezes o caractere ocorre</h3>
      </Content>
      <Content onClick={() => setModal2(true)}>
        <h3>Mescle 2 arrays com valores duplicados.</h3>
      </Content>
      <Content onClick={() => setModal3(true)}>
        <h3>Conserte o caos entre estas strings.</h3>
      </Content>
      <Content onClick={() => setModal4(true)}>
        <h3>Calcule o tempo em dias.</h3>
      </Content>
      <Content onClick={() => setModal5(true)}>
        <h3>Atualizando dados na tela</h3>
      </Content>
      <Content onClick={() => history.push('/repo')}>
        <h3>Dados do repositório do Github</h3>
      </Content>
      <Content onClick={() => history.push('/task')}>
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

      <Modal
        onBackdropPress={() => setModal3(false)}
        onClose={() => setModal3(false)}
        show={modal3}
        children={
          <ConserteCaosEntreStrings />
        }
      />

      <Modal
        onBackdropPress={() => setModal4(false)}
        onClose={() => setModal4(false)}
        show={modal4}
        children={
          <CalculeTempoEmDias />
        }
      />

      <Modal
        onBackdropPress={() => setModal5(false)}
        onClose={() => setModal5(false)}
        show={modal5}
        children={
          <AtualizandoDadosNaTela />
        }
      />
    </Container>
  );
}

export default Home;