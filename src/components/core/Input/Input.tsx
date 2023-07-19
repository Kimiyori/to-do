import { ChangeEvent, FC } from 'react';
import { styled } from 'styled-components';
import { TextArea } from '../TextArea/TextArea';

type InputProps = {
  inputValue: string;
  actionButtons?: JSX.Element;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

const InputWrapper = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.Outline};
  margin: 0 1rem 1rem;
`;
export const InputForm: FC<InputProps> = ({ inputValue, actionButtons, onChange, placeholder }) => {
  return (
    <>
      <InputWrapper>
        <TextArea placeholder={placeholder} onChange={onChange} text={inputValue} />
        {actionButtons}
      </InputWrapper>
    </>
  );
};
