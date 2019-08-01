import React from 'react';
import PT from 'prop-types';

import ActionButton from './ActionButton';
import { Container, Title, SubTitle } from './styled';

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
