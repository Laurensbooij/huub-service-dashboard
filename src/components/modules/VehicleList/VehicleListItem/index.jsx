import React from 'react';
import PT from 'prop-types';

import { Container, VehicleName, BatteryIconsContainer, ChevronIcon } from './styled';

import BatteryStatus from './BatteryStatus';

const VehicleListItem = ({ vehicle }) => (
  <Container>
    <VehicleName>{vehicle.vehicleId}</VehicleName>
    <BatteryIconsContainer>
      <BatteryStatus batteryType="main" batteryPercentage={vehicle.mainBatteryPercentage}/>
      <BatteryStatus batteryType="lock" batteryPercentage={vehicle.lockBatteryPercentage}/>
    </BatteryIconsContainer>
    <ChevronIcon />
  </Container>
);

VehicleListItem.propTypes = {
  vehicle: PT.shape({
    vehicleId: PT.string,
    mainBatteryPercentage: PT.number,
    lockBatteryPercentage: PT.number,
  }).isRequired,
};

export default VehicleListItem;
