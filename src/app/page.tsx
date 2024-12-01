// pages/portfolio.tsx
"use client";
import React from 'react';
import styled from 'styled-components';
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import FooterSection from "./components/FooterSection";
import Navigation from "./components/Navigation";
import GlobalStyles from './styles/GlobalStyles';
import IntroductionSection from "@/app/components/IntroductionSection";

const PortfolioPage: React.FC = () => (
    <MainContainer>
      <GlobalStyles />
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <AboutSection />
      <PortfolioSection />
      <FooterSection />
    </MainContainer>
);

const MainContainer = styled.div`
  position: relative;
  scroll-behavior: smooth;
`;

export default PortfolioPage;
