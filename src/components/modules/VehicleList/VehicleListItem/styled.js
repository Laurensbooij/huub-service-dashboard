import styled from 'styled-components';

import ChevronIconSvg from 'app/static/vectors/chevron-right.svg';

export const Container = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.accent.lightgrey};
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};

  &:first-of-type {
    border-top: 1px solid ${(props) => props.theme.colors.accent.lightgrey};
  }
`;

export const VehicleName = styled.h2`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary.midnightblue};
  margin: 0 0 10px 0;
`;

export const BatteryIconsContainer = styled.div`
  display: flex;
`;

export const ChevronIcon = styled(ChevronIconSvg)`
  position: absolute;
  right: 16px;
  top: calc(50% - 13px);
  transform: scale(0.5);
`;
