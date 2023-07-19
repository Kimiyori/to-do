import { styled } from 'styled-components';
import DragDrop from '../../../assets/DragDrop.svg';
import { FC } from 'react';

const StyledDragText = styled.img`
  border-left: 1px solid ${(props) => props.theme.color.Outline};
  cursor: pointer;
`;
type ToDoDragTaskProps = {
  taskId: string;
  handleDragging: (drag: boolean) => void;
};
export const ToDoDragTask: FC<ToDoDragTaskProps> = ({ taskId, handleDragging }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', taskId);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  return (
    <StyledDragText src={DragDrop} alt={'DragDrop'} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
  );
};
