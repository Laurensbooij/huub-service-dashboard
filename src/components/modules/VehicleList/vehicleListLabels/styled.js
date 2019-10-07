import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin: 25px 0 8px;
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${(props) => props.theme.colors.accent.grey};

  &:not(:last-child) {
    margin-right: 30px;
  }

  & :not(:first-child) {
    min-width: 53px;
  }

  &:nth-child(1) {
    width: 97px;
  }
`;
