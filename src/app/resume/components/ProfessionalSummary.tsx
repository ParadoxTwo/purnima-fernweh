import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { SectionTitle } from '@/app/resume/elements/Structural';

// Define types for props
interface SummaryProps {
  title: string;
  content: ReactNode;
}

const Summary: FC<SummaryProps> = ({ title, content }: SummaryProps) => {
  return (
    <Section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{content}</SectionContent>
    </Section>
  );
};

export default Summary;

const Section = styled(motion.div)`
  margin-bottom: 20px;
`;

const SectionContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #555;
`;
