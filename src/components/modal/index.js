
import React, { useEffect, useRef } from 'react';

import {
  Background,
  Container,
} from './styled';

const Modal = ({show, onBackdropPress, children}) => {
  const wrapperRef = useRef(null);
  const useOutsideAlerter = async (ref) => {

    useEffect(() => {
      async function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log('backdrop')
          onBackdropPress && onBackdropPress()
        }
      }
      document.addEventListener("mousedown",  handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

  }

  useOutsideAlerter(wrapperRef);
  return (
    show &&
    <>
    <Container >
        <div ref={wrapperRef}>
          {children}
        </div>
        
    </Container>
    <Background />
    </>
  );
}

export default Modal;
