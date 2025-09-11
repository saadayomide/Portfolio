export type Education = {
  institution: string;
  location: string;
  degree: string;
  start?: string;
  end?: string;
  gpa?: string;
  highlights?: string[];
};

export const education: Education[] = [
  {
    institution: "IE University (IEU)",
    location: "Madrid, Spain",
    degree: "Bachelor of Computer Science and Artificial Intelligence",
    end: "Expected June 2027",
    gpa: "9.4/10 (Ranked 4th with Honors)",
    highlights: [
      "IE Foundation Student and Young Talented Leaders Scholarship (Academic and Leadership Excellence)",
      "Relevant Courses: Statistics, Data Analysis",
    ],
  },
  {
    institution: "Homeschool – Cambridge International Education System",
    location: "Kuala Lumpur, Malaysia",
    degree: "IGCSE and A Levels",
    start: "Sept 2019",
    end: "June 2023",
    highlights: ["Straight A student and top of class"],
  },
]; 