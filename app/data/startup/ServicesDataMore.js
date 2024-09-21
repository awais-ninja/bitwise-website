import {
  FaAd,
  FaBullhorn,
  FaCalendarCheck,
  FaCamera,
  FaChalkboardTeacher,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaCheckCircle,
  FaCheckSquare,
  FaCogs,
  FaCommentDots,
  FaComments,
  FaEnvelopeOpenText,
  FaEye,
  FaFacebook,
  FaFileAlt,
  FaGift,
  FaGlobe,
  FaHandshake,
  FaHandsHelping,
  FaHashtag,
  FaHeadset,
  FaHeart,
  FaInstagram,
  FaLanguage,
  FaLink,
  FaMobileAlt,
  FaNetworkWired,
  FaPalette,
  FaPenFancy,
  FaPhoneSquareAlt,
  FaPlayCircle,
  FaPoll,
  FaRegCalendarCheck,
  FaRegSmile,
  FaRobot,
  FaRocket,
  FaSearch,
  FaShareAlt,
  FaShieldAlt,
  FaSyncAlt,
  FaTag,
  FaThumbsUp,
  FaTools,
  FaTrademark,
  FaUserCheck,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";

const socialMediaServicesData = [
  {
    key: "socialMediaManagement",
    title: "Social Media Management",
    description:
      "Complete management of your social media profiles to maintain a consistent and professional online presence.",
    icon: <FaFacebook />,
  },
  {
    key: "contentCreation",
    title: "Content Creation",
    description:
      "High-quality content creation including graphics, videos, and posts that engage and attract your audience.",
    icon: <FaPenFancy />,
  },
  {
    key: "socialMediaAds",
    title: "Social Media Advertising",
    description:
      "Targeted advertising campaigns on platforms like Facebook, Instagram, and LinkedIn to reach your ideal customers.",
    icon: <FaAd />,
  },
  {
    key: "socialMediaStrategy",
    title: "Social Media Strategy Development",
    description:
      "Customized strategies to align your social media efforts with your business goals and maximize impact.",
    icon: <FaChartPie />,
  },
  {
    key: "communityManagement",
    title: "Community Management",
    description:
      "Engage with your followers, respond to comments, and foster a loyal community around your brand.",
    icon: <FaUsers />,
  },
  {
    key: "influencerMarketing",
    title: "Influencer Marketing",
    description:
      "Partner with influencers to expand your reach and build credibility through trusted voices in your industry.",
    icon: <FaBullhorn />,
  },
  {
    key: "analyticsReporting",
    title: "Analytics & Reporting",
    description:
      "Detailed analytics and performance reports to track the effectiveness of your social media campaigns.",
    icon: <FaChartPie />,
  },
  {
    key: "socialListening",
    title: "Social Listening",
    description:
      "Monitor social media channels for mentions of your brand, competitors, and industry trends.",
    icon: <FaEye />,
  },
  {
    key: "hashtagStrategy",
    title: "Hashtag Strategy",
    description:
      "Develop effective hashtag strategies to increase the visibility of your posts and reach new audiences.",
    icon: <FaHashtag />,
  },
  {
    key: "contentCalendar",
    title: "Content Calendar Planning",
    description:
      "Plan and organize your social media content in advance with a strategic content calendar.",
    icon: <FaCalendarCheck />,
  },
  {
    key: "videoMarketing",
    title: "Video Marketing",
    description:
      "Create and promote engaging video content to capture attention and drive more engagement.",
    icon: <FaPlayCircle />,
  },
  {
    key: "liveStreaming",
    title: "Live Streaming Support",
    description:
      "Host live sessions to interact with your audience in real time and build a deeper connection.",
    icon: <FaCamera />,
  },
  {
    key: "paidSocial",
    title: "Paid Social Campaigns",
    description:
      "Run paid social campaigns to boost your posts and gain visibility among targeted audiences.",
    icon: <FaTag />,
  },
  {
    key: "brandAwareness",
    title: "Brand Awareness Campaigns",
    description:
      "Strategic campaigns to increase your brand's visibility and recognition across social platforms.",
    icon: <FaBullhorn />,
  },
  {
    key: "engagementBoost",
    title: "Engagement Boost Strategies",
    description:
      "Tactics to increase likes, comments, shares, and overall engagement on your social media posts.",
    icon: <FaHeart />,
  },
  {
    key: "customerSupport",
    title: "Social Media Customer Support",
    description:
      "Provide customer service directly through social media channels to resolve issues and answer questions.",
    icon: <FaCommentDots />,
  },
  {
    key: "contentCuration",
    title: "Content Curation",
    description:
      "Share relevant and valuable third-party content to keep your audience informed and engaged.",
    icon: <FaShareAlt />,
  },
  {
    key: "socialMediaAudits",
    title: "Social Media Audits",
    description:
      "Comprehensive reviews of your social media profiles to identify strengths, weaknesses, and areas for improvement.",
    icon: <FaCheckSquare />,
  },
  {
    key: "pollsAndSurveys",
    title: "Polls & Surveys",
    description:
      "Create engaging polls and surveys to gather insights from your audience and boost interaction.",
    icon: <FaPoll />,
  },
  {
    key: "competitorAnalysis",
    title: "Competitor Analysis",
    description:
      "Analyze your competitors' social media strategies to identify opportunities and stay ahead.",
    icon: <FaSearch />,
  },
  {
    key: "accountSetup",
    title: "Account Setup & Optimization",
    description:
      "Set up and optimize your social media accounts to ensure they reflect your brand and attract followers.",
    icon: <FaTools />,
  },
  {
    key: "socialMediaContests",
    title: "Social Media Contests",
    description:
      "Run exciting contests to engage your audience and increase your followers and interactions.",
    icon: <FaGift />,
  },
  {
    key: "crossPlatformMarketing",
    title: "Cross-Platform Marketing",
    description:
      "Leverage multiple social platforms to maximize reach and impact with cohesive marketing strategies.",
    icon: <FaNetworkWired />,
  },
  {
    key: "userGeneratedContent",
    title: "User-Generated Content",
    description:
      "Encourage and share user-generated content to build community and authenticity around your brand.",
    icon: <FaHandsHelping />,
  },
  {
    key: "automatedPosts",
    title: "Automated Posting Solutions",
    description:
      "Automate your social media posts to maintain consistency and save time.",
    icon: <FaRobot />,
  },
  {
    key: "socialMediaOptimization",
    title: "Social Media Optimization (SMO)",
    description:
      "Optimize your profiles and content for better engagement and searchability.",
    icon: <FaCogs />,
  },
  {
    key: "mobileSocialMarketing",
    title: "Mobile Social Marketing",
    description:
      "Create and optimize social media campaigns specifically for mobile users.",
    icon: <FaMobileAlt />,
  },
  {
    key: "globalSocialMedia",
    title: "Global Social Media Strategies",
    description:
      "Expand your reach with strategies tailored to international audiences and different regions.",
    icon: <FaGlobe />,
  },
  {
    key: "socialMediaDesign",
    title: "Social Media Design",
    description:
      "Create visually appealing social media graphics and templates that reflect your brand identity.",
    icon: <FaPalette />,
  },
  {
    key: "contentScheduling",
    title: "Content Scheduling",
    description:
      "Schedule your social media posts in advance to maintain a consistent presence.",
    icon: <FaRegCalendarCheck />,
  },
  {
    key: "likeAndFollowCampaigns",
    title: "Like & Follow Campaigns",
    description:
      "Run campaigns to increase the number of likes and followers on your social media profiles.",
    icon: <FaThumbsUp />,
  },
  {
    key: "emailIntegration",
    title: "Email & Social Media Integration",
    description:
      "Integrate your email marketing with social media for cohesive campaigns and cross-channel engagement.",
    icon: <FaEnvelopeOpenText />,
  },
  {
    key: "socialMediaConsulting",
    title: "Social Media Consulting",
    description:
      "Get expert advice on how to optimize your social media strategy and grow your online presence.",
    icon: <FaUsers />,
  },
  {
    key: "storyMarketing",
    title: "Story Marketing",
    description:
      "Leverage the power of Instagram and Facebook Stories to share engaging and ephemeral content.",
    icon: <FaInstagram />,
  },
  {
    key: "viralMarketing",
    title: "Viral Marketing Campaigns",
    description:
      "Create and promote content with the potential to go viral and dramatically increase your visibility.",
    icon: <FaRocket />,
  },
  {
    key: "crossPromotions",
    title: "Cross-Promotions & Partnerships",
    description:
      "Partner with complementary brands and influencers for mutual promotion and growth.",
    icon: <FaHandshake />,
  },
  {
    key: "socialLinks",
    title: "Social Media Link Optimization",
    description:
      "Optimize your social media bios and links to drive traffic to your website or landing pages.",
    icon: <FaLink />,
  },
  {
    key: "multiLanguageSupport",
    title: "Multi-Language Support",
    description:
      "Create and manage social media content in multiple languages to reach a broader audience.",
    icon: <FaLanguage />,
  },
];

const customerSupportServicesData = [
  {
    key: "helpDeskSetup",
    title: "Help Desk Setup",
    description:
      "Establish a centralized help desk to manage and resolve customer queries efficiently.",
    icon: <FaHeadset />,
  },
  {
    key: "crmIntegration",
    title: "CRM Integration",
    description:
      "Integrate CRM systems to streamline customer data management and improve service personalization.",
    icon: <FaTools />,
  },
  {
    key: "emailSupport",
    title: "Email Support Solutions",
    description:
      "Manage and respond to customer emails effectively with our organized email support systems.",
    icon: <FaEnvelopeOpenText />,
  },
  {
    key: "liveChat",
    title: "Live Chat Support",
    description:
      "Provide real-time assistance to your customers through integrated live chat solutions.",
    icon: <FaComments />,
  },
  {
    key: "customerFeedback",
    title: "Customer Feedback Systems",
    description:
      "Collect and analyze customer feedback to improve your services and product offerings.",
    icon: <FaUserCheck />,
  },
  {
    key: "performanceAnalytics",
    title: "Performance Analytics",
    description:
      "Track customer support performance metrics to identify areas for improvement and optimize service quality.",
    icon: <FaChartLine />,
  },
  {
    key: "chatbots",
    title: "AI-Powered Chatbots",
    description:
      "Automate routine inquiries and provide instant responses with intelligent chatbots.",
    icon: <FaRobot />,
  },
  {
    key: "ticketManagement",
    title: "Ticket Management Systems",
    description:
      "Organize and track customer issues with an efficient ticket management system.",
    icon: <FaNetworkWired />,
  },
  {
    key: "onboardingSupport",
    title: "Customer Onboarding Support",
    description:
      "Ensure a smooth onboarding process for new customers with dedicated support and resources.",
    icon: <FaHandsHelping />,
  },
  {
    key: "mobileSupport",
    title: "Mobile Support Solutions",
    description:
      "Offer customer support on the go with mobile-friendly support systems and apps.",
    icon: <FaMobileAlt />,
  },
  {
    key: "proactiveSupport",
    title: "Proactive Support Strategies",
    description:
      "Anticipate customer needs and address potential issues before they arise.",
    icon: <FaCheckCircle />,
  },
  {
    key: "serviceAutomation",
    title: "Service Automation",
    description:
      "Automate repetitive tasks to improve efficiency and reduce response times.",
    icon: <FaCogs />,
  },
  {
    key: "dataProtection",
    title: "Data Protection Compliance",
    description:
      "Ensure customer data is handled securely and in compliance with regulations like GDPR and CCPA.",
    icon: <FaShieldAlt />,
  },
  {
    key: "customerInsightReports",
    title: "Customer Insight Reports",
    description:
      "Generate detailed reports on customer interactions to identify trends and improve service.",
    icon: <FaChartBar />,
  },
  {
    key: "incidentManagement",
    title: "Incident Management Solutions",
    description:
      "Efficiently handle service incidents and minimize their impact on customer experience.",
    icon: <FaSyncAlt />,
  },
  {
    key: "knowledgeBase",
    title: "Knowledge Base Development",
    description:
      "Create a comprehensive knowledge base to empower customers with self-service options.",
    icon: <FaFileAlt />,
  },
  {
    key: "voiceSupport",
    title: "Voice Support Services",
    description:
      "Provide high-quality voice support for complex queries and personalized assistance.",
    icon: <FaPhoneSquareAlt />,
  },
  {
    key: "customerSatisfactionSurveys",
    title: "Customer Satisfaction Surveys",
    description:
      "Gauge customer satisfaction with regular surveys and use feedback to enhance service quality.",
    icon: <FaRegSmile />,
  },
  {
    key: "identityVerification",
    title: "Identity Verification Services",
    description:
      "Verify customer identities securely to prevent fraud and build trust.",
    icon: <FaUserShield />,
  },
  {
    key: "qualityAssurance",
    title: "Support Quality Assurance",
    description:
      "Maintain high support standards with regular quality checks and training programs.",
    icon: <FaThumbsUp />,
  },
];

const startupConsultantProvideData = [
  {
    key: "marketAnalysis",
    title: "Market Analysis",
    description:
      "In-depth research to identify opportunities and threats in your industry.",
    icon: <FaChartLine />,
  },

  {
    key: "brandDevelopment",
    title: "Brand Development",
    description:
      "Strategies to build a strong brand identity that resonates with your target audience.",
    icon: <FaTrademark />,
  },
  {
    key: "growthHackingTechniques",
    title: "Growth Hacking Techniques",
    description:
      "Innovative approaches to accelerate growth using low-cost and high-impact methods.",
    icon: <FaRocket />,
  },

  {
    key: "workshopsAndTraining",
    title: "Workshops and Training",
    description:
      "Educational sessions designed to equip you with the skills needed for success.",
    icon: <FaChalkboardTeacher />,
  },
  {
    key: "performanceTracking",
    title: "Performance Tracking",
    description:
      "Tools and metrics to measure your progress and adjust strategies as needed.",
    icon: <FaChartBar />,
  },

  {
    key: "customSolutions",
    title: "Custom Solutions",
    description:
      "Tailored services that fit your specific business needs and objectives.",
    icon: <FaCogs />,
  },
];

export {
  startupConsultantProvideData,
  customerSupportServicesData,
  socialMediaServicesData,
};
