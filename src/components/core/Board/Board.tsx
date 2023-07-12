import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  color: #bf4f74;
`;

export const Board = ({ title }: { title: string }) => {
  return <Title>{title}</Title>;
};
