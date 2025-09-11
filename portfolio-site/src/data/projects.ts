export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Student Dropout Predictor",
    description:
      "Predictive model to identify at-risk students using Scikit-Learn classification algorithms and academic data; enables early interventions.",
    tech: ["Python", "scikit-learn", "Pandas"],
  },
  {
    title: "Expense Management Systems",
    description:
      "Cloud-based app for tracking expenses with Azure Functions and MySQL integration.",
    tech: ["Azure Functions", "MySQL", "JavaScript"],
  },
  {
    title: "Django Database Management System",
    description:
      "Web-based CRUD application using Django and relational database models.",
    tech: ["Django", "Python", "PostgreSQL"],
  },
  {
    title: "Python UNO Game",
    description:
      "UNO logic implemented with object-oriented programming and data structures in Python.",
    tech: ["Python"],
  },
  {
    title: "Chat Application in C",
    description:
      "Terminal-based chat system with socket programming and multithreading in C.",
    tech: ["C", "Sockets", "Multithreading"],
  },
  {
    title: "Health Optimization App",
    description:
      "Prototype app suggesting holistic routines based on goals; experimented with OpenAI APIs.",
    tech: ["TypeScript", "OpenAI API"],
  },
  {
    title: "Linear Algebra in Quantum Computing",
    description:
      "Explored quantum concepts with matrix operations and linear transformations to simulate qubits.",
    tech: ["Python", "NumPy"],
  },
  {
    title: "Blockchain IoT Embedded System Design",
    description:
      "Secure IoT system using embedded hardware and blockchain principles for tamper-proof logging and decentralized communication.",
    tech: ["Embedded Systems", "Blockchain"],
  },
]; 