import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import getBatteryIcon from 'services/getBatteryIcon';

const Container = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-of-type) {
    margin: 0 0 0 20px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0 0 0 6px;
  color: ${(props) => props.theme.colors.accent.grey};
`;

const Icon = styled.div`
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
  batteryType: PT.string,
  batteryPercentage: PT.number,
};

export default BatteryStatus;
