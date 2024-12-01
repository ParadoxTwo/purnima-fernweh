import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: #333;
`;

export const NavigationBar: React.FC = () => (
  <Navbar>
    <NavList>
      <NavItem>
        <Link to="profile" smooth duration={500}>
          Profile
        </Link>
      </NavItem>
      <NavItem>
        <Link to="experience" smooth duration={500}>
          Experience
        </Link>
      </NavItem>
      <NavItem>
        <Link to="skills" smooth duration={500}>
          Skills
        </Link>
      </NavItem>
      <NavItem>
        <Link to="education" smooth duration={500}>
          Education
        </Link>
      </NavItem>
    </NavList>
  </Navbar>
);
