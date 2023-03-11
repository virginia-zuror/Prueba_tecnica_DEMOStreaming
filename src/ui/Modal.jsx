import styled from 'styled-components';

import Button from './Button';

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 50%;
  height: 70%;
  position: relative;
  background-color: #ffffff;
  border: 2px black solid;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  button {
    position: absolute;
    top: 1%;
    right: 1%;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`;

const Modal = ({ action, content }) => {
  return (
    <Overlay>
      <ModalContent>
        <Button text="X" variant="contained" action={action} />
        {content}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
