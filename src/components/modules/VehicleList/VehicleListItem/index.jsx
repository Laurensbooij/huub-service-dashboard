import React from 'react';
import PT from 'prop-types';

import LicensePlate from './LicensePlate';
import { VehicleName, ExtendedListItemContainer } from './styled';

import BatteryStatus from './BatteryStatus';

const VehicleListItem = ({ vehicle, vehicleType }) => (
  <ExtendedListItemContainer toPath="/test">
    {vehicleType === 'middenklasser' ?
      <LicensePlate vehicleLicense={vehicle.vehicleId}/>
      :
      <VehicleName>{vehicle.vehicleId}</VehicleName>}
    <BatteryStatus batteryType="main" batteryPercentage={vehicle.mainBatteryPercentage}/>
    <BatteryStatus batteryType="lock" batteryPercentage={vehicle.lockBatteryPercentage}/>
  </ExtendedListItemContainer>
);

VehicleListItem.propTypes = {
  vehicle: PT.shape({
    vehicleId: PT.string,
    mainBatteryPercentage: PT.number,
    lockBatteryPercentage: PT.number,
  }).isRequired,
  vehicleType: PT.string.isRequired,
};

export default VehicleListItem;
