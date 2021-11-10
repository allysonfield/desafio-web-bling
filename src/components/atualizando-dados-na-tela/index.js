import React, { useState } from 'react';

import {
  Container, Content, Description, Input, NameTitle, Title
} from './styled';

const AtualizandoDadosNaTela = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

 
  return (
    <Container>
        <Title>Atualizando dados na tela</Title>
        <Content>
          <NameTitle>Meu nome é {name.trim() ? name : '{nome}'}</NameTitle>
          <Description>Tenho {age > 0 ? age : '{idade}'} anos e quero ser um Blinger!</Description>
        <Input
          placeholder="Escreva seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="number"
          placeholder="Digite sua idade"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        
        </Content>
        
    </Container>
  );
}

export default AtualizandoDadosNaTela;