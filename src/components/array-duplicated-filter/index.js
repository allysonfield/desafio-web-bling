import React, { useState } from 'react';

import {
  ArrayValuesContainer,
  Container, Content, Input, Result, ResultContainer, Title
} from './styled';

const ArrayDuplicatedFilter = () => {
  const [array1, setArray1] = useState([""]);
  const [array2, setArray2] = useState([""])

  function incrementArray1(){
    const arrayAux = array1;
    arrayAux.push('')
    setArray1([...arrayAux])
  }

  function incrementArray2(){
    const arrayAux = array2;
    arrayAux.push('')
    setArray2([...arrayAux])
  }

  function changeValueArra1(value, i){
    const arrayAux = array1; 
    arrayAux[i] = value;
    setArray1([...arrayAux])
  }

  function changeValueArra2(value, i){
    const arrayAux = array2; 
    arrayAux[i] = value;
    setArray2([...arrayAux])
  }

  function result(){
    const merge = array1.concat(array2);
    
    const mergeFiltered = merge.filter(
      (s1, pos, arr) => arr.findIndex((s2) => s2 === s1) === pos
      );
    return mergeFiltered
  }
  return (
    <Container>
        <Title>Mescle 2 arrays com valores duplicados</Title>
        
        <Content>
        <div style={{marginBottom: '10px'}}>
          <span style={{marginRight: '20px'}}>Quantidade de itens Array1</span>
          <button onClick={incrementArray1}>+</button>
          <span> {array1.length}</span>
        </div>
        <div style={{marginBottom: '10px'}}>
          <span style={{marginRight: '20px'}}>Quantidade de itens Array2</span>
          <button onClick={incrementArray2}>+</button>
          <span> {array2.length}</span>
        </div>
        <ArrayValuesContainer>
          {array1.map((item, i) => (
          <Input
            key={i.toString()}
            value={item}
            onChange={(event) => changeValueArra1(event.target.value, i)}
            maxLength={1}
          />
          ))}
        </ArrayValuesContainer>

        <ArrayValuesContainer>
          {array2.map((item, i) => (
          <Input
            key={i.toString()}
            value={item}
            onChange={(event) => changeValueArra2(event.target.value, i)}
            maxLength={1}
          />
          ))}
        </ArrayValuesContainer>
        <ResultContainer>
        <span>Resultado: </span>
        {array1 && array2 && 
          result().map((item) => (
            <Result key={item}>{item}</Result>
          ))
        }
        </ResultContainer>
        </Content>
        
    </Container>
  );
}

export default ArrayDuplicatedFilter;