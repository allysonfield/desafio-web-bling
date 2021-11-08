import styled, { css } from 'styled-components';

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

export const Title = styled.h1`

`;

export const Divisor = styled.div`
  background-color: lightgray;
  height: 1px;
  width: 73%;
  align-self: center;
  margin-bottom: 20px;
`;

export const SearchContainer = styled.form`
  display: flex;
  width: 73%;
  height: 30px;
  margin-bottom: 20px;
  ${({error}) => error && css`
    border: 2px solid red;
    border-radius: 4px;
    padding: 0;
  `}
`;

export const Input = styled.input`
  flex: 1;
  text-align: left;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid gray;

  &:focus {
    border: 2px solid red;
  }
`;

export const Button = styled.input`
  width: 100px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #000;
  cursor: pointer;
  border: 1px solid gray;

  &:focus {
    border: 2px solid lightblue;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  width: 70%;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #000;
  padding: 1px 20px;
`;

export const Description = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;


export const IssueIcon = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 15px;
  width: 15px;
  border-radius: 7.5px;
  margin-right: 0.375rem;
  cursor: pointer;
  border: 1px solid #000;
  margin-right: 5px;
 
    &::after {
      content: '';
      position: absolute;
      background-color: #000;
      height: 5px;
      width: 5px;
      border-radius: 2.5px;
    }

    
`;