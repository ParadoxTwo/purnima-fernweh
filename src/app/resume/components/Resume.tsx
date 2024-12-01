import styled from 'styled-components';
import { FC } from 'react';
import { Element } from 'react-scroll';
import Skills from './Skills';
import Experience from './Experience';
import EducationCertifications from './EducationCertifications';
import ProfessionalSummary from './ProfessionalSummary';
import { NavigationBar } from './NavigationBar';
import { motion } from 'framer-motion';
import { CONTACT, NAME } from '@/app/constants';

// Define types for props
interface Skill {
  title: string;
  description: string;
}

interface ExperienceItem {
  position: string;
  location: string;
  descriptionItems: string[];
}

interface PurnimaResumeProps {
  name?: string;
  contactInfo?: string;
  summaryContent: string;
  skillsData: Skill[];
  experienceData: ExperienceItem[];
  educationItems: string[];
}

const Resume: FC<PurnimaResumeProps> = ({
  name,
  contactInfo,
  summaryContent,
  skillsData,
  experienceData,
  educationItems,
}: PurnimaResumeProps) => {
  return (
    <Container>
      <NavigationBar />
      <ProfileStart as={Element} name="profile" />
      <MainContent>
        <Header>
          <Name>{name || NAME}</Name>
          <ContactInfo>{contactInfo || CONTACT}</ContactInfo>
        </Header>

        <Section as={Element} name="summary">
          <ProfessionalSummary
            title="Professional Summary"
            content={summaryContent}
          />
        </Section>

        <Section as={Element} name="skills">
          <Skills title="Skills" skills={skillsData} />
        </Section>

        <Section as={Element} name="experience">
          <Experience title="Experience" experiences={experienceData} />
        </Section>

        <Section as={Element} name="education">
          <EducationCertifications
            title="Education & Certifications"
            items={educationItems}
          />
        </Section>
      </MainContent>
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  @media (prefers-color-scheme: dark) {
    color: #ededed;
  }
`;

const Name = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const ContactInfo = styled.p`
  font-size: 14px;
`;

const ProfileStart = styled.div`
  padding-top: 40px;
`;

const Section = styled(motion.div)`
  width: 90%;
  margin: 10px auto 10px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  scroll-margin-top: 80px;
`;
