import React from 'react';
import PT from 'prop-types';

import getVehicleIcon from 'services/getVehicleIcon';

import { Container, Title, Icon } from './styled';

const VehicleTypeTitle = ({ vehicleType }) => (
  <Container>
    <Title>Middenklasser</Title>
    <Icon>{getVehicleIcon(vehicleType)}</Icon>
  </Container>
);

VehicleTypeTitle.propTypes = {
  vehicleType: PT.string,
};

export default VehicleTypeTitle;
