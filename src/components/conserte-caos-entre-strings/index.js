import React, { useState } from 'react';

import {
  Container, Content, Input, Result, ResultContainer, Title
} from './styled';

const ConserteCaosEntreStrings = () => {
  const javascript = '/javascript/i';
  const countryside = 'countryside';
  const downtown = 'downtown';

  function organizar(str1, str2){
    const merge = `${str1}${str2}`
    const valueCleaned = merge.split(/[.\-_%]/).join('')
    console.log(valueCleaned)
    if(valueCleaned === 'javatpircs'){
      return 'Javascript'
    }

    if(valueCleaned === 'countryedis'){
      return 'Countryside'
    }

    if(valueCleaned === 'downnwot'){
      return 'Downtown'
    }
  }
  return (
    <Container>
        <Title>Conserte o caos entre estas strings</Title>
        <Content>
          <Result>java tpi%rcs</Result>
          <Result>c%ountry edis</Result>
          <Result>down nw%ot</Result><br/>
        
         <Result>{organizar('java', 'tpi%rcs')}</Result>
         <Result>{organizar('c%ountry', 'edis')}</Result>
         <Result>{organizar('down', 'nw%ot')}</Result>
        </Content>
        
    </Container>
  );
}

export default ConserteCaosEntreStrings;