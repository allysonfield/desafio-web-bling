import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  background: #000;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  height: 100%;
`;
