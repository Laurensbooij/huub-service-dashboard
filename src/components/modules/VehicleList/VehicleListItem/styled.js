import styled from 'styled-components';

export const VehicleName = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary.midnightblue};
  margin: 0 0 10px 0;
`;

export const BatteryIconsContainer = styled.div`
  display: flex;
`;
