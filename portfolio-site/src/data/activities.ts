export type Activity = {
  title: string;
  details?: string;
  location?: string;
  dates?: string;
};

export const activities: Activity[] = [
  {
    title: "IE Math Olympiad",
    details:
      "Participated in the math olympiad at IE University for the 2024-25 academic year.",
  },
  {
    title: "IE AI Hackathon",
    details:
      "Time-series forecasting ML hackathon; strengthened coding, ML knowledge, and teamwork.",
  },
  {
    title: "IE University Cheerleading Team",
    location: "Madrid, Spain",
    dates: "Sept 2023 – Jan 2024",
    details:
      "Participated in intensive practice sessions and performed at campus sports events.",
  },
  {
    title: "Private Computer Science Tutor",
    location: "Madrid, Spain",
    dates: "2023 – Present",
    details: "Provided individual tutoring in programming and foundational CS courses.",
  },
  {
    title: "Volunteer Work",
    location: "Kuala Lumpur, Malaysia",
    dates: "2017 – 2023",
    details:
      "Supported food distribution for the homeless at Kechara Food Bank and assisted in COVID-19 relief programs (2020–2022).",
  },
]; 