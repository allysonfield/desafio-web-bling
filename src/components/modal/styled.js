import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10000;
  flex-direction: column;
`;

export const Background = styled.div`
  background: #000;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ButtonClose = styled.button`
  margin-top: 5px;
  border: none;
  width: 60px;
  align-self: flex-end;
  background: transparent;
  color: #fff;
  z-index: 3000;
  cursor: pointer;
  font-size: 18px;
`;