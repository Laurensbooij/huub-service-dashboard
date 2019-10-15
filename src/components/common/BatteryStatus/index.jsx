import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import getBatteryIcon from 'services/getBatteryIcon';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  width: 53px;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0 0 1px 6px;
  color: ${(props) => props.theme.colors.primary.midnightblue};
  font-weight: 600;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;

  svg {
    transform: scale(0.8);
  }
`;

const BatteryStatus = ({ batteryType, batteryPercentage }) => (
  <Container>
    <Icon>{getBatteryIcon(batteryType, batteryPercentage)}</Icon>
    <Text>{batteryPercentage}%</Text>
  </Container>
);

BatteryStatus.propTypes = {
  batteryType: PT.string.isRequired,
  batteryPercentage: PT.number.isRequired,
};

export default BatteryStatus;
