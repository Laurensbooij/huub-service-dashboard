import React from 'react';
import PT from 'prop-types';

import ActionButton from './ActionButton';
import HuubLogo from './HuubLogo';
import { Container, TitlesContainer, Title, SubTitle } from './styled';

const HeaderBar = ({ to, title, subTitle }) => (
  <Container>
    <ActionButton to={to}/>
    <TitlesContainer>
      <Title>{title}</Title>
      {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
    </TitlesContainer>
    <HuubLogo/>
  </Container>
);

HeaderBar.propTypes = {
  to: PT.string,
  title: PT.string.isRequired,
  subTitle: PT.string,
};

export default HeaderBar;
