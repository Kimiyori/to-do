import { useContext, useState } from 'react';
import { Data } from '../../../types/Main';
import { DragAndDropContext } from '../../../context/DragAndDropContext';
import { TasksContext } from '../../../context/TasksContext';
import { Button } from '../../core/Button/Button';
import { styled } from 'styled-components';
import { ToDoEditItem } from './ToDoEditItem';

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
  const { removeTask } = useContext(TasksContext);

  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(data.content);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', data.id);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  const handleRemove = () => removeTask(data.id);
  const toggleFrom = () => setIsEditing(!isEditing);

  return (
    <>
      {isEditing ? (
        <ToDoEditItem data={data} toggleFrom={toggleFrom} currentTask={task} setCurrentTask={setTask} />
      ) : (
        <TaskWrapper draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <TaskText>{task}</TaskText>
          <Button text={'Edit'} onClick={toggleFrom} />
          <Button text={'Delete'} onClick={handleRemove} />
        </TaskWrapper>
      )}
    </>
  );
};
