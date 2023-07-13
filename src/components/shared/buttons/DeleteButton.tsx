import { useContext, useReducer } from 'react';
import { TasksContext } from '../../../context/TasksContext';
import { Button } from '../../core/Button/Button';
import { Popup } from '../../core/Popup/Popup';

type TDeleteButton = {
  taskId: string;
};
export const DeleteButton = ({ taskId }: TDeleteButton) => {
  const [isActive, toggleisActive] = useReducer((isActive) => !isActive, false);
  const { removeTask } = useContext(TasksContext);
  const handleRemove = () => {
    toggleisActive();
    removeTask(taskId);
  };
  return (
    <>
      {isActive && (
        <Popup>
          <h2>{'Are you sure you want to delete this task?'}</h2>
          <Button text={'Nah...I\'m okay'} onClick={toggleisActive} />
          <Button text={'Delete'} onClick={handleRemove} />
        </Popup>
      )}
      <Button text={'Delete'} onClick={toggleisActive} />
    </>
  );
};
