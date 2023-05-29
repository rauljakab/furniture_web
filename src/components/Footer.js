import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgb(33,37,41);
  padding: 20px;
  text-align: left;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
    return (
        <FooterContainer bg="dark" variant="dark">
            <p style={{ color: 'white' }}>© 2023 My Website</p>
        </FooterContainer>
    );
};

export default Footer;
