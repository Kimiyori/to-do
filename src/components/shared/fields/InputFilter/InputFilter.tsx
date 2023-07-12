import { ChangeEvent, useContext } from 'react';
import { InputForm } from '../../../core/Input/Input';
import { TasksContext } from '../../../../context/TasksContext';
import { Button } from '../../../core/Button/Button';

export const InputFilter = () => {
  const { filterString, setFilterString } = useContext(TasksContext);

  return (
    <InputForm
      placeholder={'Filter works in real time'}
      inputValue={filterString}
      actionButtons={<Button isDisabled={true} text={'Filter tasks'} />}
      onChange={(event: ChangeEvent<HTMLInputElement>) => setFilterString(event.target.value)}
    />
  );
};
