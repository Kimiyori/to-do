import { MouseEventHandler } from 'react';
import { styled } from 'styled-components';

type TButton = {
  text: string;
  onClick?: (event?: MouseEventHandler<HTMLButtonElement>) => void;
  isDisabled?: boolean;
};

const ButtonElement = styled.button`
  padding: 0.5rem;
  background-color: #ff6464;
  cursor: pointer;
  color: #fff;
  border: 1px solid #f3a39c;
  &:hover {
    background: #ef1e1e;
  }
  &:disabled {
    background-color: #b15151;
    color: #c5c5c5;
    cursor: auto;
  }
`;
export const Button = ({ text, onClick, isDisabled = false }: TButton) => {
  return (
    <ButtonElement disabled={isDisabled} onClick={() => onClick && onClick()}>
      {text}
    </ButtonElement>
  );
};
