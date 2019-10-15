import styled from 'styled-components';

import ListItemContainer from 'common/ListItemContainer';

export const VehicleName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  min-width: 97px;
  color: ${(props) => props.theme.colors.primary.midnightblue};
  margin: 0;
`;

export const ExtendedListItemContainer = styled(ListItemContainer)`
  display: flex;
  align-items: center;

  & > *:not(:nth-last-child(2)):not(:last-child) {
    margin-right: 30px;
  }
`;
