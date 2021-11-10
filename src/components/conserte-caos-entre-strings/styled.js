import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  height: 300px;
  width: 610px;
  border-radius: 5px;
`;

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  text-align: center;
  margin-bottom: 10px;
  width: 300px;
`;

export const ResultContainer = styled.div``;

export const Result = styled.span``;