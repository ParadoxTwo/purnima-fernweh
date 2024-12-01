// components/HeroSection.tsx
import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const xTitle = useTransform(scrollY, [0, 500], [0, -250]);
  const yImage = useTransform(scrollY, [0, 500], [50, -180]);

  return (
    <Section id="hero">
      <Background>
        <LeftImage
          src="https://picsum.photos/600/1000"
          alt="Placeholder Left"
        />
        <RightImageWrapper>
          <RightImageTop
            src="https://picsum.photos/600"
            alt="Placeholder Right Top"
          />
          <RightImageBottom
            src="https://picsum.photos/600/800"
            alt="Placeholder Right Bottom"
            style={{ y: yImage }}
          />
        </RightImageWrapper>
      </Background>
      <Title style={{ x: xTitle }}>Purnima Fernweh</Title>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  background-color: #282c34; /* Adjust to suit your theme */
  color: #fff;
`;

const Title = styled(motion.h1)`
  font-family: var(--font-playfair-display), serif;
  font-size: 11vw; /* Responsive font size */
  font-weight: 900;
  position: relative;
  mix-blend-mode: difference; /* Inverts color based on background */
  color: white; /* Starting color which will invert based on background */
  z-index: 3;
  white-space: nowrap;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16vw;
    white-space: normal;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const LeftImage = styled.img`
  position: absolute;
  left: 20%;
  top: 15%;
  width: 30vw;
  height: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 60vw;
    top: 10%;
  }
`;

const RightImageWrapper = styled.div`
  position: absolute;
  right: 15%;
  top: 10%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 80vw;
    right: 5%;
    top: 80%;
    transform: translateY(-50%);
  }
`;

const RightImageTop = styled.img`
  width: 30vw;
  height: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 45%;
  }
`;

const RightImageBottom = styled(motion.img)`
  width: 30vw;
  height: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 45%;
  }
`;

export default HeroSection;
