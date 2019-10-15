import styled from 'styled-components';

export const HuubSpotTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary.midnightblue};
  margin: 0 0 3px 0;
`;

export const HuubSpotCity = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.accent.grey};
  margin: 0;
`;
