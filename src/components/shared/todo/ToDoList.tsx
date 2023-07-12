import styled from 'styled-components';
import { DragEvent, useContext } from 'react';
import { TasksContext } from '../../../context/TasksContext';
import { DragAndDropContext } from '../../../context/DragAndDropContext';
import { TtoDoCategories } from '../../../types/Main';
import { ToDoItem } from './ToDoItem';

type TToDoList = {
  status: TtoDoCategories;
};
const Container = styled.div<{ $bgColor: string }>`
  width: 100%;
  min-height: 400px;
  text-align: center;
  background: linear-gradient(0deg, rgba(34, 195, 154, 0) 0%, rgba(${(props) => props.$bgColor}, 0.5) 100%);
  @media (min-width: 992px) {
    margin: 0 4rem 0 4rem;
  }
`;

export const ToDoList = ({ status }: TToDoList) => {
  const { todosFiltered, updateTask } = useContext(TasksContext);
  const { handleDragging } = useContext(DragAndDropContext);
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    updateTask(id, { status: status.name });
    handleDragging(false);
  };
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <Container $bgColor={status.bgColor} onDragOver={handleDragOver} onDrop={handleDrop}>
      <h3>{status.name}</h3>
      <hr />
      <div>{todosFiltered.map((item) => status.name === item.status && <ToDoItem data={item} key={item.id} />)}</div>
    </Container>
  );
};
