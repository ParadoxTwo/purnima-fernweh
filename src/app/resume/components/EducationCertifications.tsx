import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { List, ListItem, SectionTitle } from '@/app/resume/elements/Structural';

// Define types for props
interface EducationCertificationsProps {
  title: string;
  items: string[];
}

const EducationCertifications: FC<EducationCertificationsProps> = ({
  title,
  items,
}) => {
  return (
    <Section
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionTitle>{title}</SectionTitle>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Section>
  );
};

export default EducationCertifications;

const Section = styled(motion.div)`
  margin-bottom: 20px;
`;
