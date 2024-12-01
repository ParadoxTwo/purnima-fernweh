import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { List, ListItem, SectionTitle } from "@/app/resume/elements/Structural";

// Define types for props
interface ExperienceItem {
    position: string;
    location: string;
    descriptionItems: string[];
}

interface ExperienceProps {
    title: string;
    experiences: ExperienceItem[];
}

const Experience: FC<ExperienceProps> = ({ title, experiences }) => {
    return (
        <Section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <SectionTitle>{title}</SectionTitle>
            {experiences.map((experience, index) => (
                <ExperienceSection key={index}>
                    <Position>{experience.position}</Position>
                    <Location>{experience.location}</Location>
                    <List>
                        {experience.descriptionItems.map((item, idx) => (
                            <ListItem key={idx}>{item}</ListItem>
                        ))}
                    </List>
                </ExperienceSection>
            ))}
        </Section>
    );
};

export default Experience;

const Section = styled(motion.div)`
    margin-bottom: 20px;
`;

const ExperienceSection = styled.div`
    margin-top: 20px;
`;

const Position = styled.h3`
    font-size: 18px;
    color: #333;
`;

const Location = styled.p`
    margin: 5px 0;
    font-size: 16px;
    color: #777;
`;
