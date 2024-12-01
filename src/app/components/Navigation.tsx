// components/Navigation.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Nav>
            <Logo href="#hero">Purnima Fernweh</Logo>
            <DesktopMenu>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#portfolio">Portfolio</NavLink>
                <NavLink href="#footer">Contact</NavLink>
            </DesktopMenu>
            <Hamburger onClick={toggleMenu} $isOpen={isOpen}>
                <span />
                <span />
                <span />
            </Hamburger>

            <AnimatePresence>
                {isOpen && (
                    <MobileMenu
                        initial={{ y: '-100%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.4 }}
                    >
                        <MobileNavLink href="#hero" onClick={toggleMenu}>
                            Purnima
                        </MobileNavLink>
                        <MobileNavLink href="#about" onClick={toggleMenu}>
                            About
                        </MobileNavLink>
                        <MobileNavLink href="#portfolio" onClick={toggleMenu}>
                            Portfolio
                        </MobileNavLink>
                        <MobileNavLink href="#footer" onClick={toggleMenu}>
                            Contact
                        </MobileNavLink>
                    </MobileMenu>
                )}
            </AnimatePresence>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(40, 44, 52, 0.8); /* Semi-transparent background */
    z-index: 10;
`;

const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
`;

const DesktopMenu = styled.div`
    display: flex;
    gap: 1.5rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    &:hover {
        color: #0070f3;
    }
`;

// Updated Hamburger Icon styling
const Hamburger = styled.div<{ $isOpen: boolean }>`
  display: none;
  cursor: pointer;
  position: relative;
  width: 25px;
  height: 18px;
  z-index: 11; /* Ensure it's above the menu */
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  span {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
    opacity: 1;
    top: 0;
    transform: none;

    &:nth-child(1) {
      top: ${({ $isOpen }) => ($isOpen ? '50%' : '0')};
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'none')};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
      top: ${({ $isOpen }) => ($isOpen ? '0' : '50%')};
    }
    &:nth-child(3) {
      top: ${({ $isOpen }) => ($isOpen ? '50%' : '100%')};
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'none')};
    }
  }
`;

const MobileMenu = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 9;
`;

const MobileNavLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    &:hover {
        color: #0070f3;
    }
`;

export default Navigation;
