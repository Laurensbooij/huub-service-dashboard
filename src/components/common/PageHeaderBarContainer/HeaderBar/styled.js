import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary.midnightblue};
  z-index: 10;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  text-transform: capitalize;
  margin: 6px 0 6px;
  color: ${(props) => props.theme.colors.white};
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin: 0 0 6px;
  color: ${(props) => props.theme.colors.white};
`;
