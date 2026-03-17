// Mock data for student portfolio

export const studentData = {
  name: "Sudip Mahat",
  title: "Computer Science Student",
  tagline: "TO WIN THE GAME FIRST YOU HAVE TO PLAY THE GAME",
  bio: "I'm a passionate Computer Science student with a strong foundation in full-stack development and a keen interest in artificial intelligence. Currently pursuing my Bachelor's degree, I love transforming ideas into functional applications and solving complex problems through elegant code.",
  email: "sudip1718mahat@gmail.com",
  location: "Kathmandu, Nepal",
  resumeUrl: "#",
  socialLinks: {
    github: "https://github.com/parth2063",
    linkedin: "https://linkedin.com/in/sudipmahat",
  
  }
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Tribhuvan University",
    period: "2080-2084 BS (2023-2027 AD)",
    highlights: [
      "Dean's List (Fall 2022, Spring 2023)",
      "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Web Development"
    ]
  },
  {
    id:2,
    degree: "High School(+2) in Science",
    institution: "Prasadi Academy Lalitpur, Nepal",
    period: "2078-2080 BS (2020-2023 AD)",
    highlights: [
      "Science Stream with Mathematics and Physics focus",
      "Achieved distinction in final examinations"
    ]
  },
  {
    id:3,
    degree: "Secondary Education",
    institution: "Budhanilkhanta Aawasiya Vidyalaya",
    period: "2072-2077 BS (2019-2021 AD)",
    highlights: [
      "Completed SEE with excellent grades",
      "Captain of the school's Cricket team",
      "Active member of the school's club"
    ]
  }
];

export const projects = [
 {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Tailwind CSS.",
    link: "#",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&auto=format&fit=crop",
    tags: ["React", "Tailwind"],
  },
  {
    title: "IPL_2025_Player_Analysis",
    description: "Data analysis of IPL 2025 players using Python and Pandas.",
    link: "https://github.com/parth2063/IPL_2025_Player_Analysis",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&q=80&auto=format&fit=crop",
    tags: ["Python", "Pandas"],
  },
  {
    title: "CricketScore-System",
    description: "Real-time cricket score tracking system built with C++.",
    link: "https://github.com/parth2063/CricketScore-System",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80&auto=format&fit=crop",
    tags: ["C++", "Real-time"],
  },
  {
    title: "Bank-Management-System",
    description: "A comprehensive bank management system built with C.",
    link: "https://github.com/parth2063/Bank-Management-System",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80&auto=format&fit=crop",
    tags: ["C", "System Design"],
  },
];

export const skills = {
  languages: ["JavaScript", "Python", "Java", "C++", "SQL", "TypeScript"],
  frameworks: ["React", "Node.js", "Express", "FastAPI", "Next.js", "TailwindCSS"],
  tools: ["Git", "Docker", "MongoDB", "PostgreSQL", "AWS", "Firebase"],
  concepts: ["Data Structures", "Algorithms", "REST APIs", "Responsive Design", "Agile/Scrum"]
};

export const contactFormSubmit = (formData) => {
  console.log('Form submitted:', formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  });
};


export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/parth2063",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sudipmahat/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/suu.diiip/",
    icon: "/assets/socials/instagram.svg",
  },
];