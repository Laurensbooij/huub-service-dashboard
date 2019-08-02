import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import ChevronIconSvg from 'app/static/vectors/chevron-right.svg';

const Container = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.accent.lightgrey};
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};

  &:first-of-type {
    border-top: 1px solid ${(props) => props.theme.colors.accent.lightgrey};
  }
`;

export const ChevronIcon = styled(ChevronIconSvg)`
  position: absolute;
  right: 16px;
  top: calc(50% - 13px);
  transform: scale(0.5);
`;

const ListItemContainer = ({ children, className }) => (
  <Container className={className}>
    {children}
    <ChevronIcon/>
  </Container>
);

ListItemContainer.propTypes = {
  children: PT.array.isRequired,
  className: PT.string,
};

export default ListItemContainer;
