import React from 'react';

import VehicleTypeListItem from './VehicleTypeListItem';
import { ExtendedHeading3 } from './styled';

const VehicleTypeList = () => (
  <section>
    <ExtendedHeading3>Selecteer een type voertuig</ExtendedHeading3>
    <VehicleTypeListItem vehicleType="middenklasser" />
    <VehicleTypeListItem vehicleType="e-scooter"  />
    <VehicleTypeListItem vehicleType="e-bike" />
  </section>
);

export default VehicleTypeList;
