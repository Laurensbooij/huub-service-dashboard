import styled from 'styled-components';

import ListItemContainer from 'common/ListItemContainer';
import Paragraph from 'common/Paragraph';

export const ExtendedListItemContainer = styled(ListItemContainer)`
  display: flex;
  align-items: center;
  height: 66px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;

  svg {
    transform: scale(1.3);
  }
`;

export const ExtendedParagraph = styled(Paragraph)`
  margin: 0 0 0 18px;
  text-transform: capitalize;
`;
