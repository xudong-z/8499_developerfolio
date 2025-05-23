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
  username: "Xudong Zhang",
  title: "Hello, I'm Xudong",
  subTitle: (
    <>
      <span>🙎‍♂️ Data Scientist / Quant Developer in SG</span>
      <br />
      <span>📊 Trading / Coding / Problem Solving </span>
      <br />
      <span>💻 Python / SQL / RestAPI / Docker / Cloud Services</span>
    </>
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aw3ZhG_ePOT9XWPQNTOhvqfMTjFZen5Q/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/xudong-z",
  linkedin: "https://www.linkedin.com/in/xudong-z/",
  gmail: "xudong.zhg@gmail.com",
  // instagram: "https://www.instagram.com/xudongzz/",
  // Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills & Expertise",
  subTitle: "DATA SCIENTIST / QUANT DEVELOPER WITH EXPERTISE IN MULTIPLE DOMAINS",
  skills: [
    emoji(
      "⚡ Certified Nvdia Gen AI LLM Associate"
    ),
    emoji("⚡ CFA Institude Level 1 Passed"),
    emoji(
      "⚡ Multi-dimentional / Alternative Dataset (Weather / Geo-spatial / News)"
    ),
    emoji(
      "⚡ People Management: Team Lead / Scrum Master / Agile Workflow"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Cloud Services",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "NLP/LLM",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "CI/CD Automation",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "RestAPI",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Quant Research",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set to true to show this section
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/images/uscLogo.png"), // You'll need to add this image
      subHeader: "Master of Management Studies",
      duration: "2017 - 2018",
      desc: "Graduate Certificate in Business Analytics with GPA 3.67/4.0",
      descBullets: [
        "Data Visualization",
        "Fraud Analysis",
        "Time-series Analysis",
        "Statistical Learning"
      ]
    },
    {
      schoolName: "Shanghai Jiao Tong University",
      logo: require("./assets/images/sjtuLogo.png"), // You'll need to add this image
      subHeader: "Bachelor of Science in Bio-technology",
      duration: "2012 - 2016",
      desc: "Major in Bio-Stats and Bio-Informatics with GPA 3.43/4.0",
      descBullets: [
        "Study on the Anti-aging Role of Sacha Inchi Oil (National Undergraduate Innovation Program, 2014)",
        "Academic Excellence Scholarship (First Class) of SJTU, 2014",
        "Outstanding Graduate of SJTU, 2016"
      ]
    },
    {
      schoolName: "University of Berkeley, California",
      logo: require("./assets/images/berkeleyLogo.png"), // You'll need to add this image
      subHeader: "Summer School (Hass School of Business)",
      duration: "Summer 2015",
      desc: "Courses in International Trade and Micro-economics",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science / Machine Learning / Visualizations", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering / Low-latency ETL / WebApp",
      progressPercentage: "85%"
    },
    {
      Stack: "Software Development / Docker / CI/CD",
      progressPercentage: "80%"
    },
    {
      Stack: "Quant Research / Commodities",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Quant Developer",
      company: "Six One Commodities",
      companylogo: require("./assets/images/sixoneLogo.jpg"), // You'll need to add this image
      date: "August 2024 – Present",
      // desc: "Building quantitative trading and risk platforms in Singapore.",
      // descBullets: [
      //   "Architected high-performance data pipelines for Research & Risk platforms, migrated legacy ETL system to distributed architecture, improving fault tolerence and reducing processing latency by 30% (Airflow, MSSQL Agent)",
      //   "Developed in-house Python libraries for research desk, creating modular, multi-interface data access layers, plotting tools and entity fuzzy matcher, quantitative pricing models (Azure Pipeline, pyodbc, bcp, FastAPI)",
      //   "Implemented real-time WebApp for trade desk analytics, creating interactive options strategy visualization tools with custom algo pricing models, together with news sentiment screener (volitility surface, streamlit, NLP)"
      // ]
    },
    {
      role: "Lead Data Scientist",
      company: "Louis Dreyfus Company",
      companylogo: require("./assets/images/ldcLogo.jpg"),
      date: "May 2021 – August 2024",
      // desc: "Led data science initiatives for vessel tracking in Singapore and Switzerland offices.",
      // descBullets: [
      //   "Orchestrated ETL pipelines for seamless data integration of vessel positions, commodity shipments. Impelemt feature engineering per business logic to streamline quantmental research (Jenkins, pyodbc, shapely, folium)",
      //   "Led the development of in-house vessel tracking WebApp (Kpler-like), implemented backend DB pipeline and REST/Websocket API endpoints, also contributed to frontend React design (FastAPI, Kafka, Docker, React.js)",
      //   "Automated market S/D analysis and derive leading indicators & price arbs. Deploy ML models to predict commodity flows and vessel supply across diverse market segments (geopandas, sklearn, mlflow, dash, ArcticDB)"
      // ]
    },
    {
      role: "Market Data Analyst",
      company: "Bloomberg LP",
      companylogo: require("./assets/images/bloombergLogo.jpg"),
      date: "July 2018 – May 2021",
      // desc: "Managed market data analytics for the Bloomberg Terminal in Singapore.",
      // descBullets: [
      //   "Maintained ETL pipelines to batch ingest APAC market data feeds (SHFE, DCE, Mysteel etc), implemented anomoly detection over 60 million data points per day to ensure data quality (selenium, Airflow, PostgreSql)",
      //   "Implemented ML models (KDTree, Xgboost) to cluster and predict voyage destination and regional commodities trading volume, achieving 92.3% accuracy on classifier and 2.38% MPE on regressor (pandas, sklearn)",
      //   "Developed a NLP-based WebApp for APAC Data support desks by processing history tickets, accelerated reference info retrieval, ticket re-bucketing and root cause investigation (word2vec, embeddings, similarity search)"
      // ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Project Gallery",
  subtitle: "SOME OF MY EXPLORATORY PROJECTS AND DASHBOARDS",
  projects: [
    {
      image: require("./assets/images/optionPricing.png"), // You'll need to add this image
      projectName: "Black-Scholes Option Pricing Calculator",
      projectDesc: "Interactive tool for option pricing and greeks calculation using the Black-Scholes model with visualizations for understanding option sensitivities",
      footerLink: [
        {
          name: "Visit Web App",
          url: "[http://xudongz.net:8506]" // Replace with actual URL when available
        }
      ]
    },
    {
      image: require("./assets/images/steelMillProfit.png"), // You'll need to add this image
      projectName: "Statistical Arbitrage on Steel Mill Profit Margin",
      projectDesc: "Trading strategy leveraging Bollinger Bands and mean reversion principles to identify arbitrage opportunities in China's steel mill profit margins",
      footerLink: [
        {
          name: "Visit Web App",
          url: "[http://xudongz.net:8502]" // Replace with actual URL when available
        }
      ]
    },
    {
      image: require("./assets/images/ragLLM.png"), // You'll need to add this image
      projectName: "LLM - Rag Agent for Commodities Derivatives",
      projectDesc: "Advanced language model enhanced with specialized knowledge on financial derivatives using RAG, llama_index, and deepseek technologies",
      footerLink: [
        {
          name: "Visit Web App",
          url: "[http://xudongz.net:8507]" // Replace with actual URL when available
        }
      ]
    },
    {
      image: require("./assets/images/olympicMedalists.png"), // You'll need to add this image
      projectName: "Olympic Medalists Demographics (Wikipedia)",
      projectDesc: "Scraped all Wikipedia pages to get info of 21,000+ summer Olympic medalists, and created an animated visualization tool to analyze age/nationality/sports/gender",
      footerLink: [
        {
          name: "Visit Web App",
          url: "https://olympics-medalists.herokuapp.com/"
        }
      ]
    },
    // {
    //   image: require("./assets/images/creditCardFraud.png"), // You'll need to add this image
    //   projectName: "Credit Card Fraud Detection",
    //   projectDesc: "Interactive dashboard to check variable distribution, model training and evaluation with AUC performance from Random Forest",
    //   footerLink: [
    //     {
    //       name: "Visit Dashboard",
    //       url: "https://xudong-z.shinyapps.io/credit-card-fraud-analysis/"
    //     },
    //     {
    //       name: "View Code",
    //       url: "https://github.com/xudong-z/Credit_Fraud_Analysis"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/laHomeless.png"), // You'll need to add this image
    //   projectName: "LA Homeless Density Dashboard",
    //   projectDesc: "Interactive dashboard to track and measure LA homelessness distribution and migration in 2017, assisting City Mayor's office in fund allocation",
    //   footerLink: [
    //     {
    //       name: "Visit Dashboard",
    //       url: "https://xudong-z.shinyapps.io/la_cityhomeless/"
    //     },
    //     {
    //       name: "View Code",
    //       url: "https://github.com/xudong-z/usc_LA_CityHomeless_final"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/nyProperty.png"), // You'll need to add this image
    //   projectName: "NY Property Valuation Frauds Detection",
    //   projectDesc: "Used unsupervised learning models to detect outliers of NY property valuation frauds and identify common patterns",
    //   footerLink: [
    //     {
    //       name: "View Code",
    //       url: "https://github.com/xudong-z/NY-Property"
    //     }
    //   ]
    // }
  ],
  display: true // Set to true to show this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "CFA Level 1",
      subtitle:
        "Completed Chartered Financial Analyst Level 1 examination",
      image: require("./assets/images/cfaLogo.png"), // You'll need to add this image
      imageAlt: "CFA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }
      ]
    }
    // You can add more achievements here as needed
  ],
  display: false // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing Cool Stuff, I Love to Write and Teach Others What I Have Learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // You can add blog posts here if you have any
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "WORKSHOPS AND PRESENTATIONS"
  ),

  talks: [
    {
      title: "Python Data Analysis Workshops",
      subtitle: "Training for Bloomberg Sales and Data Specialist Teams",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "MY PODCAST APPEARANCES",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add your podcast links here if you have any
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Write to Me 🖋️"),
  subtitle:
    "Discuss a project or just want to say hi? I'm happy to connect!",
  number: "", // You can add your phone number here if you want
  email_address: "xudong.zhg@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "", // Replace with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer
// Example - sections that will appear in your navigation bar:

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  workExperiences,
  educationInfo,
  techStack,
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
