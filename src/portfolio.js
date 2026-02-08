/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muneeb Arif",
  title: "Hi all, I'm Muneeb",
  subTitle: emoji(
    "Software Engineer with professional experience building production-level frontend applications using Angular / React and modern JavaScript. Strong foundation in data structures, databases, and system fundamentals, with hands-on exposure to AWS and full-stack development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mmeWxEnrbt7yTP0ZVZSEfMJj5FuSwStG/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/munneb10",
  linkedin: "https://www.linkedin.com/in/muneeb-arif-555981173/",
  gmail: "muneebarif.tech@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@munnebsheikh10",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER WHO BUILDS SCALABLE FRONTENDS AND SOLID BACKEND FOUNDATIONS",

  skills: [
    emoji("⚡ Build production-grade frontend applications using Angular, React, TypeScript, and modern JavaScript"),
    emoji("⚡ Design and integrate RESTful APIs with authentication (OAuth2, JWT, PKCE)"),
    emoji("⚡ Develop full-stack features using Node.js and FastAPI"),
    emoji("⚡ Implement core system concepts like indexing, storage engines, and transaction coordination"),
    emoji("⚡ Work with SQL databases, normalization, and query optimization"),
    emoji("⚡ Deploy and experiment with cloud services using AWS and CI/CD pipelines")
  ],

  /* Font Awesome Icons: https://fontawesome.com/icons */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Authentication (JWT)",
      fontAwesomeClassname: "fas fa-lock"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],

  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stockholm University",
      logo: require("./assets/images/stockholmUniversityLogo.png"),
      subHeader: "M.Sc. in Computer and Systems Sciences",
      duration: "2025 - Present",
      desc: "Focused on system fundamentals, distributed systems, data management, and software architecture.",
      descBullets: [
        "Coursework in system design, parallel & distributed programming, and network security",
        "Hands-on projects involving databases, authentication systems, and transaction coordination",
        "Strengthening foundations in algorithms, operating systems, and cloud computing"
      ]
    },
    {
      schoolName: "PMAS Arid Agriculture University, Pakistan",
      logo: require("./assets/images/aridUniversityLogo.png"),
      subHeader: "B.Sc. in Software Engineering",
      duration: "2020 - 2024",
      desc: "Built strong foundations in programming, databases, and software engineering principles.",
      descBullets: [
        "Studied data structures, algorithms, database systems, and software design",
        "Developed academic and personal projects using JavaScript, TypeScript, and SQL",
        "Completed internships and collaborative development projects"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Engineer",
      company: "Cell Tech",
      companylogo: require("./assets/images/celltechLogo.png"),
      date: "2024 – 2026",
      desc: "Worked on production-level Angular applications used by end users, focusing on maintainable component architecture and clean UI integration.",
      descBullets: [
        "Developed reusable Angular components for core user flows, improving consistency across the platform",
        "Integrated REST APIs to build dynamic, data-driven UI with complex state handling",
        "Refactored legacy modules using modern TypeScript features to reduce technical debt",
        "Collaborated with backend engineers and designers in a remote distributed team"
      ]
    },
    {
      role: "Mobile Application Developer Intern",
      company: "Higher Education Commission (Pakistan)",
      companylogo: require("./assets/images/hecLogo.png"),
      date: "2022 – 2023",
      desc: "Contributed to mobile application development with focus on usability, performance, and stability.",
      descBullets: [
        "Implemented UI components and connected application logic with backend services",
        "Debugged critical issues and improved app stability during release cycles",
        "Worked closely with senior developers to understand mobile development best practices"
      ]
    },
    {
      role: "Volunteer – Facilities & Operations",
      company: "Universities & Community Organizations",
      companylogo: require("./assets/images/volunteerLogo.png"),
      date: "2021 – 2024",
      desc: "Supported operational and facilities tasks in academic and community environments.",
      descBullets: [
        "Assisted staff with daily operations and event setup",
        "Demonstrated reliability, teamwork, and strong work ethic"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
// portfolio.js
const bigProjects = {
  title: "My creative Portfolio",
  subtitle: "Hover a project to see actions. Click to open Info or view details.",
  display: true,
  projects: [
    {
      projectName: "LookScout",
      isGithubProject: false,
      category: "Frontend",
      projectDesc: "A UI-focused project showcasing landing page + components.",
      image: require("./assets/images/lookScout.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["HTML", "CSS", "JavaScript","UI/UX"],
      modal: {
        title: "LookScout",
        greeting: "Hi,",
        body: [
          "Welcome to my LookScout project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
      projectName: "Nature Nest",
      isGithubProject: false,
      category: "Frontend",
      projectDesc: "Nature Nest AI-powered Adoption platform using AI-based child recommendation and SVM for parent personality assessment, with quarterly feedback forms for adopters, built to enhance the adoption process and experience.",
      image: require("./assets/images/natureNest.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["Django", "ML", "Web App", "UI/UX"],
      modal: {
        title: "Nature Nest",
        greeting: "Hi,",
        body: [
          "Welcome to my Nature Nest project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
      projectName: "SmartGuardAI",
      isGithubProject: false,
      category: "Web App",
      projectDesc: "SmartGuardAI: A Django-based web platform with a machine learning backend and SQLlite database, utilizing HTML, CSS, and JavaScript for the frontend to analyze RAM dumps and detect malicious activity.",
      image: require("./assets/images/smartGuardAI.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["Django", "ML", "Web App", "UI/UX"],
      modal: {
        title: "SmartGuardAI",
        greeting: "Hi,",
        body: [
          "Welcome to my SmartGuardAI project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
      projectName: "Dynamic Personal Portfolio",
      isGithubProject: false,
      category: "Web App",
      projectDesc: "Built a dynamic React.js portfolio with Sanity.io CMS for real-time updates, integrated APIs, and a live email response system using EmailJS, deployed on Netlify with CI/CD.",
      image: require("./assets/images/dynamicPortfolio.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["Web App", "React", "CMS", "API Integration", "EmailJS", "Netlify", "CI/CD"],
      modal: {
        title: "Dynamic Personal Portfolio",
        greeting: "Hi,",
        body: [
          "Welcome to my Dynamic Personal Portfolio project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
      projectName: "Nature Nest",
      isGithubProject: false,
      category: "Web App",
      projectDesc: "Nature Nest AI-powered Adoption platform using AI-based child recommendation and SVM for parent personality assessment, with quarterly feedback forms for adopters, built to enhance the adoption process and experience.",
      image: require("./assets/images/natureNest.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["Django", "ML", "Web App", "UI/UX"],
      modal: {
        title: "Nature Nest",
        greeting: "Hi,",
        body: [
          "Welcome to my Nature Nest project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
      projectName: "Deep Fake Detector",
      isGithubProject: false,
      category: "ML",
      projectDesc: "A Django-powered platform leveraging a ResNet-5 machine learning model to analyze and detect deepfake videos, handling backend logic and video processing through Django views.",
      image: require("./assets/images/deepFakeDetector.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["Django", "ML", "Web App", "UI/UX", "ResNet-5", "Video Analysis"],
      modal: {
        title: "Deep Fake Detector",
        greeting: "Hi,",
        body: [
          "Welcome to my Deep Fake Detector project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
      projectName: "Person Detector",
      isGithubProject: false,
      category: "ML",
      projectDesc: "A custom trained YOLOv8 model with accuracy of 92% designed to detect individuals in both recorded and live video streams, enabling real-time person detection capabilities.",
      image: require("./assets/images/personDetector.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["Django", "ML", "Computer Vision", "YOLOv8", "Real-time Detection", "Video Analysis"],
      modal: {
        title: "Person Detector",
        greeting: "Hi,",
        body: [
          "Welcome to my Person Detector project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
      projectName: "SmartGuardAI",
      isGithubProject: false,
      category: "ML",
      projectDesc: "SmartGuardAI: A Django-based web platform with a machine learning backend and SQLlite database, utilizing HTML, CSS, and JavaScript for the frontend to analyze RAM dumps and detect malicious activity.",
      image: require("./assets/images/smartGuardAI.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["Django", "ML", "Web App", "UI/UX"],
      modal: {
        title: "SmartGuardAI",
        greeting: "Hi,",
        body: [
          "Welcome to my SmartGuardAI project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
      projectName: "Future Forecasting",
      isGithubProject: false,
      category: "Data Science",
      projectDesc: "A project that employs Seasonal Autoregressive Integrated Moving Average (SARIMA) modeling to analyze historical data trends and make accurate future predictions, aiding in informed decision-making across various domains.",
      image: require("./assets/images/futureForecasting.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["Data Science", "Time Series Analysis", "SARIMA", "Python", "Data Visualization"],
      modal: {
        title: "Future Forecasting",
        greeting: "Hi,",
        body: [
          "Welcome to my Future Forecasting project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
      projectName: "Amazon Review Analysis",
      isGithubProject: false,
      category: "Data Science",
      projectDesc: "A data science project utilizing Amazon's text-based reviews to perform in-depth analysis and clustering of products, categorizing them into distinct segments based on customer feedback and sentiment.",
      image: require("./assets/images/amazonReviewAnalysis.png"),
      actions: {
        // github: "https://github.com/your-username/lookscout", // can be private repo link too
        // live: "https://lookscout.example.com", // optional
        info: true // show info icon and open modal
      },
      techStack: ["Data Science", "Text Analysis", "Clustering", "Python", "Data Visualization"],
      modal: {
        title: "Amazon Review Analysis",
        greeting: "Hi,",
        body: [
          "Welcome to my Amazon Review Analysis project! I am excited to share this project as part of my portfolio.",
          "Important Note: Due to project privacy concerns, the repository is private, and the code is not publicly accessible. However, to provide a overview of the project, I have included images in this.",
          "If you would like to discuss the project further or arrange a call to view the code, please feel free to email me at [muneebarif.tech@gmail.com].",
          "Thank you for your understanding!"
        ],
        email: "muneebarif.tech@gmail.com",
        images: [
          // "https://YOUR_IMAGE_1_URL",
          // "https://YOUR_IMAGE_2_URL"
        ]
      }
    },
    {
    projectName: "Event-Driven Notifications",
    isGithubProject: true,
    category: "Backend",
    projectDesc: "Event-driven notification system (systems-style backend project).",
    image: require("./assets/images/eventDrivenNotifications.png"),
    actions: {
      github: "https://github.com/munneb10/event-driven-notifications",
      info: true
    },
    techStack: ["TypeScript", "Event-Driven", "Backend", "Async Processing"],
    modal: {
      title: "Event-Driven Notifications",
      greeting: "Hi,",
      body: [
        "This project explores an event-driven backend approach for notifications.",
        "It focuses on backend/system fundamentals like async flows, events, and clean separation of concerns.",
        "If you’d like to discuss architecture or see private parts of the implementation, feel free to email me."
      ],
      email: "muneebarif.tech@gmail.com",
      images: []
    }
  },
  {
    projectName: "Event Queue Simulator",
    isGithubProject: true,
    category: "Backend",
    projectDesc:
      "A miniature event-driven system simulating how Kafka/RabbitMQ/SQS work under the hood.",
    image: require("./assets/images/eventQueueSimulator.png"),
    actions: {
      github: "https://github.com/munneb10/event-queue-simulator",
      info: true
    },
    techStack: ["TypeScript", "Queues", "Event Loop", "Backpressure", "Systems"],
    modal: {
      title: "Event Queue Simulator",
      greeting: "Hi,",
      body: [
        "A systems-style backend simulator inspired by Kafka/RabbitMQ/SQS concepts.",
        "Demonstrates queues, event dispatching, and practical system design thinking.",
        "Reach out if you want a walkthrough of how components map to real-world infra."
      ],
      email: "muneebarif.tech@gmail.com",
      images: []
    }
  },
  {
    projectName: "Idempotent Order API",
    isGithubProject: true,
    category: "Backend",
    projectDesc:
      "Learn how real-world APIs (e.g., Stripe) handle duplicate requests using idempotency keys + TTL + logging.",
    image: require("./assets/images/idempotentOrderApi.png"),
    actions: {
      github: "https://github.com/munneb10/idempotent-order-api",
      info: true
    },
    techStack: ["TypeScript", "REST API", "Idempotency", "TTL", "Middleware"],
    modal: {
      title: "Idempotent Order API",
      greeting: "Hi,",
      body: [
        "A backend-focused project demonstrating idempotent request handling.",
        "Covers practical patterns like idempotency keys, TTL-based storage, and logging middleware.",
        "Happy to explain how this maps to production payment/order APIs."
      ],
      email: "muneebarif.tech@gmail.com",
      images: []
    }
  },
  {
    projectName: "MiniDB Engine",
    isGithubProject: true,
    category: "Backend",
    projectDesc: "A custom database engine exploring B+ Trees and disk-based storage concepts.",
    image: require("./assets/images/miniDbEngine.png"),
    actions: {
      github: "https://github.com/munneb10/mini-db-engine",
      info: true
    },
    techStack: ["TypeScript", "Database Internals", "B+ Tree", "Disk Pages", "Indexing"],
    modal: {
      title: "MiniDB Engine",
      greeting: "Hi,",
      body: [
        "A backend/systems project exploring database internals: storage + indexing patterns.",
        "Focuses on B+ Trees and disk-based concepts to understand how DB engines work.",
        "If you want, I can walk through the data layout and query flow."
      ],
      email: "muneebarif.tech@gmail.com",
      images: []
    }
  },
  {
    projectName: "Mini Eureka (Service Registry)",
    isGithubProject: true,
    category: "Backend",
    projectDesc: "A tiny service registry in TypeScript (service discovery concept).",
    image: require("./assets/images/miniEureka.png"),
    actions: {
      github: "https://github.com/munneb10/mini-eurka",
      info: true
    },
    techStack: ["TypeScript", "Service Discovery", "Microservices", "Registry"],
    modal: {
      title: "Mini Eureka (Service Registry)",
      greeting: "Hi,",
      body: [
        "A backend systems project demonstrating service discovery via a registry pattern.",
        "Inspired by Eureka-style architectures used in microservices environments.",
        "Reach out if you’d like to discuss how this scales or integrates with gateways."
      ],
      email: "muneebarif.tech@gmail.com",
      images: []
    }
  },
  {
    projectName: "Bloom Filter Demo",
    isGithubProject: true,
    category: "Backend",
    projectDesc: "Probabilistic data structure demo for fast membership checks (systems optimization).",
    image: require("./assets/images/bloomFilterDemo.png"),
    actions: {
      github: "https://github.com/munneb10/bloom-filter-demo",
      info: true
    },
    techStack: ["TypeScript", "Bloom Filter", "Hashing", "Bit Array", "Optimization"],
    modal: {
      title: "Bloom Filter Demo",
      greeting: "Hi,",
      body: [
        "A backend/systems demo explaining Bloom filters for performance optimization.",
        "Shows how big systems avoid expensive DB lookups using probabilistic membership checks.",
        "Happy to explain false positives/negatives tradeoffs and real-world usage."
      ],
      email: "muneebarif.tech@gmail.com",
      images: []
    }
  }
    // Add more projects...
  ]
};


// const bigProjects = {
  // title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  // projects: [
  //   {
  //     image: require("./assets/images/saayaHealthLogo.webp"),
  //     projectName: "Saayahealth",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://saayahealth.com/"
  //       }
  //       //  you can add extra buttons here.
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/nextuLogo.webp"),
  //     projectName: "Nextu",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://nextu.se/"
  //       }
  //     ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Professional certifications and learning milestones demonstrating my growth in software engineering and data-driven systems.",

  achievementsCards: [
    {
      title: "Architecting Solutions on AWS",
      subtitle:
        "Certification by Amazon Web Services covering cloud fundamentals, core AWS services, and basic solution architecture.",
      image:
        "https://logodix.com/logo/34875.jpg",
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/FXLAFW5CWZ5T?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
        }
      ]
    },

    {
      title: "Mathematics for Machine Learning",
      subtitle:
        "DeepLearning.AI certification covering linear algebra, calculus, and probability for machine learning foundations.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.SZsc3X2p4PocWQuacmh36AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://coursera.org/share/0a2b0bded28c8e9c35ef6ba1fbe90af6"
        }
      ]
    },

    {
      title: "IBM Data Science Professional Certificate",
      subtitle:
        "Comprehensive program covering Python, data analysis, visualization, SQL, and applied data science projects.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://coursera.org/share/c02518bd9ed3d9aa94fc331f7b852279"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy writing about system fundamentals, data engineering, and practical software development concepts.",
  displayMediumBlogs: "false", // using hardcoded blogs instead of fetching
  blogs: [
    {
      url: "https://medium.com/@munnebsheikh10/hdfs-hadoop-distributed-file-system-unbox-e7f08c0b695b",
      title: "HDFS (Hadoop Distributed File System) - Unbox",
      description:
        "A beginner-friendly breakdown of how HDFS works, including architecture, components, and why distributed file systems matter."
    },
    {
      url: "https://medium.com/@munnebsheikh10/why-use-numpy-arrays-instead-of-python-inbuilt-lists-9b0b34124968",
      title: "Why Use NumPy Arrays Instead of Python Inbuilt Lists?",
      description:
        "Explains performance, memory efficiency, and computational advantages of NumPy arrays compared to native Python lists."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in internships, junior software engineering roles, or collaboration opportunities. Feel free to reach out!",
  number: "+46 767573615", // Optional – leave empty or add if you want to display
  email_address: "muneebarif.tech@email.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
