import { useAuth } from '@providers/auth-provider';
import React, { useState } from 'react';

import {
  Button,
  Container, Content, Form, Input
} from './styled';

const Register = () => {
  const {signUp} = useAuth()
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function register(){
    if(nome !== '' && email !== '' && senha !== ''){
      await signUp(nome, email, senha);
    } else {
      alert('Preencha todos os campos!');
    }
    
  }
  return (
    <Container>
      <Content>
        <h1>Cadastro</h1>
        <Form>
          <Input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            type="text"
            name="nome"
            placeholder="Seu nome"
          />
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            placeholder="Qual o seu email?"
          />
          <Input
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            type="password" 
            placeholder="Digite sua senha"
          />
          <Button onClick={register} type="button">
            <span>Finalizar</span>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Register;