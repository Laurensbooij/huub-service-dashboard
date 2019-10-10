import styled from 'styled-componentsexport ';

export const Container = styled.div`
  margin: 30px 16px 0;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0 10px 0 0;
  text-transform: capitalize;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.accent.lightgrey};

  svg {
    transform: scale(0.8);
  }
`;
