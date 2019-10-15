import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

import ArrowBackSvg from 'app/static/vectors/arrow-back.svg';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60px;
  height: 100%;
`;

const Icon = styled(ArrowBackSvg)`
  transform: scale(0.9);
  margin: 0 0 0 16px;
`;

const FillContainer = styled.div`
  width: 60px;
  height: 100%;
`;

const ActionButton = ({ to }) => (
  to ?
    <StyledLink to={to}>
      <Icon />
    </StyledLink>
    :
    <FillContainer/>
);

ActionButton.propTypes = {
  to: PT.string,
};

export default ActionButton;
