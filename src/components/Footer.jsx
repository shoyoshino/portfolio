import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <SFooter>
      <Copyright>Copyright © 2021 SHO YOSHINO. All Rights Reserved.</Copyright>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f8f8;
  background-color: #131313;
`;

const Copyright = styled.p`
  font-size: 12px;
`;
