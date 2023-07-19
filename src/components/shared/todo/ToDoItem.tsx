import { FC, useContext, useReducer, useState } from 'react';
import { Data } from '../../../types/Main';
import { DragAndDropContext } from '../../../context/DragAndDropContext';
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
  const { handleDragging } = useContext(DragAndDropContext);

  const [isEditing, toggleEditing] = useReducer((isEditing) => !isEditing, false);
  const [task, setTask] = useState(data.content);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', data.id);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  const isDesktop = useMediaQuery(devices.lg);
  return (
    <>
      {isEditing ? (
        <ToDoEditItem data={data} toggleFrom={toggleEditing} currentTask={task} setCurrentTask={setTask} />
      ) : (
        <TaskWrapper draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <TextArea text={task} disabled={true} />
          <Button text={'Edit'} onClick={toggleEditing} />
          <DeleteButton taskId={data.id} />
          {isDesktop ? (
            <ToDoDragTask taskId={data.id} handleDragging={handleDragging} />
          ) : (
            <ToDoDropdown taskId={data.id} />
          )}
        </TaskWrapper>
      )}
    </>
  );
};
