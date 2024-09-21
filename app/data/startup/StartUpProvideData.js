import {
  FaMobileAlt,
  FaUserFriends,
  FaSearch,
  FaShieldAlt,
  FaShoppingCart,
  FaEdit,
  FaWpforms,
  FaTachometerAlt,
  FaChartLine,
  FaShareAlt,
  FaBriefcase,
  FaGavel,
  FaBuilding,
  FaBullhorn,
  FaTools,
  FaUsers,
  FaHandshake,
  FaMoneyCheckAlt,
  FaMoneyBillWave,
  FaLock,
  FaChalkboardTeacher,
  FaComments,
  FaHandsHelping,
  FaLaptopCode,
  FaGlobe,
  FaPenFancy,
  FaTasks,
  FaProjectDiagram,
  FaFileContract,
  FaUsersCog,
  FaUserPlus,
  FaPaintBrush,
  FaClipboardList,
  FaDollarSign,
  FaTrademark,
  FaRocket,
  FaChartBar,
  FaCogs,
  FaCode,
  FaCloud,
  FaHeadset,
  FaDatabase,
  FaLightbulb,
  FaDev,
  FaServer,
  FaCog,
  FaUserShield,
  FaFileAlt,
  FaBrain,
  FaEnvelope,
  FaClipboardCheck,
  FaRegStar,
  FaCamera,
  FaRegEdit,
  FaMapMarkedAlt,
  FaRegHeart,
  FaTrophy,
  FaListAlt,
  FaPaperPlane,
  FaRegThumbsUp,
  FaEnvelopeOpen,
  FaRetweet,
  FaUserCheck,
  FaLaptop,
  FaDesktop,
  FaNetworkWired,
  FaCheckCircle,
  FaRegBookmark,
  FaGem,
  FaRegEye,
  FaMapMarkerAlt,
  FaPenNib,
  FaExternalLinkAlt,
  FaRoute,
  FaFileCode,
  FaArchive,
  FaRegChartBar,
  FaRobot,
  FaCodeBranch,
  FaChartPie,
  FaCloudUploadAlt,
  FaSyncAlt,
  FaThumbsUp,
  FaRegSmile,
  FaPhoneSquareAlt,
  FaEnvelopeOpenText,
  FaFacebook,
  FaAd,
  FaEye,
  FaHashtag,
  FaCalendarCheck,
  FaPlayCircle,
  FaTag,
  FaHeart,
  FaCommentDots,
  FaCheckSquare,
  FaPoll,
  FaGift,
  FaPalette,
  FaRegCalendarCheck,
  FaInstagram,
  FaLink,
  FaLanguage,
} from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";

const startupProvideData = [
  // What We Provide
  {
    key: "responsiveDesign",
    title: "Responsive Design",
    description:
      "Websites that look and work well on all devices, from smartphones to desktops.",
    icon: <FaMobileAlt />,
  },
  {
    key: "userFriendlyExperience",
    title: "User-Friendly Experience",
    description:
      "Easy-to-navigate designs that make your site simple and enjoyable for visitors to use.",
    icon: <FaUserFriends />,
  },
  {
    key: "seoReady",
    title: "SEO Ready",
    description:
      "We build your site with SEO best practices, helping you rank higher on Google and attract more visitors.",
    icon: <FaSearch />,
  },
  {
    key: "secureFlexible",
    title: "Secure and Flexible",
    description:
      "We use secure technology and create websites that can grow as your business grows.",
    icon: <FaShieldAlt />,
  },
  {
    key: "ecommerceIntegration",
    title: "E-Commerce Integration",
    description:
      "Sell your products online with custom e-commerce setups that are easy to manage.",
    icon: <FaShoppingCart />,
  },
  {
    key: "cmsSetup",
    title: "Content Management System (CMS)",
    description:
      "Easily update your website content without needing technical skills.",
    icon: <FaEdit />,
  },
  {
    key: "customForms",
    title: "Custom Forms",
    description:
      "We create forms that help you collect information from your visitors and turn them into customers.",
    icon: <FaWpforms />,
  },
  {
    key: "fastLoading",
    title: "Fast Loading",
    description:
      "We make sure your website loads quickly, improving user experience and your ranking on search engines.",
    icon: <FaTachometerAlt />,
  },
  {
    key: "analyticsSetup",
    title: "Analytics Setup",
    description:
      "Track how visitors use your site and make smart decisions based on data.",
    icon: <FaChartLine />,
  },
  {
    key: "socialMediaLinks",
    title: "Social Media Links",
    description:
      "Connect your website with your social media accounts, so people can easily follow and share your content.",
    icon: <FaShareAlt />,
  },
  {
    key: "marketResearch",
    title: "Market Research",
    description:
      "Identify your target audience, understand industry trends, and evaluate your competition.",
    icon: <FaSearch />,
  },
  {
    key: "branding",
    title: "Brand Identity",
    description:
      "Create a unique brand identity with a professional logo, color scheme, and brand voice.",
    icon: <FaBullhorn />,
  },

  {
    key: "domainHosting",
    title: "Domain & Hosting",
    description:
      "Purchase a relevant domain name and reliable hosting service to get your site online.",
    icon: <FaGlobe />,
  },
  {
    key: "seoOptimization",
    title: "SEO Optimization",
    description:
      "Optimize your website for search engines with keyword research, meta descriptions, and quality content.",
    icon: <FaSearch />,
  },

  {
    key: "digitalMarketingStrategy",
    title: "Digital Marketing Strategy",
    description:
      "Plan a multi-channel marketing strategy including SEO, PPC, Social Media, and Email Marketing.",
    icon: <FaChartLine />,
  },
  {
    key: "contentMarketing",
    title: "Content Marketing",
    description:
      "Develop a content calendar for blogs, social media, and newsletters to engage your audience.",
    icon: <FaPenFancy />,
  },
  {
    key: "socialMediaPresence",
    title: "Social Media Presence",
    description:
      "Create and maintain profiles on platforms like LinkedIn, Facebook, Instagram, and Twitter.",
    icon: <FaShareAlt />,
  },
  {
    key: "salesFunnel",
    title: "Sales Funnel",
    description:
      "Create a sales funnel with lead generation, nurturing, and conversion strategies.",
    icon: <FaHandshake />,
  },

  {
    key: "projectManagementTools",
    title: "Project Management Tools",
    description:
      "Utilize tools like Asana, Trello, or ClickUp for project management and collaboration.",
    icon: <FaTasks />,
  },
  {
    key: "crmSystems",
    title: "CRM Systems",
    description:
      "Implement a CRM like HubSpot, Salesforce, or Zoho to manage customer relationships.",
    icon: <FaUsersCog />,
  },
  {
    key: "marketingTools",
    title: "Marketing Tools",
    description:
      "Use tools like Google Analytics, SEMrush, and Ahrefs for SEO; Mailchimp or Klaviyo for Email Marketing.",
    icon: <FaBullhorn />,
  },
  {
    key: "designTools",
    title: "Design Tools",
    description:
      "Utilize Adobe Creative Cloud, Canva, or Figma for graphic design needs.",
    icon: <FaPaintBrush />,
  },
  {
    key: "dataProtection",
    title: "Data Protection",
    description:
      "Ensure compliance with data protection regulations like GDPR or CCPA.",
    icon: <FaLock />,
  },
  {
    key: "cyberSecurity",
    title: "Cybersecurity",
    description:
      "Implement cybersecurity measures to protect your business and client data.",
    icon: <FaLock />,
  },
];

const itSolutionsData = [
  {
    key: "customSoftwareDevelopment",
    title: "Custom Software Development",
    description:
      "Tailored applications that align with your business objectives, enhancing productivity and user experience.",
    icon: <FaCode />,
  },
  {
    key: "cloudComputing",
    title: "Cloud Computing",
    description:
      "Utilize cloud services for scalable infrastructure, data storage, and enhanced collaboration.",
    icon: <FaCloud />,
  },
  {
    key: "itSupportServices",
    title: "IT Support Services",
    description:
      "Ongoing technical support to resolve issues quickly and maintain optimal performance, allowing you to focus on your core business activities.",
    icon: <FaHeadset />,
  },
  {
    key: "networkSecurity",
    title: "Network Security",
    description:
      "Implement robust security measures to protect your data and systems from cyber threats, ensuring compliance with industry standards.",
    icon: <FaLock />,
  },
  {
    key: "dataManagement",
    title: "Data Management",
    description:
      "Efficient data storage, backup, and recovery solutions to safeguard your valuable information and ensure business continuity.",
    icon: <FaDatabase />,
  },
  {
    key: "systemIntegration",
    title: "System Integration",
    description:
      "Seamless integration of various IT systems and tools, optimizing workflows and enhancing overall efficiency.",
    icon: <FaProjectDiagram />,
  },
  {
    key: "itConsulting",
    title: "IT Consulting",
    description:
      "Expert guidance on technology strategy, implementation, and optimization for your business.",
    icon: <FaLightbulb />,
  },
  {
    key: "mobileAppDevelopment",
    title: "Mobile App Development",
    description:
      "Custom mobile applications designed to enhance user engagement and provide seamless access to your services.",
    icon: <FaMobileAlt />,
  },
  {
    key: "digitalMarketingSolutions",
    title: "Digital Marketing Solutions",
    description:
      "Comprehensive digital marketing strategies, including SEO, content marketing, and social media management, to increase visibility and drive traffic.",
    icon: <FaBullhorn />,
  },
  {
    key: "artificialIntelligence",
    title: "Artificial Intelligence",
    description:
      "Implement AI solutions to automate processes, enhance decision-making, and improve customer experiences.",
    icon: <FaBrain />,
  },
  {
    key: "blockchainTechnology",
    title: "Blockchain Technology",
    description:
      "Leverage blockchain for secure transactions, enhanced transparency, and improved data integrity.",
    icon: <SiHiveBlockchain />,
  },
  {
    key: "devOps",
    title: "DevOps Services",
    description:
      "Integrate development and operations for faster delivery, better collaboration, and continuous improvement.",
    icon: <FaDev />,
  },
  {
    key: "managedITServices",
    title: "Managed IT Services",
    description:
      "Comprehensive IT management services that ensure your systems are running smoothly and efficiently.",
    icon: <FaServer />,
  },
  {
    key: "automationSolutions",
    title: "Automation Solutions",
    description:
      "Implement automation technologies to streamline your business processes and improve productivity.",
    icon: <FaCog />,
  },
  {
    key: "ITSecurityAudits",
    title: "IT Security Audits",
    description:
      "Comprehensive assessments of your IT infrastructure to identify vulnerabilities and enhance security measures.",
    icon: <FaUserShield />,
  },
  {
    key: "dataAnalytics",
    title: "Data Analytics",
    description:
      "Leverage data analytics tools to gain insights into your business performance and drive informed decision-making.",
    icon: <FaChartLine />,
  },
  {
    key: "documentationServices",
    title: "Documentation Services",
    description:
      "Create and maintain technical documentation to ensure clarity and compliance across your organization.",
    icon: <FaFileAlt />,
  },
];

const brandingSolutionsData = [
  {
    key: "brandStrategy",
    title: "Brand Strategy Development",
    description:
      "Craft a unique brand identity that communicates your vision and values effectively.",
    icon: <FaLightbulb />,
  },
  {
    key: "marketingPlan",
    title: "Tailored Marketing Plans",
    description:
      "Develop customized marketing strategies that align with your business goals and target audience.",
    icon: <FaBullhorn />,
  },
  {
    key: "socialMediaMarketing",
    title: "Social Media Marketing",
    description:
      "Engage your audience through effective social media campaigns that build community and loyalty.",
    icon: <FaUsers />,
  },
  {
    key: "contentCreation",
    title: "Content Creation",
    description:
      "Produce high-quality content that resonates with your audience and drives engagement.",
    icon: <FaPenFancy />,
  },
  {
    key: "emailMarketing",
    title: "Email Marketing Campaigns",
    description:
      "Reach your audience directly with targeted email campaigns that promote your brand and products.",
    icon: <FaEnvelope />,
  },
  {
    key: "seoOptimization",
    title: "SEO Optimization",
    description:
      "Enhance your online visibility through effective SEO strategies that improve search engine rankings.",
    icon: <FaSearch />,
  },
  {
    key: "analyticsTracking",
    title: "Performance Analytics",
    description:
      "Monitor and analyze marketing performance to make data-driven decisions for ongoing success.",
    icon: <FaChartLine />,
  },
  {
    key: "mobileMarketing",
    title: "Mobile Marketing Strategies",
    description:
      "Develop marketing strategies optimized for mobile devices to reach customers on-the-go.",
    icon: <FaMobileAlt />,
  },
  {
    key: "brandAudit",
    title: "Brand Audit",
    description:
      "Evaluate your current branding to identify strengths and areas for improvement.",
    icon: <FaClipboardCheck />,
  },
  {
    key: "influencerMarketing",
    title: "Influencer Marketing",
    description:
      "Partner with influencers to increase brand awareness and reach new audiences.",
    icon: <FaRegStar />,
  },
  {
    key: "websiteRedesign",
    title: "Website Redesign",
    description:
      "Refresh your website to improve user experience and align with your brand identity.",
    icon: <FaCog />,
  },
  {
    key: "leadGeneration",
    title: "Lead Generation Strategies",
    description:
      "Implement effective strategies to attract and convert potential customers into leads.",
    icon: <FaRocket />,
  },
  {
    key: "videoMarketing",
    title: "Video Marketing Solutions",
    description:
      "Create engaging video content that tells your brand story and captures audience attention.",
    icon: <FaCamera />,
  },
  {
    key: "eventMarketing",
    title: "Event Marketing",
    description:
      "Plan and promote events that enhance brand visibility and engage your target audience.",
    icon: <FaHandshake />,
  },
  {
    key: "contentMarketing",
    title: "Content Marketing Strategies",
    description:
      "Develop comprehensive content strategies that drive traffic and build brand loyalty.",
    icon: <FaRegEdit />,
  },
  {
    key: "localSEO",
    title: "Local SEO Strategies",
    description:
      "Optimize your online presence for local searches to attract nearby customers.",
    icon: <FaMapMarkedAlt />,
  },
  {
    key: "reputationManagement",
    title: "Online Reputation Management",
    description:
      "Monitor and manage your online reputation to maintain a positive brand image.",
    icon: <FaShieldAlt />,
  },
  {
    key: "customerFeedback",
    title: "Customer Feedback Solutions",
    description:
      "Gather and analyze customer feedback to improve products and services.",
    icon: <FaRegHeart />,
  },
  {
    key: "partnerships",
    title: "Strategic Partnerships",
    description:
      "Form partnerships with other brands to leverage audiences and enhance visibility.",
    icon: <FaTrophy />,
  },
];

const emailCampaignSolutionsData = [
  {
    key: "strategyDevelopment",
    title: "Email Marketing Strategy Development",
    description:
      "Craft a comprehensive email marketing strategy aligned with your business goals.",
    icon: <FaBullhorn />,
  },
  {
    key: "templateDesign",
    title: "Custom Email Template Design",
    description:
      "Design visually appealing email templates that reflect your brand and engage recipients.",
    icon: <FaRegEdit />,
  },
  {
    key: "emailCreation",
    title: "Email Creation",
    description:
      "Create compelling and engaging emails tailored to your audience.",
    icon: <FaEnvelopeOpen />,
  },
  {
    key: "emailCopywriting",
    title: "Email Copywriting",
    description:
      "Professional copywriting services to craft persuasive and effective email content.",
    icon: <FaClipboardList />,
  },
  {
    key: "htmlTemplates",
    title: "HTML Email Templates",
    description:
      "Develop responsive HTML email templates for a polished and professional look.",
    icon: <FaRegEdit />,
  },
  {
    key: "listManagement",
    title: "Email List Management",
    description:
      "Organize and segment your email lists for targeted communication and better engagement.",
    icon: <FaListAlt />,
  },
  {
    key: "automatedCampaigns",
    title: "Automated Email Campaigns",
    description:
      "Set up automated email sequences that nurture leads and drive conversions.",
    icon: <FaEnvelopeOpen />,
  },
  {
    key: "designServices",
    title: "Email Design",
    description:
      "Professional design services to enhance the visual appeal of your email campaigns.",
    icon: <FaChartBar />,
  },
  {
    key: "signatureDesign",
    title: "Email Signature Design",
    description:
      "Create customized email signatures that enhance your professional image.",
    icon: <FaRegThumbsUp />,
  },
  {
    key: "A/BTesting",
    title: "A/B Testing for Optimization",
    description:
      "Test different email elements to find the most effective strategies for your audience.",
    icon: <FaChartBar />,
  },
  {
    key: "performanceAnalytics",
    title: "Performance Analytics and Reporting",
    description:
      "Monitor and analyze campaign performance to continuously improve results.",
    icon: <FaClipboardList />,
  },
  {
    key: "personalization",
    title: "Personalization Strategies",
    description:
      "Implement personalized content strategies to increase engagement and conversions.",
    icon: <FaUserCheck />,
  },
  {
    key: "re-engagementCampaigns",
    title: "Re-engagement Campaigns",
    description:
      "Win back inactive subscribers with targeted re-engagement strategies.",
    icon: <FaRetweet />,
  },
  {
    key: "complianceSupport",
    title: "Email Compliance Support",
    description:
      "Ensure your campaigns comply with regulations like GDPR and CAN-SPAM.",
    icon: <FaCogs />,
  },
  {
    key: "newsletterCreation",
    title: "Newsletter Creation",
    description:
      "Create engaging newsletters that keep your audience informed and connected.",
    icon: <FaPaperPlane />,
  },
  {
    key: "callToAction",
    title: "Compelling Call-to-Actions",
    description:
      "Craft effective CTAs that drive action and improve conversion rates.",
    icon: <FaRegThumbsUp />,
  },
  {
    key: "eventPromotions",
    title: "Event Promotion Emails",
    description:
      "Promote your events through targeted email campaigns to maximize attendance.",
    icon: <FaEnvelopeOpen />,
  },
  {
    key: "integration",
    title: "CRM and Email Integration",
    description:
      "Integrate your email marketing with CRM systems for seamless data management.",
    icon: <FaCogs />,
  },
  {
    key: "customerFeedback",
    title: "Customer Feedback Emails",
    description:
      "Collect valuable feedback from your audience to enhance your offerings.",
    icon: <FaRegThumbsUp />,
  },
  {
    key: "dripCampaigns",
    title: "Drip Campaigns",
    description:
      "Implement drip campaigns to nurture leads over time with valuable content.",
    icon: <FaPaperPlane />,
  },
  {
    key: "socialMediaIntegration",
    title: "Social Media Integration",
    description:
      "Integrate social sharing options in your emails to increase reach.",
    icon: <FaBullhorn />,
  },
  {
    key: "templateTesting",
    title: "Template Testing",
    description:
      "Test different email templates to determine what resonates with your audience.",
    icon: <FaChartBar />,
  },
  {
    key: "segmentation",
    title: "Advanced Segmentation",
    description:
      "Utilize advanced segmentation techniques for more targeted campaigns.",
    icon: <FaListAlt />,
  },
];

const techSupportSolutionsData = [
  {
    key: "technicalSupport",
    title: "Technical Support",
    description:
      "24/7 technical support to address issues quickly and minimize downtime.",
    icon: <FaHeadset />,
  },
  {
    key: "networkManagement",
    title: "Network Management",
    description:
      "Manage and optimize your network for performance and security.",
    icon: <FaNetworkWired />,
  },
  {
    key: "hardwareSupport",
    title: "Hardware Support",
    description:
      "Assistance with the setup, maintenance, and repair of hardware.",
    icon: <FaTools />,
  },
  {
    key: "softwareInstallation",
    title: "Software Installation & Management",
    description:
      "Install and manage software applications to meet your business needs.",
    icon: <FaDesktop />,
  },
  {
    key: "cloudServices",
    title: "Cloud Services",
    description:
      "Scalable cloud solutions for data storage, backup, and collaboration.",
    icon: <FaCloud />,
  },
  {
    key: "dataBackup",
    title: "Data Backup & Recovery",
    description:
      "Ensure your data is backed up securely and can be recovered easily.",
    icon: <FaDatabase />,
  },
  {
    key: "cyberSecurity",
    title: "Cybersecurity Solutions",
    description:
      "Implement security measures to protect your business from cyber threats.",
    icon: <FaShieldAlt />,
  },
  {
    key: "itConsulting",
    title: "IT Consulting",
    description:
      "Strategic advice on technology investments and infrastructure.",
    icon: <FaCogs />,
  },
  {
    key: "systemIntegration",
    title: "System Integration",
    description: "Seamlessly integrate various systems to improve efficiency.",
    icon: <FaServer />,
  },
  {
    key: "remoteSupport",
    title: "Remote Support Services",
    description:
      "Troubleshoot and resolve issues remotely for quick assistance.",
    icon: <FaLaptop />,
  },
  {
    key: "networkSecurity",
    title: "Network Security",
    description:
      "Secure your network to prevent unauthorized access and data breaches.",
    icon: <FaLock />,
  },
  {
    key: "itInfrastructure",
    title: "IT Infrastructure Management",
    description: "Manage your IT infrastructure to ensure optimal performance.",
    icon: <FaChartBar />,
  },
  {
    key: "complianceSupport",
    title: "Compliance and Regulatory Support",
    description: "Ensure your IT practices comply with industry regulations.",
    icon: <FaFileAlt />,
  },
  {
    key: "mobileDeviceManagement",
    title: "Mobile Device Management",
    description:
      "Manage and secure mobile devices used within your organization.",
    icon: <FaMobileAlt />,
  },
  {
    key: "performanceMonitoring",
    title: "Performance Monitoring",
    description: "Monitor system performance to proactively address issues.",
    icon: <FaClipboardCheck />,
  },
  {
    key: "customSoftware",
    title: "Custom Software Solutions",
    description:
      "Develop tailored software solutions to meet your specific business needs.",
    icon: <FaCode />,
  },
  {
    key: "helpdeskSupport",
    title: "Helpdesk Support",
    description:
      "Provide a central point for users to report issues and request help.",
    icon: <FaHeadset />,
  },
  {
    key: "disasterRecovery",
    title: "Disaster Recovery Planning",
    description:
      "Create and implement plans to recover from data loss or IT failures.",
    icon: <FaShieldAlt />,
  },
  {
    key: "techTraining",
    title: "Technical Training",
    description: "Train your staff on new technologies and best practices.",
    icon: <FaRegThumbsUp />,
  },
  {
    key: "virtualCIO",
    title: "Virtual CIO Services",
    description:
      "Access high-level IT strategy and planning without the full-time cost.",
    icon: <FaCogs />,
  },
];

const seoAnalyticsServicesData = [
  {
    key: "keywordResearch",
    title: "Keyword Research",
    description:
      "Identify the most effective keywords for your target audience to improve your search rankings.",
    icon: <FaSearch />,
  },
  {
    key: "onPageSEO",
    title: "On-Page SEO Optimization",
    description:
      "Optimize your website’s content and structure for better visibility on search engines.",
    icon: <FaFileAlt />,
  },
  {
    key: "linkBuilding",
    title: "Link Building",
    description:
      "Develop a strong backlink profile to enhance your site's authority and ranking.",
    icon: <FaExternalLinkAlt />,
  },
  {
    key: "technicalSEO",
    title: "Technical SEO Audit",
    description:
      "Conduct a comprehensive audit to identify and fix technical issues affecting your site’s performance.",
    icon: <FaCogs />,
  },
  {
    key: "contentStrategy",
    title: "Content Strategy Development",
    description:
      "Create a content plan that aligns with your SEO goals and engages your audience.",
    icon: <FaPenNib />,
  },
  {
    key: "localSEO",
    title: "Local SEO Services",
    description:
      "Optimize your online presence for local searches to attract nearby customers.",
    icon: <FaMapMarkerAlt />,
  },
  {
    key: "performanceAnalytics",
    title: "Performance Analytics",
    description:
      "Track and analyze your website's performance with actionable insights.",
    icon: <IoMdAnalytics />,
  },
  {
    key: "SEOReporting",
    title: "SEO Reporting",
    description:
      "Receive regular reports on your SEO performance, including traffic and ranking changes.",
    icon: <FaClipboardList />,
  },
  {
    key: "competitorAnalysis",
    title: "Competitor Analysis",
    description:
      "Understand your competition and identify opportunities to outperform them.",
    icon: <FaBullhorn />,
  },
  {
    key: "userExperience",
    title: "User Experience Optimization",
    description:
      "Enhance your website’s user experience to improve engagement and reduce bounce rates.",
    icon: <FaRegEye />,
  },
  {
    key: "socialMediaSEO",
    title: "Social Media SEO",
    description:
      "Integrate social media strategies with your SEO efforts to expand your reach.",
    icon: <FaGlobe />,
  },
  {
    key: "conversionRateOptimization",
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Improve your website's design and content to boost conversion rates.",
    icon: <FaRocket />,
  },
  {
    key: "siteSpeedOptimization",
    title: "Site Speed Optimization",
    description:
      "Optimize your website’s loading speed for better user experience and SEO ranking.",
    icon: <FaTachometerAlt />,
  },
  {
    key: "mobileSEO",
    title: "Mobile SEO Optimization",
    description:
      "Ensure your site is fully optimized for mobile users to improve accessibility.",
    icon: <FaMobileAlt />,
  },
  {
    key: "schemaMarkup",
    title: "Schema Markup Implementation",
    description:
      "Enhance your search listings with rich snippets through schema markup.",
    icon: <FaGem />,
  },
  {
    key: "A/BTesting",
    title: "A/B Testing",
    description:
      "Conduct tests to compare different versions of your website for better performance.",
    icon: <FaRegBookmark />,
  },
  {
    key: "emailSEO",
    title: "Email SEO",
    description:
      "Optimize your email campaigns to improve visibility and engagement rates.",
    icon: <FaPaperPlane />,
  },
  {
    key: "brandMonitoring",
    title: "Brand Monitoring",
    description:
      "Track mentions of your brand online to manage your reputation effectively.",
    icon: <FaCheckCircle />,
  },
  {
    key: "videoSEO",
    title: "Video SEO Optimization",
    description:
      "Optimize your video content for search engines to increase visibility.",
    icon: <FaChartLine />,
  },
];

const cloudServicesData = [
  {
    key: "cloudInfrastructure",
    title: "Cloud Infrastructure Setup",
    description:
      "Set up robust cloud infrastructure tailored to your business needs, ensuring scalability and security.",
    icon: <FaCloud />,
  },
  {
    key: "cloudMigration",
    title: "Cloud Migration Services",
    description:
      "Seamlessly migrate your existing applications and data to the cloud with minimal downtime.",
    icon: <FaServer />,
  },
  {
    key: "dataStorage",
    title: "Data Storage Solutions",
    description:
      "Secure and scalable storage solutions for your business data, accessible from anywhere.",
    icon: <FaDatabase />,
  },
  {
    key: "disasterRecovery",
    title: "Disaster Recovery Planning",
    description:
      "Ensure business continuity with effective disaster recovery strategies and backup solutions.",
    icon: <FaSyncAlt />,
  },
  {
    key: "cloudSecurity",
    title: "Cloud Security Services",
    description:
      "Protect your cloud environment with advanced security measures and compliance solutions.",
    icon: <FaShieldAlt />,
  },
  {
    key: "cloudBackup",
    title: "Cloud Backup Solutions",
    description:
      "Automated cloud backups to protect your data and ensure quick recovery in case of data loss.",
    icon: <FaCloudUploadAlt />,
  },
  {
    key: "devOps",
    title: "DevOps Services",
    description:
      "Streamline your development processes with DevOps solutions, enabling faster and more reliable software delivery.",
    icon: <FaCogs />,
  },
  {
    key: "cloudAnalytics",
    title: "Cloud Analytics & Monitoring",
    description:
      "Monitor and analyze your cloud infrastructure to optimize performance and resource utilization.",
    icon: <FaChartPie />,
  },
  {
    key: "networkManagement",
    title: "Cloud Network Management",
    description:
      "Manage and optimize your cloud network to ensure seamless connectivity and performance.",
    icon: <FaNetworkWired />,
  },
  {
    key: "identityManagement",
    title: "Identity & Access Management",
    description:
      "Implement robust identity and access management solutions to secure your cloud resources.",
    icon: <FaLock />,
  },
  {
    key: "virtualDesktops",
    title: "Virtual Desktop Solutions",
    description:
      "Provide your team with secure, scalable virtual desktops that can be accessed from anywhere.",
    icon: <FaDesktop />,
  },
  {
    key: "continuousIntegration",
    title: "Continuous Integration & Deployment (CI/CD)",
    description:
      "Automate your software development pipeline with CI/CD tools to accelerate release cycles.",
    icon: <FaCodeBranch />,
  },
  {
    key: "aiCloud",
    title: "AI and Machine Learning in Cloud",
    description:
      "Leverage cloud-based AI and machine learning tools to gain insights and automate processes.",
    icon: <FaRobot />,
  },
  {
    key: "mobileBackend",
    title: "Mobile App Backend Services",
    description:
      "Deploy scalable and secure backends for your mobile applications using cloud services.",
    icon: <FaMobileAlt />,
  },
  {
    key: "cloudCostManagement",
    title: "Cloud Cost Management",
    description:
      "Optimize your cloud spending with detailed cost analysis and management tools.",
    icon: <FaRegChartBar />,
  },
  {
    key: "dataProtection",
    title: "Data Protection & Compliance",
    description:
      "Ensure compliance with data protection regulations and secure your cloud data.",
    icon: <FaUserShield />,
  },
  {
    key: "performanceOptimization",
    title: "Performance Optimization",
    description:
      "Maximize the performance of your cloud services with continuous monitoring and optimization.",
    icon: <FaTachometerAlt />,
  },
  {
    key: "cloudArchiving",
    title: "Cloud Data Archiving",
    description:
      "Archive your business-critical data securely in the cloud for long-term storage and retrieval.",
    icon: <FaArchive />,
  },
  {
    key: "serverlessComputing",
    title: "Serverless Computing",
    description:
      "Run applications without managing servers, enabling scalable and cost-effective solutions.",
    icon: <FaFileCode />,
  },
  {
    key: "contentDelivery",
    title: "Content Delivery Network (CDN) Services",
    description:
      "Deliver your content faster and more reliably with our CDN services, improving user experience.",
    icon: <FaRoute />,
  },
];

export {
  startupProvideData,
  itSolutionsData,
  brandingSolutionsData,
  emailCampaignSolutionsData,
  techSupportSolutionsData,
  seoAnalyticsServicesData,
  cloudServicesData,
};
