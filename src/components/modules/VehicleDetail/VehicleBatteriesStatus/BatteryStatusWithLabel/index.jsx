import React from 'react';
import PT from 'prop-types';

import BatteryStatus from 'common/BatteryStatus';

import { Container, Label } from './styled';

const BatteryStatusWithLabel = ({ label, batteryType, batteryPercentage }) => (
  <Container>
    <Label>{label}</Label>
    <BatteryStatus
      batteryType={batteryType}
      batteryPercentage={batteryPercentage}
    />
  </Container>
);

BatteryStatusWithLabel.propTypes = {
  label: PT.string.isRequired,
  batteryType: PT.string.isRequired,
  batteryPercentage: PT.number.isRequired,
};

export default BatteryStatusWithLabel;
