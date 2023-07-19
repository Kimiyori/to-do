import { FC, useReducer, useState } from 'react';
import { Data } from '../../../types/Main';
import { Button } from '../../core/Button/Button';
import { styled } from 'styled-components';
import { ToDoEditItem } from './ToDoEditItem';
import { DeleteButton } from '../buttons/DeleteButton';
import { TextArea } from '../../core/TextArea/TextArea';
import { ToDoDragTask } from './ToDoTaskDnD';
import { ToDoDropdown } from './ToDoDropdown';
import { devices } from '../../../data/breakpoints';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const TaskWrapper = styled.div`
  background: ${(props) => props.theme.color.Primary};
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid ${(props) => props.theme.color.Outline};
  margin: 0 1rem 1rem;
`;
type ToDoItemProps = {
  data: Data;
};
export const ToDoItem: FC<ToDoItemProps> = ({ data }) => {
  const [isEditing, toggleEditing] = useReducer((isEditing) => !isEditing, false);
  const [task, setTask] = useState(data.content);
  const isDesktop = useMediaQuery(devices.lg);
  return (
    <>
      {isEditing ? (
        <ToDoEditItem data={data} toggleFrom={toggleEditing} currentTask={task} setCurrentTask={setTask} />
      ) : (
        <TaskWrapper>
          <TextArea text={task} disabled={true} />
          <Button text={'Edit'} onClick={toggleEditing} />
          <DeleteButton taskId={data.id} />
          {isDesktop ? <ToDoDragTask taskId={data.id} /> : <ToDoDropdown taskId={data.id} />}
        </TaskWrapper>
      )}
    </>
  );
};
