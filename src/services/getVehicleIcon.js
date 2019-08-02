import React from 'react';
import PT from 'prop-types';

import CarIconSvg from 'app/static/vectors/vehicles/vehicle-car.svg';
import ScooterIconSvg from 'app/static/vectors/vehicles/vehicle-scooter.svg';
import BikeIconSvg from 'app/static/vectors/vehicles/vehicle-bike.svg';

const getBatteryIcon = (vehicleType) => {
  if (vehicleType === 'middenklasser') {
    return <CarIconSvg/>;
  }
  if (vehicleType === 'e-scooter') {
    return <ScooterIconSvg/>;
  }
  if (vehicleType === 'e-bike') {
    return <BikeIconSvg/>;
  }
};

getBatteryIcon.propTypes = {
  vehicleType: PT.string,
};

export default getBatteryIcon;
