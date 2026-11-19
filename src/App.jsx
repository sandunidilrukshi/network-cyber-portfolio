
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Activity,
  ArrowUpRight,
  Briefcase,
  FileText,
  LockKeyhole,
  Mail,
  Network,
  Server,
  ShieldCheck,
  UserRound,
  X,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';

const CONTACT_EMAIL = 'sandunidilrukshi49@gmail.com';

const nodes = [
  { id: 'about', label: 'ABOUT', detail: 'PROFILE', Icon: UserRound, className: 'node-about' },
  { id: 'skills', label: 'SKILLS', detail: 'TECH STACK', Icon: ShieldCheck, className: 'node-skills' },
  { id: 'projects', label: 'PROJECTS', detail: 'MY WORK', Icon: Server, className: 'node-projects' },
  { id: 'experience', label: 'EXPERIENCE', detail: 'MY JOURNEY', Icon: Briefcase, className: 'node-experience' },
  { id: 'cv', label: 'MY CV', detail: 'DOWNLOAD', Icon: FileText, className: 'node-cv' },
  { id: 'contact', label: 'CONTACT', detail: 'GET IN TOUCH', Icon: Mail, className: 'node-contact' },
];

const panelContent = {
  about: {
    eyebrow: 'NODE_01 / PROFILE',
    title: 'About Me',
    description:
      'I am an ICT undergraduate specializing in Network Technology, interested in enterprise networking, network infrastructure and cybersecurity.',
    items: [
      ['EDUCATION', 'ICT Undergraduate'],
      ['SPECIALIZATION', 'Network Technology'],
      ['INTERESTS', 'Networking & Cybersecurity'],
    ],
  },
  
  skills: {
    eyebrow: 'NODE_02 / TECHNICAL EXPERTISE',
    title: 'Technical Arsenal',
    description:
      'A collection of networking, infrastructure and cybersecurity technologies explored through academic learning and practical projects.',

    groups: [
      {
        title: 'NETWORK ENGINEERING',
        subtitle: 'Enterprise Connectivity',
        description:
          'Building structured, scalable and reliable enterprise network environments.',
        Icon: Network,
        items: [
          'Enterprise Networking',
          'VLAN & Trunking',
          'Inter-VLAN Routing',
          'Network Segmentation',
        ],
      },
      {
        title: 'ROUTING & SWITCHING',
        subtitle: 'Network Infrastructure',
        description:
          'Exploring dynamic routing, switching technologies and network redundancy.',
        Icon: Server,
        items: [
          'OSPF Routing',
          'STP / RSTP',
          'EtherChannel / LACP',
          'DHCP',
          'NAT',
        ],
      },
      {
        title: 'NETWORK SECURITY',
        subtitle: 'Infrastructure Protection',
        description:
          'Applying network access control and foundational security configurations.',
        Icon: ShieldCheck,
        items: [
          'Access Control Lists',
          'Port Security',
          'SSH Configuration',
          'Firewall Concepts',
          'Secure Network Design',
        ],
      },
      {
        title: 'TOOLS & TECHNOLOGIES',
        subtitle: 'Technical Environment',
        description:
          'Using practical tools to explore, configure and understand network environments.',
        Icon: Activity,
        items: [
          'Cisco Packet Tracer',
          'Wireshark',
          'Linux Fundamentals',
          'Git & GitHub',
        ],
      },
    ],
  },

  
  projects: {
    eyebrow: 'NODE_03 / ENGINEERING PORTFOLIO',
    title: 'Featured Projects',
    description:
      'Exploring enterprise networking, infrastructure engineering and cybersecurity through practical technical projects.',

    projects: [
      {
        name: 'Secure MultiSite Enterprise Network',
        type: 'ENTERPRISE NETWORKING',
        category: 'NETWORKING',
        description:
          'A multi-site Cisco enterprise network simulation featuring network segmentation, routing, redundancy and secure connectivity.',
        Icon: Network,
        tags: ['Cisco Packet Tracer', 'VLAN', 'HSRP', 'OSPF', 'LACP', 'RSTP', 'WLC'],
        link: 'https://github.com/sandunidilrukshi/Secure-MultiSite-Enterprise-Network',
        featured: true,
        caseStudy: [
  {
    label: 'NETWORK ARCHITECTURE',
    detail: 'Hierarchical Core, Distribution and Access layer enterprise network with branch connectivity.'
  },
  {
    label: 'IMPLEMENTATION',
    detail: 'VLAN segmentation, inter-VLAN routing, Layer 3 switching, HSRP, RSTP, 802.1Q trunking, LACP EtherChannel and WLC.'
  },
  {
    label: 'NETWORK DESIGN',
    detail: 'Separate Management, HR, Finance, IT, Servers, Guest and Voice networks.'
  },
  {
    label: 'VALIDATION',
    detail: 'Network connectivity, redundancy, spanning-tree behaviour and switching configurations.'
  }
],
      },
      {
        name: 'Cisco Enterprise VLAN Network',
        type: 'NETWORK ENGINEERING',
        category: 'NETWORKING',
        description:
          'An enterprise network implementation focused on departmental VLAN segmentation, inter-VLAN routing and access control.',
        Icon: Server,
        tags: ['Cisco Packet Tracer', 'VLAN', 'DHCP', 'ACL', 'SSH', 'Port Security'],
        link: 'https://github.com/sandunidilrukshi/Cisco-Enterprise-VLAN-Network',
        caseStudy: [
  {
    label: 'NETWORK DESIGN',
    detail: 'Department-based enterprise network segmentation using Cisco Packet Tracer.'
  },
  {
    label: 'IMPLEMENTATION',
    detail: 'VLANs, 802.1Q trunking, Router-on-a-Stick and inter-VLAN routing.'
  },
  {
    label: 'SECURITY',
    detail: 'ACL restrictions, sticky MAC Port Security and SSH remote management.'
  },
  {
    label: 'VERIFICATION',
    detail: 'DHCP allocation, VLAN connectivity, ACL restrictions and secure management access.'
  }
],
      },
      {
        name: 'Cisco OSPF Enterprise Network',
        type: 'ROUTING & SWITCHING',
        category: 'NETWORKING',
        description:
          'A Cisco enterprise routing project demonstrating dynamic routing using OSPF and interconnected router networks.',
        Icon: Network,
        tags: ['Cisco Packet Tracer', 'OSPF', 'IPv4', 'Dynamic Routing'],
        link: 'https://github.com/sandunidilrukshi/Cisco-OSPF-Enterprise-Network',
      },
      {
        name: 'Network Traffic Analysis Using Wireshark',
        type: 'NETWORK ANALYSIS',
        category: 'NETWORKING',
        description:
          'A practical packet analysis project exploring network protocols and packet behaviour through Wireshark captures.',
        Icon: Activity,
        tags: ['Wireshark', 'ICMP', 'DNS', 'TCP', 'UDP', 'DHCP'],
        link: 'https://github.com/sandunidilrukshi/Network-Traffic-Analysis-Using-Wireshark',
      },
      {
        name: 'Network Monitor Dashboard',
        type: 'NETWORK MONITORING',
        category: 'NETWORKING',
        description:
          'A web-based network monitoring dashboard for checking device availability and displaying connectivity status.',
        Icon: Activity,
        tags: ['React', 'Node.js', 'Express.js', 'ICMP'],
        link: 'https://github.com/sandunidilrukshi/network-monitor-dashboard',
      },
      {
        name: 'Network Intrusion Detection System',
        type: 'CYBERSECURITY',
        category: 'CYBERSECURITY',
        description:
          'A network security monitoring application with real-time alert updates and stored network log information.',
        Icon: ShieldCheck,
        tags: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Security Monitoring'],
        link: 'https://github.com/sandunidilrukshi/AI-Based-Network-Intrusion-Detection-System-Using-Node.js',
        caseStudy: [
  {
    label: 'SYSTEM ARCHITECTURE',
    detail: 'Node.js and Express backend integrated with MongoDB and a real-time security dashboard.'
  },
  {
    label: 'IMPLEMENTATION',
    detail: 'Simulated DDoS, Port Scan, SQL Injection and Brute Force attack detection.'
  },
  {
    label: 'REAL-TIME MONITORING',
    detail: 'Socket.IO live updates, threat statistics and colour-coded security visualisation.'
  },
  {
    label: 'LOG MANAGEMENT',
    detail: 'Searchable attack logs and CSV report export.'
  }
],
      },
      {
        name: 'Zero Trust Network Architecture Simulator',
        type: 'ZERO TRUST SECURITY',
        category: 'CYBERSECURITY',
        description:
          'A simulator exploring identity-based authentication, access control, device trust and risk-based security decisions.',
        Icon: LockKeyhole,
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
        link: 'https://github.com/sandunidilrukshi/zero-trust-network-architecture-simulator',
        caseStudy: [
  {
    label: 'SECURITY MODEL',
    detail: 'Zero Trust approach based on Never Trust, Always Verify.'
  },
  {
    label: 'AUTHENTICATION',
    detail: 'JWT-based authentication and role-based access control.'
  },
  {
    label: 'DEVICE TRUST',
    detail: 'Device registration, trust scores and security policy evaluation.'
  },
  {
    label: 'RISK MANAGEMENT',
    detail: 'Risk scoring, access request evaluation, security alerts and access logs.'
  }
],
      },
      {
        name: 'PhishGuard',
        type: 'PHISHING AWARENESS',
        category: 'CYBERSECURITY',
        description:
          'An educational phishing-awareness application for inspecting URLs and email text for suspicious indicators.',
        Icon: ShieldCheck,
        tags: ['React', 'TypeScript', 'Python', 'Flask', 'REST API'],
        link: 'https://github.com/sandunidilrukshi/PhishGuard',
        caseStudy: [
  {
    label: 'APPLICATION',
    detail: 'Educational phishing-awareness web application.'
  },
  {
    label: 'FRONTEND',
    detail: 'React, TypeScript and Vite.'
  },
  {
    label: 'BACKEND',
    detail: 'Python, Flask, Flask-CORS and Gunicorn.'
  },
  {
    label: 'SECURITY FEATURES',
    detail: 'URL analysis, suspicious email text inspection, basic password strength checking and URL scan history.'
  },
  {
    label: 'DEPLOYMENT',
    detail: 'Frontend deployed on Vercel and backend deployed on Render.'
  }
],
      },
      {
        name: 'LinkLogic',
        type: 'NETWORK DESIGN SIMULATOR',
        category: 'DEVELOPMENT',
        description:
          'An interactive application for designing network topologies, configuring devices and exploring connectivity troubleshooting.',
        Icon: Network,
        tags: ['React', 'TypeScript', 'Vite', 'React Flow', 'Node.js'],
        link: 'https://github.com/sandunidilrukshi/LinkLogic',
      },
      {
        name: 'Library Management System',
        type: 'FULL-STACK DEVELOPMENT',
        category: 'DEVELOPMENT',
        description:
          'A full-stack library management application developed using the MERN technology stack.',
        Icon: Briefcase,
        tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        link: 'https://github.com/sandunidilrukshi/Library-Management-System',
      },
    ],
    
  },

  
experience: {
  eyebrow: 'NODE_04 / PROFESSIONAL JOURNEY',
  title: 'Experience & Credentials',
  description:
    'My academic journey, professional exposure and involvement in technology communities and professional development activities.',

  sections: [
    {
      title: 'ACADEMIC FOUNDATION',
      subtitle: 'EDUCATION',
      items: [
        {
          role: 'ICT Undergraduate',
          organization: 'University of Sri Jayewardenepura',
          description:
            'Undergraduate studies with a specialization in Network Technology, developing knowledge in networking, infrastructure and cybersecurity.'
        }
      ]
    },
    {
      title: 'PROFESSIONAL EXPERIENCE',
      subtitle: 'INDUSTRY EXPOSURE',
      items: [
        {
          role: 'Trainee',
          organization: 'Bank of Ceylon',
          description:
            'Professional trainee experience at Bank of Ceylon.'
        }
      ]
    },
    {
      title: 'COMMUNITY & LEADERSHIP',
      subtitle: 'PROFESSIONAL ENGAGEMENT',
      items: [
        {
          role: 'Finance Crew Member',
          organization: 'CryptoX 2.0',
          description:
            'Participation as a member of the Finance Crew.'
        },
        {
          role: 'Society Member',
          organization: 'ICTS Society',
          description:
            'Involvement in the university ICT community.'
        },
        {
          role: 'Student Member',
          organization: 'IEEE Student Branch',
          description:
            'Engagement with the university IEEE student community.'
        }
      ]
    },
    {
      title: 'WORKSHOPS & DEVELOPMENT',
      subtitle: 'PROFESSIONAL LEARNING',
      items: [
        {
          role: 'Pre-Conference Workshop Participant',
          organization: 'ICIET 2025',
          description:
            'Participation in the ICIET 2025 Pre-Conference Workshop.'
        }
      ]
    }
  ]
},

  cv: {
    eyebrow: 'NODE_05 / CAREER PROFILE',
    title: 'My Resume',
    description: 'Download my CV to explore my education, technical skills, projects and experience.',
    download: true,
  },
  contact: {
    eyebrow: 'NODE_06 / COMMUNICATION',
    title: 'Establish Connection',
    description: 'Have an internship opportunity, project idea or professional enquiry? Send me a message.',
    contactForm: true,
  },
};

function App() {
  const [activeNode, setActiveNode] = useState(null);
    useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveNode(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);
  
  const [expandedProject, setExpandedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('ALL');
const [form, setForm] = useState({
  fullName: '',
  email: '',
  subject: '',
  message: '',
});  const [sent, setSent] = useState(false);

  const openNode = (id) => {
  setActiveNode(id);
  setSent(false);

  if (id === 'projects') {
    setProjectFilter('ALL');
  }
};

  const closePanel = () => setActiveNode(null);

  const handleContactSubmit = (event) => {
  event.preventDefault();

  const subject = encodeURIComponent(form.subject);

  const body = encodeURIComponent(
    `Name: ${form.fullName}\n` +
    `Email: ${form.email}\n\n` +
    `Message:\n${form.message}`
  );

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  setSent(true);
};

  
  const activeContent = activeNode ? panelContent[activeNode] : null;

  

  return (
    <main className="network-app">

      <div className="ambient-glow ambient-one" />
      <div className="ambient-glow ambient-two" />
      <div className="background-grid" />

      <header className="top-bar">
        <a className="system-brand" href="#network" aria-label="Home network">
          <span className="brand-symbol"><Network size={19} /></span>
          <span>SANDUNI<span className="brand-accent">.NET</span></span>
        </a>

        <div className="top-system-status">
          <span className="live-dot" />
          NETWORK ACTIVE
        </div>
            
        <a
          className="top-social"
          href="https://github.com/sandunidilrukshi"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithub size={18} />
        </a>
      </header>

      <section className="network-workspace" id="network">
        <div className="workspace-heading">
          <span className="workspace-kicker">PERSONAL DIGITAL NETWORK</span>
          <h1>Explore my <span>network.</span></h1>
          <p>Select a connected node to access information.</p>
        </div>

        <div className="topology">
          <svg className="topology-lines" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="lineGlow">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <g className="network-lines">
              <path d="M500 310 L500 65" />
              <path d="M500 310 L195 155" />
              <path d="M500 310 L805 155" />
              <path d="M500 310 L195 465" />
              <path d="M500 310 L500 555" />
              <path d="M500 310 L805 465" />
              <path d="M195 155 L500 65 L805 155" />
              <path d="M195 465 L500 555 L805 465" />
            </g>
            <g className="packet-lines">
              <circle r="4"><animateMotion dur="3.5s" repeatCount="indefinite" path="M500 310 L500 65" /></circle>
              <circle r="4"><animateMotion dur="4.2s" repeatCount="indefinite" path="M500 310 L195 155" /></circle>
              <circle r="4"><animateMotion dur="3.8s" repeatCount="indefinite" path="M500 310 L805 155" /></circle>
              <circle r="4"><animateMotion dur="4.5s" repeatCount="indefinite" path="M500 310 L805 465" /></circle>
              <circle r="4"><animateMotion dur="3.9s" repeatCount="indefinite" path="M500 310 L195 465" /></circle>
              <circle r="4"><animateMotion dur="4.7s" repeatCount="indefinite" path="M500 310 L500 555" /></circle>
            </g>
          </svg>

          {nodes.map(({ id, label, detail, Icon, className }, index) => (
            <motion.button
              key={id}
              className={`topology-node ${className}`}
              onClick={() => openNode(id)}
              aria-label={`Open ${label}`}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + index * 0.09, type: 'spring', stiffness: 130 }}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="node-icon"><Icon size={23} /></span>
              <span className="node-name">{label}</span>
              <span className="node-detail">{detail}</span>
              <span className="node-led" />
            </motion.button>
          ))}

          <motion.button
            className="central-node"
            onClick={() => openNode('about')}
            aria-label="Open Sanduni's profile"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            whileHover={{ scale: 1.04 }}
          >
            <span className="central-ring ring-one" />
            <span className="central-ring ring-two" />
            <span className="central-avatar">
              <UserRound size={42} />
              <img
                src="/profile.jpg"
                alt="Sanduni Abeweera"
                onError={(event) => { event.currentTarget.style.display = 'none'; }}
              />
            </span>
            <span className="central-name">SANDUNI</span>
            <span className="central-surname">ABEWEERA</span>
            <span className="central-role">NETWORK TECHNOLOGY</span>
            <span className="central-status"><span className="live-dot" /> CORE NODE ONLINE</span>
          </motion.button>
        </div>

        <div className="workspace-footer">
          <span><Activity size={14} />  NETWORK TOPOLOGY / 2026</span>
          <span>SELECT NODE <span className="footer-cross">✣</span> EXPLORE PROFILE</span>
          <span className="footer-hint">DRAG & EXPLORE CONCEPT</span>
        </div>
      </section>

      <AnimatePresence>
        {activeContent && (
          <motion.div
            className="panel-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePanel}
          >
            <motion.section
              className="detail-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="panel-title"
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="panel-topline">
                <span><span className="live-dot" /> CONNECTION ESTABLISHED</span>
                <button className="panel-close" onClick={closePanel} aria-label="Close panel">
                  <X size={20} />
                </button>
              </div>

              <div className="panel-content">
                <span className="panel-eyebrow">{activeContent.eyebrow}</span>
                <h2 id="panel-title">{activeContent.title}</h2>
                <p className="panel-description">{activeContent.description}</p>

                {activeContent.items && (
                  <div className="info-list">
                    {activeContent.items.map(([label, value]) => (
                      <div className="info-row" key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                )}


{activeContent.sections && (
  <div className="experience-sections">
    {activeContent.sections.map((section, sectionIndex) => (
      <motion.section
        className="experience-section"
        key={section.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: sectionIndex * 0.12,
          duration: 0.4
        }}
      >
        <div className="experience-section-header">
          <div>
            <span className="experience-subtitle">
              {section.subtitle}
            </span>
            <h3>{section.title}</h3>
          </div>

          <span className="experience-number">
            0{sectionIndex + 1}
          </span>
        </div>

        <div className="experience-timeline">
          {section.items.map((item, itemIndex) => (
            <article
              className="experience-entry"
              key={item.organization}
            >
              <div className="experience-marker">
                <span />
              </div>

              <div className="experience-entry-content">
                <span className="experience-entry-index">
                  ENTRY_{String(itemIndex + 1).padStart(2, '0')}
                </span>

                <h4>{item.role}</h4>

                <h5>{item.organization}</h5>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>
    ))}
  </div>
)}


                
{activeContent.groups && (
  <div className="skill-groups">
    {activeContent.groups.map((group, index) => {
      const GroupIcon = group.Icon;

      return (
        <motion.article
          className="skill-group"
          key={group.title}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.12, duration: 0.4 }}
        >
          <div className="skill-card-top">
            <div className="skill-card-icon">
              <GroupIcon size={23} />
            </div>

            <span className="skill-card-number">
              0{index + 1}
            </span>
          </div>

          <span className="skill-card-subtitle">
            {group.subtitle}
          </span>

          <h3>{group.title}</h3>

          <p className="skill-card-description">
            {group.description}
          </p>

          <div className="skill-tags">
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.article>
      );
    })}
  </div>
)}


                
{activeContent.projects && (
  <div className="projects-showcase">

    <div className="project-filters" role="group" aria-label="Filter projects">
      {['ALL', 'NETWORKING', 'CYBERSECURITY', 'DEVELOPMENT'].map((filter) => (
        <button
          key={filter}
          type="button"
          className={`project-filter ${
            projectFilter === filter ? 'active' : ''
          }`}
          onClick={() => setProjectFilter(filter)}
          aria-pressed={projectFilter === filter}
        >
          {filter === 'ALL' ? 'ALL PROJECTS' : filter}
        </button>
      ))}
    </div>

    <div className="project-results-count">
      <span>PROJECT DATABASE</span>
      <span>
        {activeContent.projects.filter(
          (project) =>
            projectFilter === 'ALL' ||
            project.category === projectFilter
        ).length.toString().padStart(2, '0')} PROJECTS FOUND
      </span>
    </div>

    <div className="project-list">
      {activeContent.projects
        .filter(
          (project) =>
            projectFilter === 'ALL' ||
            project.category === projectFilter
        )
        .map((project, index) => {
          const ProjectIcon = project.Icon;

          return (
            <motion.article
              className={`project-card ${
                project.featured ? 'project-featured' : ''
              }`}
              key={project.name}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <div className="project-card-header">
                <div className="project-icon">
                  <ProjectIcon size={23} />
                </div>

                <span className="project-index">
                  PROJECT_{String(activeContent.projects.indexOf(project) + 1).padStart(2, '0')}
                </span>
              </div>

              {project.featured && (
                <span className="project-featured-label">
                  FEATURED PROJECT
                </span>
              )}

              <span className="project-type">{project.type}</span>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.caseStudy && (
  <button
    type="button"
    className="case-study-toggle"
    onClick={() =>
      setExpandedProject(
        expandedProject === project.name
          ? null
          : project.name
      )
    }
    aria-expanded={expandedProject === project.name}
  >
    {expandedProject === project.name
      ? 'CLOSE CASE STUDY'
      : 'EXPLORE CASE STUDY'}

    <ArrowUpRight
      size={15}
      className={
        expandedProject === project.name
          ? 'case-study-arrow active'
          : 'case-study-arrow'
      }
    />
  </button>
)}

<AnimatePresence>
  {expandedProject === project.name && project.caseStudy && (
    <motion.div
      className="case-study-details"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="case-study-heading">
        <span className="live-dot" />
        TECHNICAL BREAKDOWN
      </div>

      {project.caseStudy.map((item, detailIndex) => (
        <div
          className="case-study-item"
          key={item.label}
        >
          <span className="case-study-index">
            0{detailIndex + 1}
          </span>

          <div>
            <h4>{item.label}</h4>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

              <div className="project-card-footer">
                <span className="project-status">
                  <span className="live-dot" />
                  TECHNICAL PROJECT
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  VIEW ON GITHUB
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          );
        })}
    </div>

  </div>
)}


                {activeContent.download && (
                  <div className="download-card">
                    <FileText size={34} />
                    <div>
                      <strong>Sanduni Abeweera – CV</strong>
                      <span>PDF DOCUMENT</span>
                    </div>
                    <a href="/Sanduni-Abeweera-CV.pdf" download>
                      DOWNLOAD <ArrowUpRight size={16} />
                    </a>
                  </div>
                )}

                {activeContent.contactForm && (
  <div className="contact-layout">

    {/* PROFESSIONAL CONTACT INFORMATION */}
    <div className="contact-information">

      <div className="contact-intro">
        <span className="contact-label">LET'S CONNECT</span>

        <h3>Let's build something secure together.</h3>

        <p>
          Open to networking and cybersecurity internship
          opportunities, technical collaborations and
          professional conversations.
        </p>
      </div>

      <a
        className="contact-method"
        href={`mailto:${CONTACT_EMAIL}`}
      >
        <span className="contact-method-icon">
          <Mail size={20} />
        </span>

        <span className="contact-method-text">
          <small>EMAIL ADDRESS</small>
          <strong>{CONTACT_EMAIL}</strong>
        </span>

        <ArrowUpRight size={17} />
      </a>

      <a
        className="contact-method"
        href="https://github.com/sandunidilrukshi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="contact-method-icon">
          <FaGithub size={20} />
        </span>

        <span className="contact-method-text">
          <small>GITHUB PROFILE</small>
          <strong>Explore my repositories</strong>
        </span>

        <ArrowUpRight size={17} />
      </a>

      <a
        className="contact-method"
        href="https://www.linkedin.com/in/sanduni-dilrukshika-b897a5385/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="contact-method-icon">
          <FaLinkedin size={20} />
        </span>

        <span className="contact-method-text">
          <small>LINKEDIN PROFILE</small>
          <strong>Connect professionally</strong>
        </span>

        <ArrowUpRight size={17} />
      </a>

      <div className="contact-availability">
        <span className="live-dot" />
        OPEN TO PROFESSIONAL OPPORTUNITIES
      </div>

    </div>

    {/* CONTACT FORM */}
    <form
      className="contact-form"
      onSubmit={handleContactSubmit}
    >

      <div className="form-heading">
        <span>TRANSMISSION TERMINAL</span>
        <small>SECURE MESSAGE CHANNEL</small>
      </div>

      <label>
        FULL NAME

        <input
          type="text"
          required
          maxLength={80}
          value={form.fullName}
          onChange={(event) =>
            setForm({ ...form, fullName: event.target.value })
          }
          placeholder="Enter your full name"
        />
      </label>

      <label>
        EMAIL ADDRESS

        <input
          type="email"
          required
          maxLength={120}
          value={form.email}
          onChange={(event) =>
            setForm({ ...form, email: event.target.value })
          }
          placeholder="yourname@example.com"
        />
      </label>

      <label>
        SUBJECT

        <input
          type="text"
          required
          maxLength={120}
          value={form.subject}
          onChange={(event) =>
            setForm({ ...form, subject: event.target.value })
          }
          placeholder="What would you like to discuss?"
        />
      </label>

      <label>
        MESSAGE

        <textarea
          required
          rows="5"
          maxLength={2000}
          value={form.message}
          onChange={(event) =>
            setForm({ ...form, message: event.target.value })
          }
          placeholder="Write your message here..."
        />
      </label>

      <div className="message-counter">
        {form.message.length} / 2000 CHARACTERS
      </div>

      <button className="send-button" type="submit">
        SEND MESSAGE
        <ArrowUpRight size={17} />
      </button>

      <p className="form-note">
        Your default email application will open with
        your message prepared for sending.
      </p>

      {sent && (
        <p className="form-success">
          <span className="live-dot" />
          EMAIL APPLICATION REQUESTED
        </p>
      )}

    </form>

  </div>
)}
              </div>

              <div className="panel-bottom">
                <span><LockKeyhole size={13} /> SECURE CONNECTION</span>
                <button onClick={closePanel}>BACK TO NETWORK <ArrowUpRight size={14} /></button>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
