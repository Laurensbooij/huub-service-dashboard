import React from 'react';
import PT from 'prop-types';

import VehicleTypeListItem from './VehicleTypeListItem';
import { ExtendedHeading3 } from './styled';

const VehicleTypeList = ({ vehicleTypes }) => (
  <section>
    <ExtendedHeading3>Selecteer een type voertuig</ExtendedHeading3>
    {vehicleTypes.map((vehicleType) => (
      <VehicleTypeListItem
        key={vehicleType}
        vehicleType={vehicleType}
      />
    ))}
  </section>
);

VehicleTypeList.propTypes = {
  vehicleTypes: PT.array.isRequired,
};

export default VehicleTypeList;
