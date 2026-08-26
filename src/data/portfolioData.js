// Import project images
import ecommerceImg from '../assets/projects/ecommerce.png';
import loginImg from '../assets/projects/login.png';
import internshipImg from '../assets/projects/decodelab.png';
import devblogImg from '../assets/projects/devblog.png';
import urlShortenerImg from '../assets/projects/url.png';
import expenseTrackerImg from '../assets/projects/expense-tracker.png';
import ProductCatalogImg from '../assets/projects/product-catalog.png';
import employeeManagementImg from "../assets/projects/employee.png";
import syncChatImg from "../assets/projects/syncchat.png";
// Projects data
export const projectsData = [
  {
    id: 1,
    title: "Full-Stack E-commerce Website",
    description:
      "Complete online store with product management, cart system, payment integration, and admin dashboard.",
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
        <li><strong>Database:</strong> MySQL</li>
        <li><strong>Authentication:</strong> JWT</li>
      </ul>
    `,
    image: ecommerceImg,
    githubLink:
      "https://github.com/binishfaq/Full-Stack-E-commerce-Website",
    technologies: ["HTML", "CSS", "Node.js", "MySQL", "Express"]
  },

  {
    id: 2,
    title: "DevBlog – Full Stack Blog Application",
    description:
      "A full-featured blog platform built with the MERN stack featuring authentication, blog management, rich text editing, comments, likes, categories, and a personal dashboard.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>DevBlog is a complete blog platform where users can create, manage, and share their content. It is built using the MERN stack with a modern responsive interface.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>User Authentication:</strong> Secure registration and login with JWT</li>
        <li><strong>Blog Management:</strong> Create, edit, delete, and publish posts</li>
        <li><strong>Rich Text Editor:</strong> TipTap editor for content formatting</li>
        <li><strong>User Dashboard:</strong> Statistics, post management, and profile editing</li>
        <li><strong>Comments & Likes:</strong> User engagement features</li>
        <li><strong>Categories & Tags:</strong> Organize blog content</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React, Vite, Tailwind CSS, TipTap, React Router</li>
        <li><strong>Backend:</strong> Node.js, Express.js, JWT, bcrypt</li>
        <li><strong>Database:</strong> MongoDB with Mongoose</li>
        <li><strong>Deployment:</strong> Vercel and MongoDB Atlas</li>
      </ul>
    `,
    image: devblogImg,
    githubLink:
      "https://github.com/binishfaq/DevBlog",
    liveLink:
      "https://client-black-six-10.vercel.app",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT"
    ]
  },

  // ⭐ NEW #3 PROJECT
  {
    id: 3,
    title: "Employee Management System",
    description:
      "A full-stack employee management platform with secure authentication, employee profiles, company management, RESTful APIs, and production deployment.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>
        Employee Management System is a full-stack MERN application designed
        to manage employee and organizational information through a centralized
        web platform. The project uses a separate React frontend and
        Node.js/Express backend connected to MongoDB.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>User Registration & Login:</strong> Secure account creation and authentication</li>
        <li><strong>JWT Authentication:</strong> Token-based authentication for protected resources</li>
        <li><strong>Employee Management:</strong> Manage employee information and records</li>
        <li><strong>Profile Management:</strong> Create and update employee profiles</li>
        <li><strong>Company Management:</strong> Manage company-related information</li>
        <li><strong>CRUD Operations:</strong> Create, read, update, and delete application data</li>
        <li><strong>Protected Routes:</strong> Authentication middleware for secure API access</li>
        <li><strong>Input Validation:</strong> Request validation using express-validator</li>
        <li><strong>Image Upload:</strong> File upload functionality using Multer</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React.js, Vite, Tailwind CSS, Axios, React Router</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB with Mongoose</li>
        <li><strong>Authentication:</strong> JWT and bcryptjs</li>
        <li><strong>Validation:</strong> Express Validator</li>
        <li><strong>File Upload:</strong> Multer</li>
        <li><strong>Deployment:</strong> Vercel</li>
      </ul>

      <h2>Project Architecture</h2>
      <ul>
        <li>React frontend for the user interface</li>
        <li>Express REST API for backend operations</li>
        <li>MongoDB for persistent data storage</li>
        <li>JWT middleware for authentication</li>
        <li>Separate client and server architecture</li>
      </ul>

      <h2>Deployment</h2>
      <ul>
        <li><strong>Frontend:</strong> Deployed on Vercel</li>
        <li><strong>Backend:</strong> Deployed on Vercel</li>
        <li><strong>Database:</strong> MongoDB Atlas</li>
      </ul>

      <h2>What I Learned</h2>
      <ul>
        <li>Building a complete MERN stack application</li>
        <li>Designing and consuming RESTful APIs</li>
        <li>Implementing JWT authentication and protected routes</li>
        <li>Working with MongoDB and Mongoose</li>
        <li>Handling file uploads with Multer</li>
        <li>Deploying frontend and backend applications with Vercel</li>
        <li>Debugging production-specific issues such as case-sensitive imports</li>
      </ul>
    `,
    image: employeeManagementImg,
    githubLink:
      "https://github.com/binishfaq/Syntecxhub_Employee_Management_system",
    liveLink:
      "https://syntecxhub-employee-management-syst-one.vercel.app",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Multer"
    ]
  },

  // #4
  {
    id: 4,
    title: "Expense Tracker - Full Stack Application",
    description:
      "A comprehensive expense tracking application with income/expense management, budget tracking, and interactive charts. Built with the MERN stack.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>
        A full-stack expense tracker application that helps users manage
        their finances efficiently. Track income and expenses, set budgets,
        and visualize spending patterns with interactive charts.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Add Transactions:</strong> Add income and expense transactions</li>
        <li><strong>Transaction History:</strong> View and manage transactions</li>
        <li><strong>Budget Management:</strong> Set monthly budgets</li>
        <li><strong>Interactive Charts:</strong> Visualize spending patterns</li>
        <li><strong>Financial Summary:</strong> View income, expenses, and balance</li>
        <li><strong>Category Management:</strong> Manage expense categories</li>
        <li><strong>Dark/Light Mode:</strong> Toggle between themes</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React, Vite, Tailwind CSS, Recharts</li>
        <li><strong>Backend:</strong> Node.js, Express.js, JWT, bcrypt</li>
        <li><strong>Database:</strong> MongoDB with Mongoose</li>
        <li><strong>State Management:</strong> React Context API</li>
      </ul>
    `,
    image: expenseTrackerImg,
    githubLink:
      "https://github.com/binishfaq/Expense-Trcaker",
    liveLink:
      "https://expense-trcaker-1fcu.vercel.app",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Recharts",
      "JWT"
    ]
  },

  {
    id: 9,
    title: "URL Shortener – Full Stack Application",
    description:
      "A complete URL shortening service built with the MERN stack. Shorten long URLs, track clicks, and manage links through a modern interface.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>
        A full-stack URL shortener that converts long URLs into short,
        shareable links with click tracking and URL management.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Create Short URLs:</strong> Generate unique short codes</li>
        <li><strong>Redirect:</strong> Redirect users to original URLs</li>
        <li><strong>Click Tracking:</strong> Track visits to shortened URLs</li>
        <li><strong>Delete URLs:</strong> Remove unwanted links</li>
        <li><strong>Copy to Clipboard:</strong> Quickly copy short URLs</li>
        <li><strong>URL Management:</strong> Manage shortened links and statistics</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React, Vite, React Icons, CSS</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB Atlas with Mongoose</li>
        <li><strong>API Testing:</strong> Postman</li>
      </ul>
    `,
    image: urlShortenerImg,
    githubLink:
      "https://github.com/binishfaq/ShorternerUrl",
    liveLink:
      "https://your-demo-url.com",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Vite",
      "Axios",
      "CSS"
    ]
  },

  // #6
  {
    id: 6,
    title: "Internship Projects – DeCodesLab",
    description:
      "Professional projects and assignments completed during my web development internship at DeCodesLab.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>
        A collection of projects and development tasks completed during
        my internship at DeCodesLab, focusing on practical web development,
        frontend implementation, and backend integration.
      </p>

      <h2>What I Learned</h2>
      <ul>
        <li>Working in a professional development environment</li>
        <li>Building responsive web interfaces</li>
        <li>Working with JavaScript and React</li>
        <li>Understanding real-world project workflows</li>
        <li>Using Git and GitHub for version control</li>
      </ul>
    `,
    image: internshipImg,
    githubLink:
      "https://github.com/binishfaq/DeCodesLab-Internship",
    technologies: ["JavaScript", "React.js"]
  },

  // #7
  {
    id: 7,
    title: "Login System",
    description:
      "Secure authentication system with user registration, login, password reset, and protected routes.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>
        A complete authentication system focused on secure user management,
        JWT authentication, password hashing, and protected routes.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>User Registration:</strong> Create accounts with validation</li>
        <li><strong>User Login:</strong> Secure authentication</li>
        <li><strong>Password Reset:</strong> Password recovery functionality</li>
        <li><strong>Session Management:</strong> Secure user sessions</li>
        <li><strong>Protected Routes:</strong> JWT-based route protection</li>
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
    githubLink:
      "https://github.com/binishfaq/login-system-",
    technologies: [
      "JWT",
      "BCrypt",
      "Express",
      "MongoDB"
    ]
  },

  // #8
  {
    id: 8,
    title: "Product Catalog Management System",
    description:
      "A full-stack product catalog management system with product and category management, authentication, admin dashboard, image uploads, search, and filtering.",
    extendedDescription: `
      <h2>Project Overview</h2>
      <p>
        A full-stack product catalog management system built with the
        MERN stack. It provides secure authentication, product and category
        management, image uploads, search and filtering, and an admin dashboard.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Authentication:</strong> JWT-based login and protected routes</li>
        <li><strong>Product Management:</strong> Add, edit, delete, and view products</li>
        <li><strong>Category Management:</strong> Create and manage categories</li>
        <li><strong>Admin Dashboard:</strong> Product management and statistics</li>
        <li><strong>Image Upload:</strong> Product image upload using Multer</li>
        <li><strong>Search & Filtering:</strong> Search and filter products</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React.js, Vite, Tailwind CSS, Axios</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB, Mongoose</li>
        <li><strong>Authentication:</strong> JWT, bcrypt</li>
        <li><strong>File Upload:</strong> Multer</li>
      </ul>
    `,
    image: ProductCatalogImg,
    githubLink:
      "https://github.com/binishfaq/Syntecxhub_Product_Catalog_Management",
    liveLink:
      "https://syntecxhub-product-catalog-manageme-nu.vercel.app",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Multer"
    ]
  },
  {
  id: 5,
  title: "SyncChat – Real-Time Chat Application",
  description:
    "A full-stack real-time chat application with secure authentication, user search, profiles, online status, and instant messaging powered by Socket.IO.",
  extendedDescription: `
    <h2>Project Overview</h2>
    <p>
      SyncChat is a full-stack real-time messaging application built with
      the MERN stack. It allows users to securely register, authenticate,
      find other users, and communicate through real-time messaging.
    </p>

    <h2>Key Features</h2>
    <ul>
      <li><strong>User Authentication:</strong> Secure registration and login</li>
      <li><strong>JWT Authentication:</strong> Protected API routes and user sessions</li>
      <li><strong>Real-Time Messaging:</strong> Instant communication using Socket.IO</li>
      <li><strong>User Search:</strong> Search and find registered users</li>
      <li><strong>User Profiles:</strong> View and manage profile information</li>
      <li><strong>Online Status:</strong> Real-time user connection status</li>
      <li><strong>Chat Management:</strong> Create and manage conversations</li>
      <li><strong>Responsive UI:</strong> Modern interface for desktop and mobile devices</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Frontend:</strong> React.js, Vite, Tailwind CSS</li>
      <li><strong>Backend:</strong> Node.js, Express.js</li>
      <li><strong>Database:</strong> MongoDB with Mongoose</li>
      <li><strong>Real-Time Communication:</strong> Socket.IO</li>
      <li><strong>Authentication:</strong> JWT and bcryptjs</li>
      <li><strong>API Communication:</strong> Axios</li>
    </ul>

    <h2>Project Architecture</h2>
    <ul>
      <li>React frontend for the user interface</li>
      <li>Express REST API for backend operations</li>
      <li>MongoDB for persistent data storage</li>
      <li>Socket.IO for real-time communication</li>
      <li>JWT middleware for protected resources</li>
      <li>Separate frontend and backend architecture</li>
    </ul>

    <h2>Deployment</h2>
    <ul>
      <li><strong>Frontend:</strong> Deployed on Vercel</li>
      <li><strong>Backend:</strong> Connected through production API</li>
      <li><strong>Database:</strong> MongoDB Atlas</li>
    </ul>

    <h2>What I Learned</h2>
    <ul>
      <li>Building real-time applications with Socket.IO</li>
      <li>Implementing JWT authentication</li>
      <li>Developing RESTful APIs with Express</li>
      <li>Working with MongoDB and Mongoose</li>
      <li>Managing real-time user connections</li>
      <li>Connecting React with a real-time Node.js backend</li>
      <li>Deploying full-stack applications</li>
    </ul>
  `,
  image: syncChatImg,
  githubLink:
    "https://github.com/binishfaq/Syntecxhub_Real_time_chat",
  liveLink:
    "https://syncchat-real-time-chat-app.vercel.app/",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "Tailwind CSS",
    "JWT"
  ]
},
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/binishfaq"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/zainbinishfaq"
  },
  {
    name: "Email",
    url: "mailto:zainbinishfaq@gmail.com"
  }
];

export const personalInfo = {
  name: "Zain Bin Ishfaq",
  role: "MERN Stack Developer",
  tagline: "Turning ideas into interactive digital experiences.",
  description:
    "I'm a passionate MERN Stack Developer with a keen eye for design and a love for efficient code. I craft beautiful, responsive websites that solve real problems."
};