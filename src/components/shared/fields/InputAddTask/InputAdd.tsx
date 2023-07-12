import { ChangeEvent, useContext, useState } from 'react';
import { InputForm } from '../../../core/Input/Input';
import { TasksContext } from '../../../../context/TasksContext';
import { v4 as uuidv4 } from 'uuid';
import { ToDoCategoriesNames } from '../../../../data/main';
import { Data } from '../../../../types/Main';
import { Button } from '../../../core/Button/Button';
export const InputAdd = () => {
  const [potentialTask, setPotentialTask] = useState('');
  const { createTask } = useContext(TasksContext);
  const handleCreateTask = () => {
    if (!potentialTask) {
      return;
    }
    const newTask: Data = {
      id: uuidv4(),
      content: potentialTask,
      status: ToDoCategoriesNames.New,
    };
    createTask(newTask);
    setPotentialTask('');
  };

  return (
    <InputForm
      placeholder={'Add your new task'}
      inputValue={potentialTask}
      actionButtons={<Button text={'Add new task'} onClick={handleCreateTask} />}
      onChange={(event: ChangeEvent<HTMLInputElement>) => setPotentialTask(event.target.value)}
    />
  );
};
