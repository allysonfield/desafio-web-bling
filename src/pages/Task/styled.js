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

export const Branch = styled.h1`
  color: #fff;
`;

export const Description = styled.h4`
  margin-top: -20px;
  color: #fff;
  margin-bottom: 70px;
`;

export const ButtonLogout = styled.button`
  border: none;
  background: #007CF9;
  border-radius: 5px;
  color: #fff;
  height: 50px;
  width: 120px;
  font-size: 20px;
  margin-bottom: 70px;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.div`
  background: #F7F7F7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 65px;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid lightgray;
`;

export const TaskContainer = styled.div`
  display: flex;
  background: #FFF;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgray;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`


export const TaskContainerStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-left: 30px;
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  margin-right: 10px;
`;



export const Image = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`;

export const Trash = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 40px;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  background: #F7F7F7;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0;
`;

export const InputCustom = styled.input`
  flex: 1;
  font-size: 20px;
  outline: none;
  border: none;
  padding: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 500px;
  margin-left: 30px;
  border: 0.1px solid lightgray;
  background: #fff;
  border-radius: 5px;
  margin-right: 20px;
`;


export const Close = styled.img`
  height: 15px;
  width: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  border: none;
  height: 45px;
  width: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #007CF9;
  align-self: center;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`