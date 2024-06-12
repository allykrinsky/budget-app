import React from 'react';
import styled from 'styled-components';

const HeadingContainer = styled.div`
    display : flex;
    padding: 16px;
`

const Header = ({ text }) => {
    return <h1>{text}</h1>
    // return <Content>{children}</Content>;
  };
  
export default Header;