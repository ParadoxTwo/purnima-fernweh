import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion, useScroll, useTransform} from 'framer-motion';

const IntroductionSection: React.FC = () => {
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [700, 1200], [-50, 450]);
    const opacity = useTransform(scrollY, [700, 1200], [1, 0]);

    return (
        <Section
            id="introduction"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <DescriptionContainer>
                <Description
                    style={{y, opacity}}
                >
                    I am Purnima Fernweh and for me, fashion is not just about style, but a reflection of God&apos;s grace and the beauty of His creation.
                </Description>
            </DescriptionContainer>

            <ImagesContainer>
                <ImageWrapper>
                    <Image src="https://picsum.photos/300/375" alt="Dummy Image 1" />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="https://picsum.photos/300/400" alt="Dummy Image 2" />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="https://picsum.photos/300/450" alt="Dummy Image 3" />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="https://picsum.photos/300/425" alt="Dummy Image 4" />
                </ImageWrapper>
            </ImagesContainer>
        </Section>
    );
};

const Section = styled(motion.section)`
    padding: 5rem 2rem;
    background-color: #f9f9f9;
    color: #333;
    position: relative;
`;

const DescriptionContainer = styled.div`
    margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
    font-size: 2.5rem;
    line-height: 1.6;
    mix-blend-mode: difference; /* Inverts color based on background */
    color: white; /* Starting color which will invert based on background */
    text-align: center;
    max-width: 80vw;
    margin: 0 auto;
    font-family: var(--font-cormorant-garamond), serif;
    font-weight: 400;
    z-index: 1;
`;

const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export default IntroductionSection;