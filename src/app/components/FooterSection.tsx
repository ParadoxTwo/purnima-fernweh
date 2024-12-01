// components/FooterSection.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterSection: React.FC = () => {
    return (
        <Section
            id="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <FooterContent>
                &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
            </FooterContent>
        </Section>
    );
};

const Section = styled(motion.footer)`
  padding: 2rem;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const FooterContent = styled.p`
  font-size: 1rem;
`;

export default FooterSection;
