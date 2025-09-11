export type Experience = {
  organization: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    organization: "IEU Student Government",
    role: "Research Analyst",
    location: "Madrid, Spain",
    start: "September 2024",
    end: "June 2025",
    bullets: [
      "Conducted quantitative and qualitative research on student needs, academic policies, and campus initiatives to inform decision-making.",
      "Explored machine learning models to automate survey analysis and extract insights from open-ended responses (sentiment analysis).",
      "Presented AI-driven, data-backed recommendations to leadership, contributing to student well-being initiatives and academic resources.",
    ],
  },
  {
    organization: "Web Development Club",
    role: "Designer and Junior Developer",
    location: "Kuala Lumpur, Malaysia",
    start: "June 2022",
    end: "August 2023",
    bullets: [
      "Collaborated on a dynamic website for a local news outlet using JavaScript, React, and Azure Cloud Hosting Services.",
      "Integrated client-side scripts to track engagement, introducing early data analytics concepts.",
      "Participated in peer learning on AI for personalization and recommendations in web platforms.",
    ],
  },
  {
    organization: "7-Eleven Convenience Store",
    role: "Cashier & Operations Assistant",
    location: "Kuala Lumpur, Malaysia",
    start: "June 2019",
    end: "August 2022",
    bullets: [
      "Handled point-of-sale operations and managed inventory updates.",
      "Observed purchasing patterns and discussed automation/AI opportunities for stock prediction and service.",
      "Grew interest in ML for demand forecasting and retail analytics.",
    ],
  },
]; 