import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  color: lightblue;
  font-size: 36px;
`;

const Header = () => {
  return <StyledHeader>This is a styled header</StyledHeader>;
};

export default Header;
