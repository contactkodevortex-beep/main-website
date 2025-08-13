import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import aiImage from '@/assets/ai-course.jpg';
import pythonImage from '@/assets/python-course.jpg';
import reactImage from '@/assets/react-course.jpg';
import { useNavigate } from 'react-router-dom';
import genai from "../../public/courses_image/genai.png"
import sapfico from "../../public/courses_image/sapfico.jpeg"
import aws from "../../public/courses_image/aws.jpeg"
import ccsp from "../../public/courses_image/ccsp.jpeg"
import devopsautomation from "../../public/courses_image/devops&automation.jpeg"
import cicd from "../../public/courses_image/cicd.jpeg"
import cloudmigrationmanagement from "../../public/courses_image/cloudmigrationmanagement.jpeg"
import cloudsecurit from "../../public/courses_image/cloudsecurit.png"
import datascienceprojects from "../../public/courses_image/datascienceprojects.jpeg"
import tensorflow from "../../public/courses_image/tensorflow.png";
import ethicalhacking from "../../public/courses_image/ethicalhacking.jpeg";
import hranalytics from "../../public/courses_image/hranalytics.jpeg";
import hrtraininig from "../../public/courses_image/hrtraininig.jpeg"
import hybridmulti from "../../public/courses_image/hybridmulti.jpeg";
import iac from "../../public/courses_image/iac.png";
import java from "../../public/courses_image/JAVA.png";
import mern from "../../public/courses_image/mern.jpeg";
import mining from "../../public/courses_image/mining.jpeg";
import ml from "../../public/courses_image/ML.jpeg";
import networksecurity from "../../public/courses_image/networksecurity.jpeg";
import nlp from "../../public/courses_image/nlp.jpeg";
import python from "../../public/courses_image/python.jpg";
import reactnext from "../../public/courses_image/reactnext.jpeg";
import saps4hana from "../../public/courses_image/saps4hana.png";
import talentacquisition from "../../public/courses_image/talentacquisition.jpeg";
import sapfullstack from "../../public/courses_image/sapfullstack.png"
import kubernatesdocker from "../../public/courses_image/kubernatesdocker.jpeg"
import cyberfunda from "../../public/courses_image/cyberfunda.jpeg"

const CourseCategories = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('technical');
  const [selectedSection, setSelectedSection] = useState('trendingcourse');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const managementCourses = [
    {
      id: 9,
      title: 'Workday HCM Administration',
      instructor: 'Michael Thompson',
      image: aiImage,
      duration: '8 weeks',
      students: '1,456',
      rating: 4.7,
      price: '$599',
      level: 'Professional',
      description: 'Complete Workday HCM configuration and administration',
      syllabus: [
        'Introduction to Workday HCM',
        'Core HCM Configuration',
        'Business Processes Setup',
        'Security Groups & Roles',
        'Workday Studio Basics',
        'Advanced Reporting & Dashboards',
        'Integrations Overview',
        'Final Capstone Project'
      ]
    },
    {
      id: 10,
      title: 'Digital Project Management',
      instructor: 'Lisa Wang',
      image: aiImage,
      duration: '6 weeks',
      students: '2,108',
      rating: 4.8,
      price: '$299',
      level: 'Beginner',
      description: 'Agile methodologies and modern project management tools',
      syllabus: [
        'Agile & Scrum Introduction',
        'Sprint Planning & Execution',
        'Project Lifecycle & Documentation',
        'Team Collaboration Tools',
        'Risk Management',
        'Project Closure Techniques'
      ]
    }
  ];

  const sections = [
    { id: 'trendingcourse', label: 'Trending Courses' },
    { id: 'datascience', label: 'Data Science' },
    { id: 'softwaredevelopment', label: 'Software Development' },
    { id: 'cloudcomputing', label: 'Cloud Computing' },
    { id: 'clouddevops', label: 'Cloud DevOps & Automation' },
    { id: 'cybersecurity', label: 'Cyber Security' },


    { id: 'sap', label: 'SAP' },
    { id: 'hr', label: 'HR' },

  ];

  const allCourses = [
    {
      id: 1,
      title: 'Generative AI & Machine Learning',
      instructor: 'Dr. Sarah Chen',
      image: genai,
      duration: '12 weeks',
      students: '2,847',
      rating: 4.9,
      price: '$299',
      level: 'Advanced',
      category: 'datascience',
      description: 'Deep dive into GPT, DALL-E, and custom AI model development, including RAG, AWS, and Azure integrations.',
      syllabus: [
        'Week 1: Introduction to AI & ML',
        'Week 2: Deep Learning with TensorFlow',
        'Week 3: Introduction to Generative Models',
        'Week 4: GPT and Transformer Architecture',
        'Week 5: Building Chatbots',
        'Week 6: Image Generation using GANs & DALL·E',
        'Week 7: Prompt Engineering',
        'Week 8: Model Deployment with Flask (AWS/Azure)',
        'Week 9: Real-time Use Cases & RAG Implementation',
        'Week 10: Custom Fine-tuning',
        'Week 11: Ethics & Bias in AI',
        'Week 12: Capstone Project',
      ]
    },
    {
      id: 1,
      title: 'Java Full Stack Development',
      instructor: 'Anjali Mehta',
      image: java,
      duration: '18 weeks',
      students: '7,430',
      rating: 4.7,
      price: '$449',
      level: 'Intermediate',
      category: 'softwaredevelopment',
      description: 'Master Java, Spring Boot, Hibernate, and React to build scalable applications.',
      syllabus: [
        'Core Java',
        'OOP Concepts & Collections',
        'Spring Boot & MVC',
        'Hibernate ORM',
        'REST API Development',
        'Frontend with React',
        'JWT Authentication',
        'Maven & Jenkins',
        'Final Full Stack Project'
      ]
    },
    {
      id: 2,
      title: 'Python Full Stack Development',
      instructor: 'Mark Rodriguez',
      image: python,
      duration: '16 weeks',
      students: '5,234',
      rating: 4.8,
      price: '$399',
      level: 'Intermediate',
      category: 'softwaredevelopment',
      description: 'Build scalable web applications with Python, Django, and React',
      syllabus: [
        'HTML, CSS & JavaScript Basics',
        'Python Fundamentals',
        'Django Models & Views',
        'User Authentication',
        'REST APIs with Django',
        'React Basics & Hooks',
        'Connecting Django with React',
        'Deployment to Cloud',
        'Final Full Stack Project'
      ]
    },
    {
      id: 3,
      title: 'MERN Stack Web Development',
      instructor: 'Rahul Kapoor',
      image: mern,
      duration: '14 weeks',
      students: '6,100',
      rating: 4.6,
      price: '$379',
      level: 'Beginner to Advanced',
      category: 'softwaredevelopment',
      description: 'Learn MongoDB, Express, React, and Node.js to build modern web apps.',
      syllabus: [
        'JavaScript ES6+',
        'Node.js & Express Basics',
        'MongoDB & Mongoose',
        'React & React Router',
        'Context API & Hooks',
        'Authentication with JWT',
        'CRUD Operations',
        'API Integration',
        'Deployment & Hosting'
      ]
    }
    ,
    {
      id: 3,
      title: 'React.js & Next.js Mastery',
      instructor: 'Emily Johnson',
      image: reactnext,
      duration: '10 weeks',
      students: '3,921',
      rating: 4.9,
      price: '$349',
      level: 'Intermediate',
      category: 'softwaredevelopment',
      description: 'Modern frontend development with React ecosystem',
      syllabus: [
        'React Core Concepts',
        'Hooks Deep Dive',
        'Routing with React Router',
        'State Management with Redux',
        'Next.js Pages & SSR',
        'API Routes & Middleware',
        'Authentication with JWT',
        'SEO in Next.js',
        'Testing & Deployment'
      ]
    },
    {
      id: 4,
      title: 'AWS & Cloud Fundamentals',
      instructor: 'James Lee',
      image: aws,
      duration: '8 weeks',
      students: '1,820',
      rating: 4.7,
      price: '$299',
      level: 'Beginner',
      category: 'cloudcomputing',
      description: 'Learn cloud basics with real-time AWS deployment and services',
      syllabus: [
        'Cloud Basics & Deployment Models',
        'AWS Free Tier Setup',
        'EC2, S3, IAM',
        'RDS & DynamoDB',
        'VPC & Networking',
        'Serverless with Lambda',
        'Monitoring & Billing',
        'Hands-on Project'
      ]
    },
  
    {
      id: 601,
      title: 'HR Generalist Training Program',
      instructor: 'Sonal Kapoor',
      image: hrtraininig,
      duration: '8 weeks',
      students: '2,350',
      rating: 4.6,
      price: '$299',
      level: 'Beginner',
      category: 'hr',
      description: 'Comprehensive training for aspiring HR professionals covering recruitment, payroll, compliance, and more.',
      syllabus: [
        'Recruitment & Onboarding',
        'Payroll Processing',
        'Labor Laws & Compliance',
        'Performance Management',
        'HRIS Tools (Zoho, SAP)',
        'Exit Formalities',
        'Capstone: HR Audit Simulation'
      ]
    },
    {
      id: 602,
      title: 'Talent Acquisition & Recruitment',
      instructor: 'Rohit Sharma',
      image: talentacquisition,
      duration: '6 weeks',
      students: '1,800',
      rating: 4.5,
      price: '$249',
      level: 'Intermediate',
      category: 'hr',
      description: 'Learn modern recruitment strategies, candidate screening, and ATS platforms.',
      syllabus: [
        'End-to-End Recruitment Process',
        'Job Descriptions & Sourcing',
        'Resume Screening Techniques',
        'Interviewing Skills',
        'Using ATS (Naukri, LinkedIn)',
        'Employer Branding',
        'KPI Tracking'
      ]
    },
    {
      id: 603,
      title: 'HR Analytics & Reporting',
      instructor: 'Meera Nair',
      image: hranalytics,
      duration: '5 weeks',
      students: '1,320',
      rating: 4.7,
      price: '$279',
      level: 'Advanced',
      category: 'hr',
      description: 'Leverage data-driven HR decision-making through analytics tools and dashboards.',
      syllabus: [
        'Introduction to HR Analytics',
        'KPIs & Metrics',
        'Dashboard Building in Excel',
        'Google Data Studio for HR',
        'Predictive Analytics',
        'Case Studies',
        'Project: HR Analytics Dashboard'
      ]
    },
   
    {
      id: 11,
      title: 'Cloud Security Professional (CCSP)',
      instructor: 'Sarah Jenkins',
      image: ccsp,
      duration: '6 weeks',
      students: '750',
      rating: 4.8,
      price: '$499',
      level: 'Professional',
      category: 'cloudcomputing',
      description: 'Prepare for the CCSP certification with in-depth cloud security knowledge.',
      syllabus: [
        'Cloud Concepts, Architecture and Design',
        'Cloud Data Security',
        'Cloud Platform & Infrastructure Security',
        'Cloud Application Security',
        'Cloud Security Operations',
        'Legal, Risk and Compliance'
      ]
    },
    {
      id: 12,
      title: 'Hybrid Cloud & Multi-cloud Strategies',
      instructor: 'David Kim',
      image: hybridmulti,
      duration: '7 weeks',
      students: '620',
      rating: 4.7,
      price: '$379',
      level: 'Advanced',
      category: 'cloudcomputing',
      description: 'Design and implement robust hybrid and multi-cloud architectures.',
      syllabus: [
        'Introduction to Hybrid & Multi-cloud',
        'AWS Outposts & Azure Stack',
        'Google Anthos',
        'Network Connectivity in Hybrid Clouds',
        'Data Management Across Clouds',
        'Security Considerations',
        'Cost Optimization & Governance'
      ]
    },
    {
      id: 13,
      title: 'Cloud DevOps and Automation',
      instructor: 'Maria Sanchez',
      image: devopsautomation,
      duration: '10 weeks',
      students: '1,500',
      rating: 4.9,
      price: '$450',
      level: 'Intermediate',
      category: 'clouddevops',
      description: 'Automate deployments and manage infrastructure as code in cloud environments.',
      syllabus: [
        'Introduction to DevOps',
        'Version Control with Git',
        'CI/CD Pipelines (Jenkins, GitLab CI)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Configuration Management (Ansible, Chef)',
        'Containerization (Docker)',
        'Orchestration (Kubernetes)',
        'Monitoring & Logging'
      ]
    },
    {
      id: 14,
      title: 'CI/CD Pipeline Development',
      instructor: 'Robert Green',
      image: cicd,
      duration: '6 weeks',
      students: '980',
      rating: 4.7,
      price: '$320',
      level: 'Intermediate',
      category: 'clouddevops',
      description: 'Build and optimize continuous integration and continuous delivery pipelines.',
      syllabus: [
        'Fundamentals of CI/CD',
        'Jenkins & GitLab CI Setup',
        'Automated Testing Integration',
        'Deployment Strategies',
        'Pipeline Security',
        'Monitoring CI/CD Pipelines'
      ]
    },
    {
      id: 15,
      title: 'Infrastructure as Code with Terraform',
      instructor: 'Elena Petrova',
      image: iac,
      duration: '5 weeks',
      students: '800',
      rating: 4.8,
      price: '$280',
      level: 'Intermediate',
      category: 'clouddevops',
      description: 'Provision and manage cloud infrastructure efficiently using Terraform.',
      syllabus: [
        'Introduction to IaC & Terraform',
        'Terraform Basics & HCL',
        'Managing AWS Resources with Terraform',
        'Terraform Modules',
        'State Management',
        'Advanced Terraform Concepts'
      ]
    },
    {
      id: 16,
      title: 'Kubernetes & Docker Fundamentals',
      instructor: 'Chris Evans',
      image: kubernatesdocker,
      duration: '7 weeks',
      students: '1,200',
      rating: 4.9,
      price: '$390',
      level: 'Intermediate',
      category: 'clouddevops',
      description: 'Master containerization and orchestration with Docker and Kubernetes.',
      syllabus: [
        'Introduction to Containers & Docker',
        'Dockerizing Applications',
        'Docker Compose',
        'Introduction to Kubernetes',
        'Pods, Deployments, Services',
        'Kubernetes Networking & Storage',
        'Scaling & Self-Healing'
      ]
    },
    {
      id: 17,
      title: 'Cloud Migration and Management',
      instructor: 'Sophia Miller',
      image: cloudmigrationmanagement,
      duration: '8 weeks',
      students: '700',
      rating: 4.6,
      price: '$420',
      level: 'Professional',
      category: 'clouddevops',
      description: 'Strategize and execute successful cloud migrations and ongoing cloud management.',
      syllabus: [
        'Cloud Migration Planning',
        'Migration Strategies (Lift & Shift, Replatform, Refactor)',
        'Data Migration Techniques',
        'Application Migration',
        'Cost Management in Cloud',
        'Cloud Governance & Compliance',
        'Cloud Operations & Monitoring'
      ]
    },
    {
      id: 18,
      title: 'AWS Certified Solutions Architect - Associate',
      instructor: 'John Doe',
      image: aws,
      duration: '10 weeks',
      students: '3000',
      rating: 4.9,
      price: '$500',
      level: 'Professional',
      category: 'certificationprep',
      description: 'Comprehensive preparation for the AWS Certified Solutions Architect - Associate exam.',
      syllabus: [
        'Designing Resilient Architectures',
        'Designing High-Performing Architectures',
        'Designing Secure Applications and Architectures',
        'Designing Cost-Optimized Architectures',
        'AWS Services Deep Dive'
      ]
    },
    {
      id: 19,
      title: 'Google Cloud Professional Cloud Architect',
      instructor: 'Jane Smith',
      image: pythonImage,
      duration: '10 weeks',
      students: '2500',
      rating: 4.8,
      price: '$550',
      level: 'Professional',
      category: 'certificationprep',
      description: 'Master Google Cloud Platform for the Professional Cloud Architect certification.',
      syllabus: [
        'Designing and planning a cloud solution architecture',
        'Managing and provisioning cloud infrastructure',
        'Designing for security and compliance',
        'Analyzing and optimizing technical and business processes',
        'Managing implementation',
        'Ensuring solution and operations reliability'
      ]
    },
    {
      id: 20,
      title: 'Microsoft Azure Administrator (AZ-104)',
      instructor: 'Mike Johnson',
      image: reactImage,
      duration: '8 weeks',
      students: '2800',
      rating: 4.7,
      price: '$450',
      level: 'Intermediate',
      category: 'certificationprep',
      description: 'Prepare for the AZ-104 exam and become a certified Azure Administrator.',
      syllabus: [
        'Manage Azure identities and governance',
        'Implement and manage storage',
        'Deploy and manage Azure compute resources',
        'Configure and manage virtual networking',
        'Monitor and back up Azure resources'
      ]
    },
    {
      id: 21,
      title: 'Certified Cloud Security Professional (CCSP)',
      instructor: 'Emily Davis',
      image: ccsp, // Using an existing image, replace with specific if available
      duration: '9 weeks',
      students: '1500',
      rating: 4.9,
      price: '$600',
      level: 'Advanced',
      category: 'certificationprep',
      description: 'In-depth preparation for the CCSP certification, focusing on cloud security architecture, design, and operations.',
      syllabus: [
        'Cloud Concepts, Architecture and Design',
        'Cloud Data Security',
        'Cloud Platform and Infrastructure Security',
        'Cloud Application Security',
        'Cloud Security Operations',
        'Legal, Risk and Compliance'
      ]
    },
    {
      id: 301,
      title: 'Cyber Security Fundamentals',
      instructor: 'Alice Thompson',
      image: cyberfunda, // Replace with actual import or image path
      duration: '10 weeks',
      students: '3,210',
      rating: 4.7,
      price: '$299',
      level: 'Beginner',
      category: 'cybersecurity',
      description: 'Understand core cybersecurity concepts like threats, vulnerabilities, and defense mechanisms.',
      syllabus: [
        'Introduction to Cybersecurity',
        'Types of Threats & Attacks',
        'Security Principles & Frameworks',
        'Risk Assessment & Management',
        'Cryptography Basics',
        'Access Control & Authentication',
        'Secure Network Practices',
        'Incident Response Planning',
        'Final Project: Basic Security Audit'
      ]
    },
    {
      id: 302,
      title: 'Network Security & Firewalls',
      instructor: 'David Nguyen',
      image: networksecurity,
      duration: '8 weeks',
      students: '2,876',
      rating: 4.6,
      price: '$279',
      level: 'Intermediate',
      category: 'cybersecurity',
      description: 'Secure enterprise networks with firewalls, intrusion detection, and secure protocols.',
      syllabus: [
        'OSI & TCP/IP Security',
        'Firewalls: Types & Configuration',
        'VPNs and Secure Tunnels',
        'Intrusion Detection & Prevention',
        'Wireless Network Security',
        'Packet Analysis Tools',
        'Network Policy Implementation',
        'Security Monitoring',
        'Hands-on Network Lab'
      ]
    },
    {
      id: 303,
      title: 'Ethical Hacking & Penetration Testing',
      instructor: 'Sophia Lee',
      image: ethicalhacking,
      duration: '12 weeks',
      students: '4,502',
      rating: 4.8,
      price: '$349',
      level: 'Advanced',
      category: 'cybersecurity',
      description: 'Learn ethical hacking skills to test and strengthen systems against cyber attacks.',
      syllabus: [
        'Reconnaissance Techniques',
        'Scanning & Enumeration',
        'Vulnerability Assessment',
        'Exploitation Basics',
        'Web Application Attacks',
        'Metasploit Framework',
        'Social Engineering Techniques',
        'Report Writing',
        'Capstone: Penetration Test Report'
      ]
    },
    {
      id: 304,
      title: 'Cloud Security & Compliance',
      instructor: 'Rahul Mehta',
      image: cloudsecurit,
      duration: '9 weeks',
      students: '2,045',
      rating: 4.5,
      price: '$329',
      level: 'Intermediate',
      category: 'cybersecurity',
      description: 'Secure cloud environments with best practices and compliance standards like GDPR & HIPAA.',
      syllabus: [
        'Cloud Models & Shared Responsibility',
        'Cloud Threats & Risk Mitigation',
        'IAM in Cloud Platforms',
        'Data Security in Transit & at Rest',
        'Compliance Standards Overview',
        'Monitoring & Logging in Cloud',
        'Business Continuity & Disaster Recovery',
        'Cloud Provider Security Tools (AWS, Azure)',
        'Final Audit & Compliance Report'
      ]
    },
    {
      id: 401,
      title: 'Machine Learning Mastery',
      instructor: 'Dr. Ananya Sharma',
      image: ml,
      duration: '10 weeks',
      students: '6,120',
      rating: 4.8,
      price: '$349',
      level: 'Intermediate',
      category: 'datascience',
      description: 'Master supervised and unsupervised learning using Python and Scikit-Learn.',
      syllabus: [
        'Intro to ML & Python Libraries',
        'Linear & Logistic Regression',
        'Decision Trees & Random Forests',
        'Model Evaluation & Cross Validation',
        'Unsupervised Learning: KMeans & PCA',
        'Model Tuning & Grid Search',
        'Real-world ML Projects',
        'Capstone: Build & Deploy ML Model'
      ]
    },
    {
      id: 402,
      title: 'Deep Learning with TensorFlow',
      instructor: 'Kevin Patel',
      image: tensorflow,
      duration: '12 weeks',
      students: '4,789',
      rating: 4.7,
      price: '$379',
      level: 'Advanced',
      category: 'datascience',
      description: 'Build neural networks and train models using TensorFlow and Keras.',
      syllabus: [
        'Neural Networks Foundations',
        'TensorFlow & Keras Setup',
        'CNNs for Image Processing',
        'RNNs & LSTMs for Sequences',
        'Transfer Learning',
        'Custom Model Deployment',
        'AI Ethics & Bias Mitigation',
        'Capstone: Deep Learning App'
      ]
    },
    {
      id: 403,
      title: 'Natural Language Processing (NLP)',
      instructor: 'Aisha Khan',
      image: nlp,
      duration: '9 weeks',
      students: '3,142',
      rating: 4.6,
      price: '$319',
      level: 'Intermediate',
      category: 'datascience',
      description: 'Process and analyze text data using modern NLP techniques and libraries.',
      syllabus: [
        'Text Preprocessing & Tokenization',
        'Bag of Words & TF-IDF',
        'Text Classification with ML',
        'Named Entity Recognition (NER)',
        'Word Embeddings (Word2Vec, GloVe)',
        'Sentiment Analysis',
        'Transformers & BERT Basics',
        'Capstone: NLP Chatbot'
      ]
    },
    {
      id: 404,
      title: 'Data Mining & Pattern Discovery',
      instructor: 'Suresh Iyer',
      image: mining,
      duration: '8 weeks',
      students: '2,678',
      rating: 4.5,
      price: '$289',
      level: 'Beginner',
      category: 'datascience',
      description: 'Uncover patterns, trends, and anomalies in large datasets using mining algorithms.',
      syllabus: [
        'Data Preprocessing',
        'Frequent Itemsets & Association Rules',
        'Clustering & Hierarchical Methods',
        'Anomaly Detection',
        'Web Mining Techniques',
        'Text Mining Basics',
        'Use Cases in E-commerce & Healthcare',
        'Capstone: Market Basket Analysis'
      ]
    },
    {
      id: 405,
      title: 'End-to-End Data Science Projects',
      instructor: 'Emily Zhang',
      image: datascienceprojects,
      duration: '10 weeks',
      students: '3,765',
      rating: 4.7,
      price: '$359',
      level: 'Intermediate',
      category: 'datascience',
      description: 'Build real-world data science pipelines from data wrangling to model deployment.',
      syllabus: [
        'Project Planning & Data Collection',
        'Data Cleaning & Exploration',
        'Feature Engineering',
        'Model Building & Evaluation',
        'Visualization & Dashboarding',
        'ML Deployment with Flask',
        'Using Docker for Projects',
        'Capstone: Full DS Lifecycle'
      ]
    },

    {
      id: 501,
      title: 'Full Stack SAP Developer',
      instructor: 'Amit Sinha',
      image: sapfullstack,
      duration: '14 weeks',
      students: '2,984',
      rating: 4.7,
      price: '$499',
      level: 'Advanced',
      category: 'sap',
      description: 'Become a full-stack SAP developer working with SAP UI5, Fiori, ABAP, and HANA.',
      syllabus: [
        'Intro to SAP Landscape & Architecture',
        'SAP UI5 & Fiori Front-End',
        'ABAP Programming for Backend',
        'SAP HANA Database Integration',
        'OData Services',
        'SAP Business Application Studio',
        'Project: End-to-End SAP App',
        'Deployment & Testing'
      ]
    },
    {
      id: 502,
      title: 'SAP FICO - Financial Accounting & Controlling',
      instructor: 'Priya Menon',
      image: sapfico,
      duration: '10 weeks',
      students: '3,742',
      rating: 4.6,
      price: '$399',
      level: 'Intermediate',
      category: 'sap',
      description: 'Master financial accounting and controlling using SAP FICO.',
      syllabus: [
        'SAP ERP & Navigation',
        'General Ledger (GL)',
        'Accounts Payable/Receivable',
        'Asset Accounting',
        'Controlling (CO) Basics',
        'Internal Orders & Cost Centers',
        'Real-time Scenarios',
        'Capstone: FICO Configuration'
      ]
    },
    {
      id: 503,
      title: 'SAP S/4HANA – Enterprise Management',
      instructor: 'Nikhil Arora',
      image: saps4hana,
      duration: '12 weeks',
      students: '2,615',
      rating: 4.8,
      price: '$429',
      level: 'Intermediate',
      category: 'sap',
      description: 'Learn to manage enterprise-level operations with SAP S/4HANA.',
      syllabus: [
        'Overview of SAP S/4HANA',
        'Core Modules (MM, SD, PP)',
        'Data Modeling in HANA',
        'SAP Fiori Integration',
        'Embedded Analytics',
        'Workflow Management',
        'Real-World Case Studies',
        'Capstone: End-to-End ERP Flow'
      ]
    }



  ];

  const certificationCourses = allCourses.filter(course => course.category === 'certificationprep');

  const filteredCourses =
    selectedSection === 'trendingcourse'
      ? allCourses.slice(0, 3)
      : selectedSection === 'certificationprep'
        ? certificationCourses
        : allCourses.filter((course) => course.category === selectedSection);

  const displayedCourses =
    activeTab === 'technical' ? filteredCourses : managementCourses;

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Course <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your learning path and excel in your chosen field
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 rounded-2xl">
            <div className="flex space-x-2">
              {['technical', 'management'].map((key) => (
                <Button
                  key={key}
                  variant={activeTab === key ? 'gradient' : 'ghost'}
                  size="lg"
                  onClick={() => setActiveTab(key)}
                  className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 capitalize"
                >
                  {key}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === 'technical' && (
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={selectedSection === section.id ? 'default' : 'outline'}
                onClick={() => setSelectedSection(section.id)}
                className={`capitalize ${selectedSection === section.id ? 'border border-primary bg-primary/90 text-white' : ''}`}
              >
                {section.label}
              </Button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((course, index) => (
            <div
              key={course.id}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 glow-effect"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {course.price}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    by {course.instructor}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <Button
                  variant="gradient"
                  className="w-full group/btn"
                  onClick={() => setSelectedCourse(course)}
                >
                  View Course
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center space-y-4">
          <button
            className="px-8 py-3 bg-blue-400 hover:bg-blue-500 rounded-xl font-semibold transition-all duration-300"
            onClick={() => navigate('/courses')}
          >
            View All Courses
          </button>
          <button
            className="px-8 py-3 bg-green-400 hover:bg-green-500 rounded-xl font-semibold transition-all duration-300 ml-4"
            onClick={() => {
              setActiveTab('technical'); // Ensure technical tab is active
              setSelectedSection('certificationprep');
            }}
          >
            Certification Prep
          </button>
        </div>
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-[#1e293b] text-white p-6 rounded-2xl max-w-xl w-full shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-xl"
              onClick={() => setSelectedCourse(null)}
            >
              ✕
            </button>

            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Instructor:</strong> {selectedCourse.instructor}
            </p>
            <p className="text-muted-foreground mb-4">{selectedCourse.description}</p>

            {selectedCourse?.syllabus && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Syllabus</h4>
                <ul className="text-sm max-h-48 overflow-y-auto space-y-1 list-disc list-inside pr-2">
                  {selectedCourse.syllabus.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
              <span><Clock className="inline-block h-4 w-4 mr-1" />{selectedCourse.duration}</span>
              <span><Users className="inline-block h-4 w-4 mr-1" />{selectedCourse.students}</span>
              <span><Star className="inline-block h-4 w-4 text-yellow-500 mr-1" />{selectedCourse.rating}</span>
            </div>

            <div className="flex justify-between items-center">
              <Badge>{selectedCourse.level}</Badge>
              <Badge variant="secondary">{selectedCourse.price}</Badge>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseCategories;