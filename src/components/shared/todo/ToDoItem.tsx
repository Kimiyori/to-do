import { useContext, useReducer, useState } from 'react';
import { Data } from '../../../types/Main';
import { DragAndDropContext } from '../../../context/DragAndDropContext';
import { Button } from '../../core/Button/Button';
import { styled } from 'styled-components';
import { ToDoEditItem } from './ToDoEditItem';
import { DeleteButton } from '../buttons/DeleteButton';

type TToDoItem = {
  data: Data;
};
const TaskWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid #f3a39c;
  margin: 0 1rem 1rem;
  &:hover {
    background: #ffcccc7d;
  }
`;
const TaskText = styled.p`
  padding: 0.5rem;
  flex-grow: 2;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
`;
export const ToDoItem = ({ data }: TToDoItem) => {
  const { handleDragging } = useContext(DragAndDropContext);

  const [isEditing, toggleEditing] = useReducer((isEditing) => !isEditing, false);
  const [task, setTask] = useState(data.content);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', data.id);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);

  return (
    <>
      {isEditing ? (
        <ToDoEditItem data={data} toggleFrom={toggleEditing} currentTask={task} setCurrentTask={setTask} />
      ) : (
        <TaskWrapper draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <TaskText>{task}</TaskText>
          <Button text={'Edit'} onClick={toggleEditing} />
          <DeleteButton taskId={data.id} />
        </TaskWrapper>
      )}
    </>
  );
};
