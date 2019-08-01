import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import ActionButton from './ActionButton';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary.midnightblue};
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  text-transform: capitalize;
  margin: 12px 0 6px;
  color: ${(props) => props.theme.colors.white};
`;

const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
`;

const HeaderBar = ({ to, title, subTitle }) => (
  <Container>
    <ActionButton to={to}/>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </Container>
);

HeaderBar.propTypes = {
  to: PT.string.isRequired,
  title: PT.string.isRequired,
  subTitle: PT.string.isRequired,
};

export default HeaderBar;
