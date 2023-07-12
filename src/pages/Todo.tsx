import styled from 'styled-components';
import { TasksProvider } from '../context/TasksContext';
import { Board } from '../components/core/Board/Board';
import { InputAdd } from '../components/shared/fields/InputAddTask/InputAdd';
import { ToDoContainer } from '../components/shared/todo/ToDoContainer';
import { InputFilter } from '../components/shared/fields/InputFilter/InputFilter';

const MainBackground = styled.main`
  background: linear-gradient(to right bottom, #3cde90, #81da78, #acd569, #cece66, #e9c76c);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (max-width: 992px) {
    height: 100%;
  }
`;
export const ToDo = () => {
  return (
    <>
      <TasksProvider>
        <MainBackground>
          <Board title={'To Do List'} />
          <div>
            <InputAdd />
            <InputFilter />
          </div>
          <ToDoContainer />
        </MainBackground>
      </TasksProvider>
    </>
  );
};
