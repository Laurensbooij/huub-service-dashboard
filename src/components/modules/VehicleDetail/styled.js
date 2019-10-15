import styled from 'styled-components';

import LicensePlate from 'common/LicensePlate';

export const VehicleName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  min-width: 97px;
  color: ${(props) => props.theme.colors.primary.midnightblue};
  margin: 8px 0 0 16px;
`;

export const ExtendedLicensePlate = styled(LicensePlate)`
  margin: 8px 0 0 16px;
`;
