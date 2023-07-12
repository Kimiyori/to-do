import { styled } from 'styled-components';
import { DragAndDropProvider } from '../../../context/DragAndDropContext';
import { toDoCategories } from '../../../data/main';
import { ToDoList } from './ToDoList';

const CategoriesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ToDoContainer = () => {
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
