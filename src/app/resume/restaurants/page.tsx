'use client';
import { FC } from 'react';
import { educationItems } from '@/app/constants';
import Resume from '@/app/resume/components/Resume';

const skillsData = [
  {
    title: 'Food Preparation',
    description:
      'Skilled in preparing a variety of Indian dishes with authentic flavors and techniques.',
  },
  {
    title: 'Customer Service',
    description:
      'Friendly and attentive, ensuring a positive dining experience for all customers.',
  },
  {
    title: 'Time Management',
    description:
      'Able to manage multiple orders efficiently while maintaining quality.',
  },
  {
    title: 'Adaptability',
    description:
      'Quick to adapt to new recipes, customer preferences, and kitchen environments.',
  },
  {
    title: 'Large-Scale Cooking',
    description:
      'Experienced in preparing meals for large number of people while maintaining quality and efficiency.',
  },
];

const experienceData = [
  {
    position: 'Voluntary Cooking Experience',
    location: 'Melbourne, Australia',
    descriptionItems: [
      'Cooked diverse meals for church members, accommodating dietary preferences and ensuring food safety.',
      'Prepared balanced meals and snacks for family and friends, ensuring quality and nutrition.',
      'Practiced basic food handling, kitchen hygiene, and cleanup, focusing on efficiency and safety.',
      'Gained experience cooking for groups of 30 to 60 people, ensuring all dishes met high standards of taste and quality.',
    ],
  },
  {
    position: "Owner and Cook at Moona's Kitchen",
    location: 'Melbourne, Australia',
    descriptionItems: [
      'Ran a private catering business for church members, specializing in Indian cuisine.',
      'Prepared, cooked, and served meals for small events and gatherings of up to 80 people, receiving positive feedback from customers.',
      'Managed all aspects of the catering service, including menu planning, food preparation, and customer interactions.',
      'Maintained exceptional organization and timing to deliver meals efficiently for large groups.',
    ],
  },
];

const summaryContent =
  'Friendly and organized individual with a passion for food preparation and customer service. Experienced in preparing simple, nutritious meals and maintaining cleanliness in food preparation areas. Skilled in cooking for large groups of people, ensuring high standards of hygiene, quality, and customer satisfaction. Quick to learn, reliable, and committed to excellence in a café or restaurant environment.';

const RestaurantResume: FC = () => {
  return (
    <Resume
      {...{ skillsData, experienceData, educationItems, summaryContent }}
    />
  );
};

export default RestaurantResume;
