import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import { Link } from 'react-router-dom';
import ChevronIconSvg from 'app/static/vectors/chevron-right.svg';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:first-of-type > div {
    border-top: 1px solid ${(props) => props.theme.colors.accent.lightgrey};
  }
`;

const Container = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.accent.lightgrey};
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ChevronIcon = styled(ChevronIconSvg)`
  position: absolute;
  right: 16px;
  top: calc(50% - 13px);
  transform: scale(0.5);
`;

const ListItemContainer = ({ children, className, toPath }) => (
  <StyledLink to={toPath}>
    <Container className={className}>
      {children}
      <ChevronIcon/>
    </Container>
  </StyledLink>
);

ListItemContainer.propTypes = {
  children: PT.array.isRequired,
  className: PT.string,
  toPath: PT.string,
};

export default ListItemContainer;
