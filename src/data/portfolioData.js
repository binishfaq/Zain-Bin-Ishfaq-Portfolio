// Import project images
import ecommerceImg from '../assets/projects/ecommerce.png';
import loginImg from '../assets/projects/login.png';
import internshipImg from '../assets/projects/decodelab.png';
import smartfarmImg from '../assets/projects/farm.jpg';

// Projects data
export const projectsData = [
  {
    id: 1,
    title: "Full-Stack E-commerce Website",
    description: "Complete online store with product management, cart system, payment integration, and admin dashboard.",
    image: ecommerceImg,
    githubLink: "https://github.com/binishfaq/Full-Stack-E-commerce-Website",
    technologies: ["HTML","CSS", "Node.js", "Mysql", "Express"]
  },
  {
    id: 2,
    title: "Login System",
    description: "Secure authentication system with user registration, login, password reset, and session management.",
    image: loginImg,
    githubLink: "https://github.com/binishfaq/login-system-",
    technologies: ["JWT", "BCrypt", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "Employee Managnment Sytem",
    description: "Professional projects and assignments completed during internship at DeCodesLab.",
    image: internshipImg,
    githubLink: "https://github.com/binishfaq/DeCodesLab-Internship",
    technologies: ["JavaScript", "React.js", ]
  },
  {
    id: 4,
    title: "Smart Farm Manager",
    description: "A Mobile App where a farmer manage its finance",
    image: smartfarmImg,
    githubLink: "https://github.com/binishfaq/Smart-Farm-Manager",
    technologies: ["React Native", "JavaScript", "FireBase"]
  }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/binishfaq"},
  { name: "LinkedIn", url: "https://linkedin.com/in/zainbinishfaq"},
  { name: "Email", url: "mailto:zainbinishfaq@gmail.com"}
];

export const personalInfo = {
  name: "Zain Bin Ishfaq",
  role: "MERN Stack Developer",
  tagline: "Turning ideas into interactive digital experiences.",
  description: "I'm a passionate MERN Stack Developer with a keen eye for design and a love for efficient code. I craft beautiful, responsive websites that solve real problems."
};