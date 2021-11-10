import React, { useState } from 'react';

import {
  Container, Content, Input, Result, ResultContainer, Title
} from './styled';

const CalcRepeatWord = () => {
  const [letter, setLetter] = useState('');
  const [phrase, setPhrase] = useState('');

  function buscarVezesLetra(){
    return phrase.split(letter).length - 1;
  }
  return (
    <Container>
        <Title>Quantas vezes o caractere ocorre?</Title>
        <Content>
        <Input
          placeholder="Escreva uma frase"
          value={phrase}
          onChange={(event) => setPhrase(event.target.value)}
        />
        <Input
          maxLength={1}
          placeholder="Escreva uma letra"
          value={letter}
          onChange={(event) => setLetter(event.target.value)}
        />
        <ResultContainer>
        <span>Resultado: </span>
        {phrase && letter && <Result>{buscarVezesLetra()}</Result>}
        </ResultContainer>
        </Content>
        
    </Container>
  );
}

export default CalcRepeatWord;