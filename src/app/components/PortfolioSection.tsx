// components/PortfolioSection.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ImageWithIndicators from "@/app/components/ImageWithIndicators";

const PortfolioSection: React.FC = () => {
    return (
        <Section
            id="portfolio"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <Title>My Work</Title>
            <PortfolioGrid>
                <ImageWithIndicators
                    src="https://picsum.photos/300/400"
                    alt="Sample Image"
                    margin="0 0 0 4rem"
                    indicators={[
                        {
                            startX: "60%",
                            startY: "40%",
                            endX: "112%",
                            endY: "40%",
                            label: "Black Eyes",
                            color: "red",
                            rightSide: true,
                        },
                    ]}
                />
            </PortfolioGrid>
        </Section>
    );
};

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: #f4f4f4; /* Light gray background */
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default PortfolioSection;
