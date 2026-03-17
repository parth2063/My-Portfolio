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
    institution: "Kathmandu Model School",
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
    id: 1,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspace features. Built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Weather Forecast Dashboard",
    description: "Interactive weather dashboard displaying real-time weather data with beautiful visualizations and location-based forecasts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    tags: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "Online learning platform featuring course management, video streaming, and progress tracking for students and instructors.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
    tags: ["Next.js", "PostgreSQL", "AWS S3", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "AI Chatbot Assistant",
    description: "Intelligent chatbot powered by natural language processing, capable of answering questions and providing personalized recommendations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    tags: ["Python", "OpenAI API", "FastAPI", "React"],
    demoUrl: "#",
    githubUrl: "#"
  }
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