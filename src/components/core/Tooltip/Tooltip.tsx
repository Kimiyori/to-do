import { FC } from 'react';
import { styled } from 'styled-components';

const TooltipWrapper = styled.div`
  position: relative;
`;
const TooltipTip = styled.div`
  position: absolute;
  left: 50%;
  top: -40px;
  transform: translateX(-50%);
  padding: 6px;
  color: ${(props) => props.theme.color.OnError};
  background: ${(props) => props.theme.color.Error};
  z-index: 100;
`;
type TooltipProps = { content: string };
export const Tooltip: FC<TooltipProps> = ({ content }) => {
  return (
    <TooltipWrapper>
      <TooltipTip>{content}</TooltipTip>
    </TooltipWrapper>
  );
};
