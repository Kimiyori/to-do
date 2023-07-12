import { ChangeEvent, Dispatch, SetStateAction, useContext } from 'react';
import { Data } from '../../../types/Main';
import { TasksContext } from '../../../context/TasksContext';
import { InputForm } from '../../core/Input/Input';
import { Button } from '../../core/Button/Button';

type TToDoEditItem = {
  data: Data;
  toggleFrom: () => void;
  currentTask: string;
  setCurrentTask: Dispatch<SetStateAction<string>>;
};

export const ToDoEditItem = ({ data, toggleFrom, currentTask, setCurrentTask }: TToDoEditItem) => {
  const { removeTask, updateTask } = useContext(TasksContext);
  const handleCancel = () => {
    setCurrentTask(data.content);
    toggleFrom();
  };
  const handleUpdate = () => {
    currentTask ? updateTask(data.id, { content: currentTask }) : removeTask(data.id);
    toggleFrom();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(event.target.value);
  };

  return (
    <>
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
