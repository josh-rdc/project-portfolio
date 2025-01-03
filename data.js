export const bio = [
  "Hello, I am Josh, and welcome to my portfolio!",
  "Here, I will showcase my achievements and the impactful projects I have undertaken during my journey from civil engineering to becoming an AI specialist.",  
  "I began my career in civil engineering, gaining expertise in technical document handling and data analysis, while building a solid understanding of engineering principles. Transitioning into a managerial role, I combined technical knowledge with business acumen, managing budgets, schedules, and client relationships—strengthening my skills in problem-solving, critical thinking, and leadership.",
  "Eager to explore the intersection of technology and innovation, I pursued a master’s degree in Artificial Intelligence. During this program, I embarked on transformative projects that tackled real-world challenges using machine learning, data science, and AI-driven solutions. These experiences solidified my passion for creating data-driven systems that deliver meaningful impact.",
  "This portfolio is a testament to what I can bring to the table—an engineer’s precision, a manager’s strategic vision, and an AI practitioner’s innovative mindset.",
];

export const skills = [
  {
    title: "Languages",
    skillName: "JavaScript, TypeScript",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Angular, RxJS, NGRX/NGXS",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "HTML, Bootstrap, Tailwind",
    color: "4",
    percentage: "70",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA, Bitbucket",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Debugging, Chrome DevTools",
    color: "3",
    percentage: "80",
  },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const education = [
  {
    title: "University of the Philippines Diliman",
    duration: "2023 - 2025",
    subtitle: "Master of Engineering in Artificial Intelligence",
    details: [
      `Consistent university scholar with a cumulative general weighted average of 1.20/1.0.`,
      `Studied the fundamental mathematical concepts of artificial intelligence, tackling the very foundation of algorithms.`,
      `Engaged in research projects that focused on machine learning, data science, and AI-driven solutions.`,


    ],
    tags: [
      "Machine Learning",
      "Classical Learning Models",
      "Deep Learning Models",
      "Data Science",
      "ML Operations",
      "Python",
      "Data Engineering",
    ],
    icon: "images/01_EducationGraduate.png",
  },
  {
    title: "Nueva Ecija University of Science and Technology",
    duration: "",
    subtitle: "Bachelor of Science in Civil Engineering",
    details: [
      `Proudly graduated as the department valedictorian and cum laude with a general weighted average of 1.51/1.0, 
        the first latin honor awardee from the more than 10-year history of the department.`,
      `Served as the student chapter president for Philippines Institute of Civil Engineers (PICE) on the last year of my degree`,
      `Represented the university for the South East Asian Minister of Education Organization – SEA-TVET Internship Exchange Program in Indonesia
        for technical and management training, and cultural immersion.`,
      
    ],
    tags: [
      "Engineering",
      "Physics",
      'Mathematics',
      "Data Analysis",

    ],
    icon: "images/01_EducationCollege.png",
  },
];

export const experience = [
  {
    title: "Aboitiz Construction, Inc.",
    duration: "April 2022 - August 2023",
    subtitle: "Commercial Management Engineer",
    details: [
      `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
    ],
    tags: ["Project Management", "Business Development", "Data Analysis",
      "Client Relations", "Database Management", "Google Data Studio", "SAP"],
    icon: "",
  },

  {
    title: "JGC Philippines, Inc.",
    duration: "January 2020 - April 2022",
    subtitle: "Design Engineer",
    details: [
      `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
    ],
    tags: ["Technical Document Analysis", "International Engineering Standards and Codes", "MS Excel", "VBA"],
    icon: "",
  },
  
];

export const projects = {
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
    //   {
    //     text: "Linkedin",
    //     link: "https://www.linkedin.com/in/vinaysomawat/",
    //   },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
      {
        text: "Github/vinaysomawat.github.io",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
