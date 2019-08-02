import React, { lazy } from 'react';
import PT from 'prop-types';

const CarIconSvg = lazy(() => import('app/static/vectors/vehicles/vehicle-car.svg'));
const ScooterIconSvg = lazy(() => import('app/static/vectors/vehicles/vehicle-scooter.svg'));
const BikeIconSvg = lazy(() => import('app/static/vectors/vehicles/vehicle-bike.svg'));

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
