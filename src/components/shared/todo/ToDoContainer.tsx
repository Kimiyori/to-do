import { styled } from 'styled-components';
import { DragAndDropProvider } from '../../../context/DragAndDropContext';
import { toDoCategories } from '../../../data/main';
import { ToDoList } from './ToDoList';
import { FC } from 'react';

const CategoriesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
  }
`;

export const ToDoContainer:FC = () => {
  return (
    <DragAndDropProvider>
      <CategoriesWrapper>
        {toDoCategories.map((category) => (
          <ToDoList status={category} key={category.name} />
        ))}
      </CategoriesWrapper>
    </DragAndDropProvider>
  );
};
