"use client";
import { FC } from 'react';
import {educationItems} from "@/app/constants";
import Resume from "@/app/resume/components/Resume";

const skillsData = [
    { title: "Detail-Oriented Cleaning", description: "Strong attention to detail and commitment to cleanliness in all areas." },
    { title: "Organization", description: "Skilled in organizing spaces for maximum tidiness and order." },
    { title: "Knowledge of Cleaning Tools", description: "Experienced with a variety of cleaning tools and products for effective results." },
    { title: "Reliability and Efficiency", description: "Dependable, with a proven ability to complete tasks thoroughly and efficiently." }
];

const experienceData = [
    {
        position: "House Cleaning Experience",
        location: "Delhi, India",
        descriptionItems: [
            "Provided household cleaning services for family and neighbors, including dusting, vacuuming, and organizing rooms.",
            "Maintained a pleasant, welcoming environment by keeping spaces clean and tidy.",
            "Gained experience using different cleaning tools and products for optimal cleanliness."
        ]
    }
];

const summaryContent = "Detail-oriented and reliable individual with experience in household cleaning. Committed to maintaining high standards of cleanliness and organization, with knowledge of basic cleaning tools and techniques. Eager to contribute to a professional cleaning team and provide exceptional service."

const CleaningResume: FC = () => {
    return (
        <Resume {...{skillsData, experienceData, educationItems, summaryContent}}/>
    );
};

export default CleaningResume;