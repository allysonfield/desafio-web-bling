import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #6A0CE4;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 85%;
  background: grey;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
  background: #F7F7F7;
  border-radius: 5px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 5px;
  width: 500px;
  height: 50px;
  padding: 0 10px;
  margin-bottom: 20px;
  font-size: 20px;
  border: 1px solid lightgray;
  &:focus {
    outline: none;
    border: 2px solid #6A0CE4
  }
`;

export const Button = styled.button`
  border: none;
  width: 520px;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #6A0CE4;
  align-self: center;
  border-radius: 5px;
  font-size: 28px;
  font-weight: bolder;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

export const ButtonRegister = styled.button`
  border: none;
  background: transparent;
  align-self: flex-end;
  font-size: 15px;
  font-weight: bolder;
  color: black;
  cursor: pointer;
  margin-bottom: 10px;
`