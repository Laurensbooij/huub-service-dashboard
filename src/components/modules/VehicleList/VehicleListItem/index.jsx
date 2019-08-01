import React from 'react';
import PT from 'prop-types';

import ListItemContainer from 'common/ListItemContainer';

import { VehicleName, BatteryIconsContainer } from './styled';

import BatteryStatus from './BatteryStatus';

const VehicleListItem = ({ vehicle }) => (
  <ListItemContainer>
    <VehicleName>{vehicle.vehicleId}</VehicleName>
    <BatteryIconsContainer>
      <BatteryStatus batteryType="main" batteryPercentage={vehicle.mainBatteryPercentage}/>
      <BatteryStatus batteryType="lock" batteryPercentage={vehicle.lockBatteryPercentage}/>
    </BatteryIconsContainer>
  </ListItemContainer>
);

VehicleListItem.propTypes = {
  vehicle: PT.shape({
    vehicleId: PT.string,
    mainBatteryPercentage: PT.number,
    lockBatteryPercentage: PT.number,
  }).isRequired,
};

export default VehicleListItem;
