import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 0;
`;

export const Label = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.accent.grey};
  margin: 0 0 4px 0;
`;
