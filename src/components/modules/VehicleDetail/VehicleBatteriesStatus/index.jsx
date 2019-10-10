import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import BatteryStatusWithLabel from './BatteryStatusWithLabel';

const Container = styled.div`
  display: flex;
  margin: 16px 0 0 16px;
`;

const VehicleBatteriesStatus = ({ mainBatteryPercentage, lockBatteryPercentage }) => (
  <Container>
    <BatteryStatusWithLabel
      label="Batterij"
      batteryType="main"
      batteryPercentage={mainBatteryPercentage}
    />
    <BatteryStatusWithLabel
      label="Slot-batterij"
      batteryType="lock"
      batteryPercentage={lockBatteryPercentage}
    />
  </Container>
);

VehicleBatteriesStatus.propTypes = {
  mainBatteryPercentage: PT.number,
  lockBatteryPercentage: PT.number,
};

export default VehicleBatteriesStatus;
