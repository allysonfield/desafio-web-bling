import { FormataStringData } from '@utils/format-date-american';
import { maskDate } from '@utils/masks';
import React, { useState } from 'react';

import {
  Container, Content, Input, Result, Title
} from './styled';
const dateRegex =
/(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/
const CalculeTempoEmDias = () => {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');

  function onChangeText(value){
    return maskDate(value)
  }

  function calcularDiferenca(dataInicio, dataFinal){
    if(dataInicio.match(dateRegex) && dataFinal.match(dateRegex)){
      const dateSubtrai = 
      new Date(FormataStringData(dataInicio)).getTime() - new Date(FormataStringData(dataFinal)).getTime();
      const dias = Math.ceil(dateSubtrai / (1000 * 3600 * 24));

      return dias
    }
  }

  return (
    <Container>
        <Title>Calcule o tempo em dias.</Title>
        <Content>
          <div>
            <label>Data 1 </label>
            <Input
              value={data1}
              placeholder="Data inicial"
              onChange={(event) => setData1(onChangeText(event.target.value))}
              type="text"
            />
          </div>
          <div>
            <label>Data 2 </label>
            <Input
              value={data2}
              placeholder="Data final"
              onChange={(event) => setData2(onChangeText(event.target.value))}
              type="text"
            />
          </div>
        
         <Result>{calcularDiferenca(data1, data2)}</Result>
        </Content>
        
    </Container>
  );
}

export default CalculeTempoEmDias;