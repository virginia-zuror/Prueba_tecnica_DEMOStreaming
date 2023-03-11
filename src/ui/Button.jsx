import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${({ variant }) =>
    variant === 'contained' ? '#2d3331' : 'transparent'};
  border: none;
  width: fit-content;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
  font-weight: 500;
  color: ${({ fontcolor }) =>
    fontcolor === 'black' ? 'rgb(0, 0, 0)' : 'rgb(250, 250, 250)'};
  letter-spacing: 1px;
  outline: none;
  padding: 0.5rem 1.5rem;
  transition: 0.5s ease-in-out;
`;

const Button = ({ text, action, variant, fontcolor }) => {
  return (
    <ButtonStyled onClick={action} variant={variant} fontcolor={fontcolor}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
