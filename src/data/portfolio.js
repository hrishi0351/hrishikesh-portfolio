// All portfolio content lives here. Edit this file to update the site.
// Only add project links once you have real URLs.

export const profile = {
  name: 'Hrishikesh Shelar',
  title: 'Full-Stack Developer',
  subtitle: 'Building Modern Web Applications & Industrial Automation Solutions.',
  location: 'Ratnagiri, India',
  email: 'hrishikeshshelar351@gmail.com',
  phone: '8805926555',
  phoneHref: '+918805926555',
  linkedin: 'https://linkedin.com/in/hrishikesh-shelar-37469b257',
  resumePath: '/Hrishikesh_Shelar_Resume.pdf',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  statement:
    'I build full-stack web applications with React and Node.js, and connect them to live plant and machine data.',
  paragraph:
    'I have 2.5+ years of experience building React, Node.js and REST API applications, plus SCADA HMI and real-time IoT integrations using MQTT and OPC UA. I focus on role-based access, JWT security, performance tuning and end-to-end testing, and I work in Agile sprints with developers, QA and business teams.',
  highlights: [
    'Improved front-end load speed by 40% through code splitting and caching.',
    'Developed 10+ RESTful APIs, reducing data-fetching time by 25%.',
    'Cut backend data-refresh time from 10 to 4 seconds on a real-time monitoring app.',
  ],
};

export const skills = [
  { name: 'React.js', icon: 'Atom', detail: 'Responsive interfaces with code splitting and caching.' },
  { name: 'JavaScript', icon: 'Braces', detail: 'The core language behind my MERN applications.' },
  { name: 'Node.js', icon: 'Server', detail: 'Backend services that power REST APIs.' },
  { name: 'Express.js', icon: 'Route', detail: 'Routing for data acquisition, alerts and reporting.' },
  { name: 'REST APIs', icon: 'Plug', detail: 'Built 10+ RESTful APIs in my current role.' },
  { name: 'MySQL', icon: 'Database', detail: 'Relational data with optimized SQL queries.' },
  { name: 'MS SQL Server', icon: 'HardDrive', detail: 'Relational database development.' },
  { name: 'Socket.IO', icon: 'Radio', detail: 'Realtime communication between client and server.' },
  { name: 'JWT & RBAC', icon: 'ShieldCheck', detail: 'Token authentication and role-based access control.' },
  { name: 'MQTT & OPC UA', icon: 'Cpu', detail: 'Industrial data integration for realtime IoT systems.' },
  { name: 'SCADA & HMI', icon: 'Gauge', detail: 'HMI screens built in Movicon and Siemens TIA Portal.' },
  { name: 'Git & Postman', icon: 'GitBranch', detail: 'Version control and API testing.' },
];

export const experience = [
  {
    role: 'Software Developer',
    company: 'Protovec Technologies Pvt. Ltd.',
    location: 'Ratnagiri, India',
    period: 'August 2024 – Present',
    points: [
      'Built and maintained 3+ full-stack MERN applications, improving performance by 20–30%.',
      'Developed 10+ RESTful APIs, reducing data-fetching time by 25%.',
      'Implemented JWT authentication and role-based access control (RBAC), reducing security vulnerabilities by 30%.',
      'Improved front-end load speed by 40% through code splitting, caching and image optimization.',
      'Designed real-time HMI screens for HAL Line B using Movicon 11.6 and Siemens TIA Portal V18.',
      'Worked in Agile sprints with 5+ developers, delivering milestones 10% faster than planned.',
    ],
  },
  {
    role: 'Full-Stack Web Developer Intern',
    company: 'Protovec Technologies Pvt. Ltd.',
    location: 'Ratnagiri, India',
    period: 'February 2024 – August 2024',
    points: [
      'Built and deployed a real-time boiler monitoring app for ONGC using React, Node.js, Express, Nginx and SQL.',
      'Integrated SCADA sensor data for 15+ parameters and built 8+ REST APIs for data acquisition, alerts and reporting.',
      'Cut backend data-refresh time from 10 to 4 seconds (60%).',
      'Automated repetitive boiler operations, saving 5+ hours weekly.',
    ],
  },
];

export const projects = [
  {
    name: 'IndiSCADA',
    subtitle: 'Real-Time Industrial SCADA Platform',
    description:
      'A multilingual SCADA platform with live plant monitoring, historical reporting, role-based access and high-performance data visualization.',
    tags: ['SCADA', 'Live monitoring', 'Historical reporting', 'RBAC', 'Data visualization'],
  },
  {
    name: 'Rossari IoT Automation System',
    subtitle: 'Machine monitoring and production analytics',
    description:
      'An end-to-end machine monitoring and production analytics platform built with PLCs, MQTT, Python, SQL and a React and Node.js web application.',
    tags: ['PLC', 'MQTT', 'Python', 'SQL', 'React.js', 'Node.js'],
  },
  {
    name: 'Prakalp',
    subtitle: 'Task Management Platform',
    description:
      'A workflow automation and employee tracking system with JWT authentication, built on a React, Node.js and MySQL architecture.',
    tags: ['React.js', 'Node.js', 'MySQL', 'JWT'],
  },
];

export const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    school: 'Finolex Academy of Management and Technology',
    period: '2022 – 2024',
  },
  {
    degree: 'B.Sc. (Information Technology)',
    school: 'S.P. Hegshetye College of Arts, Commerce & Science',
    period: '2019 – 2022',
  },
];
