"use client";
import { FC } from 'react';
import {educationItems} from "@/app/constants";
import Resume from "@/app/resume/components/Resume";

const skillsData = [
    { title: "Childcare", description: "Patient, attentive, and creative with activities; skilled in ensuring safety and comfort for children." },
    { title: "Cleaning", description: "Detail-oriented with a strong commitment to cleanliness and organization; familiar with basic cleaning tools and techniques." },
    { title: "Cooking", description: "Experienced with preparing simple, nutritious meals; knowledgeable in basic kitchen hygiene and food safety practices." }
];

const experienceData = [
    {
        position: "Volunteer or Informal Babysitting",
        location: "Delhi, India",
        descriptionItems: [
            "Cared for children aged 1-5 for family and friends, organizing activities and ensuring their well-being and safety.",
            "Supervised children in a safe and fun environment, planning age-appropriate activities.",
            "Assisted with basic childcare routines, such as snack preparation and bedtime."
        ]
    },
    {
        position: "Home Cleaning Experience",
        location: "Delhi, India",
        descriptionItems: [
            "Performed household cleaning for family and neighbors, including dusting, vacuuming, and organizing rooms to maintain cleanliness."
        ]
    },
    {
        position: "Cooking Experience",
        location: "Melbourne, Australia",
        descriptionItems: [
            "Cooked a variety of meals for church members, ensuring food safety and providing nutritious options that accommodated different preferences."
        ]
    }
];

const summaryContent = "Reliable and motivated individual eager to start a career in childcare, cleaning, and cooking. Known for being caring, detail-oriented, and organized, with a strong interest in supporting families by providing a safe and comfortable environment. Quick to learn new skills and dedicated to maintaining high standards in all tasks."

const CombinedResume: FC = () => {
    return (
        <Resume {...{skillsData, experienceData, educationItems, summaryContent}}/>
    );
};

export default CombinedResume;