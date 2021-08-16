import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <SHeader>
      <Link to="/">
        <Logo>Portfolio</Logo>
      </Link>
      <NavPc>
        <NavList>
          <NavItem>
            <Link to="/">HOME</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">ABOUT</Link>
          </NavItem>
        </NavList>
      </NavPc>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.header`
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
`;

const NavPc = styled.nav`
  margin-right: 20px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.li`
  font-size: 16px;
  font-weight: 700;
  margin-left: 2em;
`;
