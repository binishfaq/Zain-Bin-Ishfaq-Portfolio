// Import project images
import ecommerceImg from '../assets/projects/ecommerce.png';
import loginImg from '../assets/projects/login.png';
import internshipImg from '../assets/projects/decodelab.png';
import devblogImg from '../assets/projects/devblog.png';

// Projects data
export const projectsData = [
  {
    id: 1,
    title: "Full-Stack E-commerce Website",
    description: "Complete online store with product management, cart system, payment integration, and admin dashboard.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>This is a full-featured e-commerce platform built from scratch. It provides a complete online shopping experience with product management, cart functionality, and order processing.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Product Management:</strong> Add, edit, delete, and categorize products</li>
        <li><strong>Shopping Cart:</strong> Add/remove items, update quantities, calculate totals</li>
        <li><strong>Order Processing:</strong> Place orders, track status, view order history</li>
        <li><strong>Payment Integration:</strong> Secure payment processing</li>
        <li><strong>Admin Dashboard:</strong> Manage products, orders, and users</li>
        <li><strong>JWT Authentication:</strong> Secure login and registration</li>
      </ul>

      <h2>Technical Implementation</h2>
      <ul>
        <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+)</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MySQL with proper schema design</li>
        <li><strong>Authentication:</strong> JWT for secure API access</li>
      </ul>

      <h2>What I Learned</h2>
      <ul>
        <li>Building RESTful APIs with proper error handling</li>
        <li>Database design and management with MySQL</li>
        <li>Implementing secure authentication and authorization</li>
        <li>Creating responsive and user-friendly interfaces</li>
      </ul>
    `,
    image: ecommerceImg,
    githubLink: "https://github.com/binishfaq/Full-Stack-E-commerce-Website",
    technologies: ["HTML", "CSS", "Node.js", "MySQL", "Express"]
  },
  {
    id: 2,
    title: "DevBlog – Full Stack Blog Application",
    description: "A full-featured blog platform built with the MERN stack. Includes user authentication, blog post management, a rich text editor, and a personal dashboard for content creators.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>DevBlog is a complete blog platform where users can create, manage, and share their content. It's built with the MERN stack and features a modern, responsive design.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>User Authentication:</strong> Secure registration and login with JWT, password hashing with bcrypt</li>
        <li><strong>Blog Management:</strong> Create, edit, delete, and publish posts with full CRUD operations</li>
        <li><strong>Rich Text Editor:</strong> TipTap editor for formatting content with images and links</li>
        <li><strong>User Dashboard:</strong> Statistics, post management, and profile editing</li>
        <li><strong>Comments & Likes:</strong> Engage with content through comments and likes</li>
        <li><strong>Categories & Tags:</strong> Organize content effectively with categories and tags</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React 18, Vite, Tailwind CSS, TipTap Editor, React Router v6</li>
        <li><strong>Backend:</strong> Node.js, Express.js, JWT Authentication, bcrypt</li>
        <li><strong>Database:</strong> MongoDB with Mongoose ODM</li>
        <li><strong>Deployment:</strong> Vercel (Frontend & Backend), MongoDB Atlas</li>
      </ul>

      <h2>What I Learned</h2>
      <ul>
        <li>Building RESTful APIs with proper error handling and validation</li>
        <li>Implementing secure authentication with JWT and password hashing</li>
        <li>Managing state in React with Context API</li>
        <li>Deploying full-stack applications to Vercel</li>
        <li>Working with MongoDB and Mongoose</li>
      </ul>
    `,
    image: devblogImg,
    githubLink: "https://github.com/binishfaq/DevBlog",
    liveLink: "https://client-black-six-10.vercel.app",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"]
  },
  {
    id: 3,
    title: "Employee Management System",
    description: "Professional projects and assignments completed during internship at DeCodesLab.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>An Employee Management System developed during my internship at DeCodesLab. This project demonstrates professional development practices and team collaboration.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Employee Dashboard:</strong> View and manage employee information</li>
        <li><strong>Task Management:</strong> Create and assign tasks to employees</li>
        <li><strong>Attendance Tracking:</strong> Monitor employee attendance</li>
        <li><strong>Department Management:</strong> Organize employees by department</li>
        <li><strong>User Authentication:</strong> Secure login for employees</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> JavaScript, React.js</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB</li>
      </ul>
    `,
    image: internshipImg,
    githubLink: "https://github.com/binishfaq/DeCodesLab-Internship",
    technologies: ["JavaScript", "React.js"]
  },
  {
    id: 4,
    title: "Login System",
    description: "Secure authentication system with user registration, login, password reset, and session management.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>A complete authentication system that provides secure user management with JWT tokens and password hashing.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>User Registration:</strong> Create new accounts with validation</li>
        <li><strong>User Login:</strong> Secure login with JWT token generation</li>
        <li><strong>Password Reset:</strong> Reset password functionality</li>
        <li><strong>Session Management:</strong> Manage user sessions securely</li>
        <li><strong>Protected Routes:</strong> Secure routes with JWT authentication</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React.js</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Authentication:</strong> JWT, bcrypt</li>
      </ul>
    `,
    image: loginImg,
    githubLink: "https://github.com/binishfaq/login-system-",
    technologies: ["JWT", "BCrypt", "Express", "MongoDB"]
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