import { ChangeEvent } from 'react';
import { styled } from 'styled-components';

type TInput = {
  inputValue: string;
  actionButtons?: JSX.Element;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = styled.input`
  padding: 0.5rem;
  flex-grow: 2;
  outline: none;
  border: none;
`;
const InputWrapper = styled.div`
  display: flex;
  background: #fff;
  border: 1px solid #f3a39c;
  margin: 0 1rem 1rem;
  &:hover {
    background: #f6c7c7;
  }
`;
export const InputForm = ({ inputValue, actionButtons, onChange, placeholder }: TInput) => {
  return (
    <>
      <InputWrapper>
        <Input placeholder={placeholder} onChange={onChange} value={inputValue} type="text" />
        {actionButtons}
      </InputWrapper>
    </>
  );
};
