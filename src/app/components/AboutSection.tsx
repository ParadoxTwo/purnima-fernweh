import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const AboutSection: React.FC = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Section id="about">
            <Title
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: isMobile ? 50 : 150 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                All About Me
            </Title>
            <ContentContainer>
                <LeftSection>
                    <StyledImage src="https://picsum.photos/800/1300" alt="Purnima Portrait" />
                </LeftSection>
                <RightSection>
                    <DesktopDescription>
                        <Description>
                            Since childhood, I dreamed of stepping into the world of modeling, imagining myself adorned in
                            elegant outfits, walking runways, and showcasing the creativity of designers. Fashion has always
                            felt like more than clothing—it’s a powerful form of self-expression and artistry. Modeling
                            became my way of connecting with others, sharing stories through style and grace.
                            <br/>
                            Today, I am incredibly grateful to God for the opportunities that have come my way, each one
                            shaping my journey in ways I never expected. Beginning a career in modeling required patience,
                            faith, and resilience, but doors began to open as I trusted the process. I’ve had the honor of
                            working with various clothing brands, where each collaboration has enriched my skills and
                            deepened my appreciation for the craft.
                            <br/>
                            Working with jewelry brands and beauty products has been equally inspiring. Jewelry adds a
                            timeless touch to any look, and I love discovering ways to showcase elegance in subtle yet
                            profound ways. Beauty products have allowed me to explore how makeup enhances natural beauty,
                            adding another layer to this art form.
                            <br/>
                            Every day, I feel blessed to be on this journey, meeting wonderful people and growing through
                            each experience, all by God’s grace.
                        </Description>
                    </DesktopDescription>
                    <MobileDescription>
                        <Description>
                            Since childhood, I’ve dreamed of modeling, seeing fashion as a way to express creativity and connect with others. Today, I’m incredibly grateful to God for the opportunities I’ve received. Through hard work and faith, I’ve had the privilege to collaborate with clothing brands, jewelry brands, and beauty products, each experience deepening my skills and appreciation for this art form. From runway shows to photo shoots, I’ve learned how fashion, jewelry, and beauty work together to enhance self-expression. I’m thankful for each opportunity and excited for where this journey will take me, all by God’s grace.
                        </Description>
                    </MobileDescription>
                </RightSection>
            </ContentContainer>
        </Section>
    );
};

const Section = styled.section`
    padding: 4rem 2rem;
    background-color: #fff;
    color: #333;
    position: relative;
`;

const Title = styled(motion.h2)`
    font-family: var(--font-cormorant-garamond), serif;
    font-size: 8rem;
    font-weight: 600;
    text-align: center;
    position: relative;
    z-index: 1;
    margin-bottom: 2rem;
    margin-top: -1.5rem;
    mix-blend-mode: difference; /* Inverts color based on background */
    color: slateblue; /* Starting color which will invert based on background */
    @media (max-width: 768px) {
        font-size: 4rem;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const LeftSection = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
`;

const RightSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0;
        text-align: center;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 45%;
`;

const Description = styled.p`
    font-size: 1.125rem;
    line-height: 1.8;
    color: #333;
`;

const DesktopDescription = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileDescription = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default AboutSection;