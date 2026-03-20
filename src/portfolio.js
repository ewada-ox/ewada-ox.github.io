/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import homephoto from "./assets/img/banners/oms.PNG"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: homephoto,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "EWADA",
  title: "Hi, Welcome to EWADA",
  subTitle: emoji(
    "An Oxford Martin School project that seeks to reform the concentration of power on the Web."
  ),
  resumeLink: true,
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Skills Section

const skillsSection = {
  title: "What we do",
  subTitle: "Our missions",
  skills: [
    emoji(
      "⚡ Data Autonomy: How can we support individuals to control, manage, maintain and use personal data?"
    ),
    emoji("⚡ Data Privacy: How can we provide privacy-preserving machine learning (PPML) methods that can perform AI training in a decentralised way?"),
    emoji(
      "⚡ Accountability: How can we develop methods to assess whether AI or algorithmic decision making is fair, equitable and complies with regulatory requirements?"
    ),
    emoji(
      "⚡ Data Sharing: How can we explore new institutional and legal constructs within which to hold data or algorithmic outputs? "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // 
  ],
  display: true // Set false to hide this section, defaults to true
};


// People Section

const peopleSection = {
  title: "Who we are",
  subTitle: "A multidisciplinary team of researchers",
  people1: [
    "Co-investigators:",
    emoji(
      "⚡ Professor Sir Nigel Shadbolt, University of Oxford"
    ),
    emoji(
      "⚡ Dr Jun Zhao, University of Oxford"
    ),
    emoji(
      "⚡ Professor Manolis Mavrikis, University College London"
    ),
    emoji(
      "⚡ Dr Carina Prunkl, University of Oxford"
    ),
    emoji(
      "⚡ Professor Kaśka Porayska-Pomsta, University College London"
    ),
    emoji(
      "⚡ Professor Wayne Holmes, University College London"
    ),
    emoji(
      "⚡ Baroness Beeban Kidron, 5Rights Foundation"
    ),

  ],
  people2: [
    "Researchers:",
    emoji(
      "⚡ Dr Leslye Dias Duran, University of Oxford"
    ),
    emoji(
      "⚡ Vidminas Vizgirda, University College London and University of Oxford"
    ),
    emoji(
      "⚡ Dr Isobel Voysey, University of Oxford"
    ),
    "Associated researchers:",
    emoji(
      "⚡ Dr Zaki Pauzi, University College London"
    ),
    emoji(
      "⚡ Dr Sarah Turner, University College London"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  display: true // Set false to hide this section, defaults to true
};

const blogSection = { // TODO: cap to first 5 blogs and add "see more" link to blog page
  title: "News",
  subtitle: "Read our latest updates",
  display: true, // Set false to hide this section, defaults to true
  displayMediumBlogs: "false", // Set true or false to display Medium blogs, defaults to false
  // Blog slugs: metadata is loaded from markdown frontmatter in /public/content/blog/<slug>.md
  blogSlugs: [
    "youth-prism-first",
    "youth-advisory-group-kickoff",
    "agency-lit-review",
    "white-paper-2",
    "royal-society-2026",
    "chi-workshop-2026",
    "funding-youth-advisory",
    "study-genai",
    "white-paper"
  ]
};

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};



export {
  splashScreen,
  illustration,
  greeting,
  skillsSection,
  peopleSection,
  blogSection,
};
