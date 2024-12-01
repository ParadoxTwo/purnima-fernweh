'use client';
import { FC } from 'react';
import { educationItems } from '@/app/constants';
import Resume from '@/app/resume/components/Resume';

const skillsData = [
  {
    title: 'Childcare',
    description:
      'Patient, attentive, and creative with activities, focusing on children’s safety and comfort.',
  },
  {
    title: 'Organizational Skills',
    description:
      'Efficient in planning and managing routines, ensuring smooth and enjoyable experiences for children.',
  },
  {
    title: 'Activity Planning',
    description:
      'Capable of organizing age-appropriate activities that engage and entertain.',
  },
  {
    title: 'Trustworthy and Reliable',
    description:
      'Built strong relationships with families, becoming a trusted presence.',
  },
];

const experienceData = [
  {
    position: 'Volunteer or Informal Babysitting',
    location: 'Delhi, India',
    descriptionItems: [
      'Cared for children aged 1-5, ensuring their safety and organizing engaging activities.',
      'Supervised children in a secure and fun environment, supporting routines like snack preparation and bedtime.',
      'Created a caring, trusted presence, building positive relationships with children and families.',
    ],
  },
];

const summaryContent =
  'Detail-oriented and reliable individual with experience in household cleaning. Committed to maintaining high standards of cleanliness and organization, with knowledge of basic cleaning tools and techniques. Eager to contribute to a professional cleaning team and provide exceptional service.';

const ChildcareResume: FC = () => {
  return (
    <Resume
      {...{ skillsData, experienceData, educationItems, summaryContent }}
    />
  );
};

export default ChildcareResume;
