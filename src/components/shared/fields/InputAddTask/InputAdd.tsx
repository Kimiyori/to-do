import { ChangeEvent, FC, useContext, useState } from 'react';
import { InputForm } from '../../../core/Input/Input';
import { TasksContext } from '../../../../context/TasksContext';
import { v4 as uuidv4 } from 'uuid';
import { ToDoCategoriesNames } from '../../../../data/main';
import { Data } from '../../../../types/Main';
import { Button } from '../../../core/Button/Button';
import { useError } from '../../../../hooks/useError';
import { Tooltip } from '../../../core/Tooltip/Tooltip';
export const InputAddTask: FC = () => {
  const [potentialTask, setPotentialTask] = useState('');
  const { error, setError } = useError();
  const { createTask } = useContext(TasksContext);
  const clearTask = () => setPotentialTask('');
  const handleCreateTask = () => {
    if (!potentialTask.trim().length) {
      setError('Empty task is invalid');
    } else if (potentialTask.trim().length > 140) {
      setError('Task is too long');
    } else {
      const newTask: Data = {
        id: uuidv4(),
        content: potentialTask.trim(),
        status: ToDoCategoriesNames.New,
      };
      createTask(newTask);
    }
    clearTask();
  };

  return (
    <>
      {error && <Tooltip content={error} />}
      <InputForm
        placeholder={'Add your new task'}
        inputValue={potentialTask}
        actionButtons={<Button text={'Add new task'} onClick={handleCreateTask} />}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setPotentialTask(event.target.value)}
      />
    </>
  );
};
