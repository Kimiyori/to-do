import { FC } from 'react';
import { styled } from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.color.OnBackground};
`;

type BoardProps = { title: string };
export const Board: FC<BoardProps> = ({ title }) => {
  return <Title>{title}</Title>;
};
