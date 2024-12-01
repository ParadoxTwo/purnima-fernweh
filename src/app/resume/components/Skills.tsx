import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { List, ListItem, SectionTitle } from '@/app/resume/elements/Structural';

// Define types for props
interface Skill {
  title: string;
  description: string;
}

interface SkillsProps {
  title: string;
  skills: Skill[];
}

const Skills: FC<SkillsProps> = ({ title, skills }: SkillsProps) => {
  return (
    <Section
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionTitle>{title}</SectionTitle>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <b>{skill.title}:</b> {skill.description}
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default Skills;

const Section = styled(motion.div)`
  margin-bottom: 20px;
`;
