import{
mobile,
backend,
creator,
web,
javascript,
typescript,
html,
css,
reactjs,
redux,
tailwind,
nodejs,
mongodb,
git,
figma,
docker,
meta,
internshala,
verzeo,
shopify,
carrent,
jobit,
a1,a2,a3,
mst1,mst2,
tripguide,so1,so2,
studentportal,sp1,sp2,
threejs,
} from "../assets";

export const navLinks = [
{
  id: "about",
  title: "About",
},
{
  id: "work",
  title: "Work",
},
{
  id: "contact",
  title: "Contact",
},
];

const services = [
{
  title: "Web Developer",
  icon: web,
},
{
  title: "React Native Developer",
  icon: mobile,
},
{
  title: "Backend Developer",
  icon: backend,
},
{
  title: "Machine Learning Engineer",
  icon: creator,
},
];

const technologies = [
{
  name: "HTML 5",
  icon: html,
},
{
  name: "CSS 3",
  icon: css,
},
{
  name: "JavaScript",
  icon: javascript,
},
{
  name: "TypeScript",
  icon: typescript,
},
{
  name: "React JS",
  icon: reactjs,
},
{
  name: "Redux Toolkit",
  icon: redux,
},
{
  name: "Tailwind CSS",
  icon: tailwind,
},
{
  name: "Node JS",
  icon: nodejs,
},
{
  name: "MongoDB",
  icon: mongodb,
},
{
  name: "Three JS",
  icon: threejs,
},
{
  name: "git",
  icon: git,
},
{
  name: "figma",
  icon: figma,
},
{
  name: "docker",
  icon: docker,
},
];

const experiences = [
{
  title: "Machine Learning Engineer",
  company_name: "Verzeo",
  icon: verzeo,
  iconBg: "#383E56",
  date: "March 2020 - May 2023",
  points: [
    "Developed a stock value prediction web application using Transformer and Co-CPC models, enhancing prediction accuracy for temporal stock datasets.",
   " Optimized data preprocessing by removing duplicates and null values in car-sales datasets, improving model accuracy to 89% using Logistic Regression, Support Vector Machine, and Linear Regression.",
    "Collaborated in a team to build, train, and deploy supervised learning models, improving overall system efficiency by 30%. ",
    "Conducted extensive data validation and feature engineering, ensuring clean datasets for robust model training. ",      
    

  ],
},
{
  title: "Full Stack Website Developer",
  company_name: "Internshala",
  icon: internshala,
  iconBg: "#E6DEDD",
  date: "Jan 2021 - Feb 2022",
  points: [
"Developed and deployed full-stack applications using MongoDB, Angular.js, and Node.js, improving system performance and usability.",
"Engineered a deep learning model for face detection with 92% accuracy, leveraging CNN, RCNN, and OpenCV for real-time detection and recognition.",
"Designed and optimized a cricket score prediction model, increasing prediction efficiency by 15%, and deployed it on Heroku for real-time access.",
"Built scalable RESTful APIs for seamless data exchange and ensured system security through authentication and authorization techniques.",
"Integrated Stripe payment gateway for a tour booking platform, enhancing user experience and transaction security.",
"Conducted rigorous unit testing and debugging using Jest and Postman, leading to a 30% reduction in system errors and improved reliability.",
  ],
},
];

const testimonials = [
{
  testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  name: "Sara Lee",
  designation: "CFO",
  company: "Acme Co",
  image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
  testimonial:
    "I've never met a web developer who truly cares about their clients' success like Rick does.",
  name: "Chris Brown",
  designation: "COO",
  company: "DEF Corp",
  image: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
  testimonial:
    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  name: "Lisa Wang",
  designation: "CTO",
  company: "456 Enterprises",
  image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
{
  name: "Student Portal",
  description:
  "An interface that acts as a placement portal for students and also an admin panel providing functionality to add and edit jobs.It also provides an option to create resume for students.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "postgresql",
      color: "green-text-gradient",
    },
    {
      name: "nodejs",
      color: "pink-text-gradient",
    },
  ],
  images: [studentportal,sp1,sp2],
  source_code_link: "https://github.com/mahima-devandla/student_portal",
},
{
  name: "Sorting Visualizer",
  description:
    "•Developed an interactive web-based sorting visualizer using HTML, CSS, and JavaScript, allowing users to visualize the step-by-step execution of sorting algorithms.",
  tags: [
    {
      name: "javascript",
      color: "blue-text-gradient",
    },
    {
      name: "restapi",
      color: "green-text-gradient",
    },
    {
      name: "scss",
      color: "pink-text-gradient",
    },
  ],
  images:[ tripguide,so1,so2],
  source_code_link: "https://github.com/mahima-devandla/sorting-visualizer",
  live_demo_link: "https://mahima-devandla.github.io/sorting-visualizer/",
},
{
  name: "MST" ,
  description:
    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  tags: [
    {
      name: "reactjs",
      color: "blue-text-gradient",
    },
    {
      name: "three.js",
      color: "green-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
  ],
  images: [jobit,mst1,mst2],
  source_code_link: "https://github.com/mahima-devandla/mst-visualization",
  live_demo_link: "https://mahima-devandla.github.io/mst-visualization/",
},
{ 
  name: "Wild Animal Detection and Repellent System" ,
  description:
    "•	This project detects the wild animals in the farms through a web camera and sends alerts like buzzer, light and a message to the farmer that a wild animal is detected in the field.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "ardino-uno",
      color: "green-text-gradient",
    },
    {
      name: "gsm module",
      color: "pink-text-gradient",
    },
  ],
  images: [a1,a2,a3],
  source_code_link: "https://github.com/mahima-devandla/Animal-Detection-Using-Deep-Learning",
},

];

export { services, technologies, experiences, testimonials, projects };