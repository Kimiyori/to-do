import { ChangeEvent, Dispatch, FC, SetStateAction, useContext } from 'react';
import { Data } from '../../../types/Main';
import { TasksContext } from '../../../context/TasksContext';
import { InputForm } from '../../core/Input/Input';
import { Button } from '../../core/Button/Button';
import { Tooltip } from '../../core/Tooltip/Tooltip';
import { useError } from '../../../hooks/useError';

type ToDoEditItemProps = {
  data: Data;
  toggleFrom: () => void;
  currentTask: string;
  setCurrentTask: Dispatch<SetStateAction<string>>;
};

export const ToDoEditItem: FC<ToDoEditItemProps> = ({ data, toggleFrom, currentTask, setCurrentTask }) => {
  const { updateTask } = useContext(TasksContext);
  const handleCancel = () => {
    setCurrentTask(data.content);
    toggleFrom();
  };
  const { error, setError } = useError();
  const handleUpdate = () => {
    if (!currentTask.trim().length) {
      setError('Empty task is invalid');
    } else if (currentTask.trim().length > 140) {
      setError('Task is too long');
    } else {
      updateTask(data.id, { content: currentTask.trim() });
      toggleFrom();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTask(event.target.value);
  };

  return (
    <>
      {error && <Tooltip content={error} />}
      <InputForm
        inputValue={currentTask}
        actionButtons={
          <>
            <Button text={'Save'} onClick={handleUpdate} />
            <Button text={'Cancel'} onClick={handleCancel} />
          </>
        }
        onChange={handleChange}
      />
    </>
  );
};
