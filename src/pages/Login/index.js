import { useAuth } from '@providers/auth-provider';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import {
  Button,
  ButtonRegister,
  Container, Content, Form, Input
} from './styled';

const Login = () => {
  const {signIn} = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function register(){
    if(email !== '' && senha !== ''){
      await signIn(email, senha);
    } else {
      alert('Preencha todos os campos!');
    }
    
  }
  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <Form>
          
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
            <span>Entrar</span>
          </Button>
          <ButtonRegister onClick={() => history.push('/signup')} type="button">
            <span>Cadastrar</span>
          </ButtonRegister>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;