/* ============================================
   ALL PORTFOLIO CONTENT — Single Source of Truth
   ============================================ */

export const personalInfo = {
  name: 'Raj',
  fullName: 'Raj Kamal Mehta',

  headline: 'Building intelligent mobile experiences with React Native.',
  subheadline: 'React Native Developer • Full Stack Engineer • AI Builder',
  about: `Recent Computer Science graduate passionate about building production-ready mobile applications and AI-powered software. My experience spans React Native, Full Stack Development, and Machine Learning — with an IEEE-supported research publication, two industry internships, and a track record of shipping real products from idea to deployment.`,
  email: 'cheerychuckle07@gmail.com',
  phone: '+91-7632913157',
  location: 'Raipur, India',
  resumeFile: '/resume.pdf',
  social: {
    github: 'https://github.com/Rajkamal08',
    linkedin: 'https://linkedin.com/in/raj-kamal-mehta-105320269',
    email: 'mailto:cheerychuckle07@gmail.com',
  },
};

export const stats = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '1', label: 'IEEE Publication' },
  { value: '2', label: 'Industry Internships' },
  { value: '4', label: 'Hackathons' },
];

export const experience = [
  {
    id: 'amen',
    role: 'Mobile & Web Development Intern',
    company: 'AMSN Syntax IT Solution Pvt. Ltd.',
    location: 'New Delhi, India',
    period: 'Jan 2026 — Apr 2026',
    description: [
      'Tech stacks used: React Native, React.js, REST APIs',
      'Engineered responsive web and mobile screen layouts using React.js and React Native, translating design requirements into highly intuitive and user-friendly interfaces.',
      'Diagnosed and resolved critical UI/UX bugs across existing web applications, improving cross-browser compatibility and overall platform stability.',
    ],
    tech: ['React Native', 'React.js', 'REST APIs'],
  },
  {
    id: 'iiit',
    role: 'Machine Learning (ML) & Deep Learning Trainee',
    company: 'IIIT Naya Raipur',
    location: 'Raipur, India',
    period: 'July 2025 — Aug 2025',
    description: [
      'Tech stacks used: Python, React Native, FastAPI, Kotlin, Scikit-Learn',
      'Architected a cardiovascular health application extracting raw PPG optical signals directly from a smartphone camera using custom Kotlin Native hardware bridges.',
      'Engineered a clinical Machine Learning pipeline applying Butterworth DSP filters and extracting 30+ statistical features to achieve 95% classification accuracy with a Random Forest model deployed on FastAPI.',
      'Co-authored IEEE-supported research on PPG signal quality assessment, published on TechRxiv (2025).',
    ],
    tech: ['Python', 'React Native', 'FastAPI', 'Kotlin', 'Scikit-Learn'],
  },
];

export const skills = [
  {
    category: 'Mobile Development',
    icon: 'Smartphone',
    items: ['React Native', 'Expo', 'Native CLI', 'React Navigation'],
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    items: ['React.js', 'Redux', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'AI / ML',
    icon: 'Brain',
    items: ['Python', 'TensorFlow', 'PyTorch', 'XGBoost', 'Scikit-learn', 'SHAP', 'RAG', 'LLMs', 'ChromaDB', 'NLP'],
  },
  {
    category: 'Tools & DevOps',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Firebase', 'Postman', 'Stripe', 'VS Code'],
  },
];

export const projects = [
  {
    id: 'mitticard',
    title: 'MittiCard',
    subtitle: 'AI Soil Health Advisory App',
    tagline: ['Scan.', 'Analyze.', 'Recommend.'],
    description: 'AI-powered mobile app that scans ICAR Soil Health Cards using Groq Vision OCR and delivers crop-specific fertilizer recommendations with cost estimates in Hindi and English.',
    problem: 'Indian farmers struggle to interpret complex soil health cards and determine optimal fertilizer usage for their specific crops.',
    solution: 'Built an intelligent mobile assistant that scans, parses, and explains soil health data — then recommends fertilizers with cost estimates in the farmer\'s language.',
    metrics: ['7 crops supported', 'NPK deficiency detection', 'Soil scoring 0–100', 'Bilingual Hindi/English'],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Groq Vision API', 'Firebase', 'Express.js'],
    github: 'https://github.com/Rajkamal08/MittiCard',
    year: '2026',
    featured: true,
    color: '#22C55E',
    image: '/projects/mitticard.png',
  },
  {
    id: 'bike-rental',
    title: 'Bike Rental Platform',
    subtitle: 'Vehicle Rental & Booking System',
    tagline: ['Book.', 'Ride.', 'Return.'],
    description: 'Cross-platform mobile application supporting end-to-end booking workflows, secure Stripe payments, and automated KYC via REST APIs.',
    problem: 'Bike rental services lack a seamless mobile booking experience with integrated payments and identity verification.',
    solution: 'Built a full-stack mobile platform with real-time availability, Stripe payments, JWT auth, and automated KYC — optimizing MongoDB schemas for 30% faster queries.',
    metrics: ['30% faster queries', 'Stripe payments', 'Automated KYC', 'End-to-end booking'],
    tech: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com/Rajkamal08/bike',
    year: '2025',
    featured: true,
    color: '#F59E0B',
    image: '/projects/bike_rental.png',
  },
  {
    id: 'ppg-signal',
    title: 'PPG Signal Assessment',
    subtitle: 'Clinical Machine Learning Pipeline',
    tagline: ['Extract.', 'Filter.', 'Assess.'],
    description: 'Smartphone-based Photoplethysmography (PPG) signal acquisition, DSP filtering, and quality grading using clinical Machine Learning.',
    problem: 'Medical-grade cardiovascular monitoring requires expensive, specialized hardware pulse oximeters which are highly inaccessible.',
    solution: 'Engineered a full-stack system extracting raw optical signals via custom Kotlin bridges, passing them through a Python backend with 4th-order Butterworth filters and a custom Mobile Domain Calibration layer to grade signal quality in real-time.',
    metrics: ['95% ML Accuracy', 'Real-time DSP', 'Mobile Calibration', 'Kotlin Native Bridge'],
    tech: ['React Native', 'Kotlin', 'FastAPI', 'Scikit-Learn', 'SciPy', 'Pandas'],
    github: 'https://github.com/Rajkamal08/PPG-Signal-Quality-Assessment',
    year: '2026',
    featured: true,
    color: '#E11D48',
    image: '/projects/ppg.png',
  },
  {
    id: 'contract-intelligence',
    title: 'AI Contract Intelligence',
    subtitle: 'Document Analyzer & Risk Scorer',
    tagline: ['Upload.', 'Analyze.', 'Score.'],
    description: 'Full-stack RAG platform to automate legal document analysis, using vector-based semantic search to extract critical clauses and generate automated risk scores.',
    problem: 'Legal document review is time-consuming and error-prone, requiring expensive expertise to identify critical clauses and liabilities.',
    solution: 'Architected a Retrieval-Augmented Generation platform with ChromaDB and Llama-3.3 that instantly extracts clauses and generates risk scores (0–100).',
    metrics: ['RAG-powered analysis', 'Risk scores 0–100', 'Structured JSON export', 'Semantic search'],
    tech: ['React', 'FastAPI', 'ChromaDB', 'Groq', 'Llama-3.3', 'SentenceTransformers'],
    github: 'https://github.com/Rajkamal08/rag-document-intelligence',
    year: '2025',
    featured: true,
    color: '#4F46E5',
    image: '/projects/contract.png',
  },
  {
    id: 'heart-failure',
    title: 'Heart Failure Prediction',
    subtitle: 'Clinical Prediction System',
    tagline: ['Predict.', 'Explain.', 'Report.'],
    description: 'XGBoost-based clinical prediction model with SHAP explainability on 11 biomarkers, deployed via interactive Streamlit dashboard.',
    problem: 'Manual heart failure risk assessment is slow and lacks transparency in how clinical features influence predictions.',
    solution: 'Developed an ML model with SHAP-based per-patient explainability and deployed an interactive dashboard with automated PDF health reports.',
    metrics: ['76.7% accuracy', '11 biomarkers', 'SHAP explainability', '50% less manual effort'],
    tech: ['Python', 'XGBoost', 'SHAP', 'Streamlit', 'Scikit-learn'],
    github: 'https://github.com/Rajkamal08/heart-failure-prediction',
    year: '2025',
    featured: false,
    color: '#EF4444',
    image: '/projects/heart_failure.png',
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Platform',
    subtitle: 'Full-Stack Ordering & Delivery',
    tagline: ['Order.', 'Track.', 'Deliver.'],
    description: 'Production-ready MERN-stack food delivery platform with JWT authentication, Stripe payment integration, and complete order lifecycle management.',
    problem: 'Need for a scalable food delivery system with secure payments and real-time order tracking.',
    solution: 'Built a full-stack platform with optimized API endpoints and MongoDB schemas supporting high concurrent order volumes.',
    metrics: ['Stripe integration', 'JWT auth', 'RESTful APIs', 'Full lifecycle'],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Express.js'],
    github: 'https://github.com/Rajkamal08/Food-del-main',
    year: '2024',
    featured: false,
    color: '#F97316',
    image: '/projects/food_delivery.png',
  },
];

export const publication = {
  title: 'PPG Signal Quality Assessment & Artifact Detection for Smartphone-based Monitoring',
  authors: 'R. K. Mehta et al.',
  platform: 'TechRxiv',
  badge: 'IEEE-Supported',
  year: '2025',
  abstract: 'A comprehensive signal processing pipeline for real-time PPG signal quality classification using SVM and Random Forest models, achieving 89.7% accuracy. Integrated with a React Native mobile application via Flask backend for live smartphone-based biomedical signal monitoring.',
  tech: ['Python', 'SVM', 'Random Forest', 'Flask', 'React Native', 'Signal Processing'],
  link: 'https://www.techrxiv.org/doi/full/10.36227/techrxiv.175756513.39439365/v1',
};

export const achievements = [
  {
    title: 'AI & ML Training Certification',
    org: 'Infosys Springboard',
    year: '2024',
    icon: 'Award',
    type: 'certification',
  },
  {
    title: 'ML & Deep Learning Internship Certificate',
    org: 'IIIT Naya Raipur',
    year: '2025',
    icon: 'GraduationCap',
    type: 'certification',
  },
  {
    title: 'Job-Ready MERN Full-Stack Web Development',
    org: '30 Days Coding',
    year: '2024',
    icon: 'Code',
    type: 'certification',
  },
  {
    title: 'IDEA-FIESTA Hackathon',
    org: 'Finalist',
    year: '2022',
    icon: 'Trophy',
    type: 'hackathon',
  },
  {
    title: 'NIT Technocracy Hackathon',
    org: 'Participant',
    year: '2023',
    icon: 'Trophy',
    type: 'hackathon',
  },
  {
    title: 'RICODE FIESTA Hackathon',
    org: 'Participant',
    year: '2024',
    icon: 'Trophy',
    type: 'hackathon',
  },
  {
    title: 'R1 Code Fiesta National Hackathon',
    org: 'Participant',
    year: '2024',
    icon: 'Trophy',
    type: 'hackathon',
  },
];

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  institution: 'Krishna Vikas Institute of Technology, Raipur',
  period: '2022 — 2026',
  cgpa: '8.3 / 10',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#publication' },
  { label: 'Contact', href: '#contact' },
];
