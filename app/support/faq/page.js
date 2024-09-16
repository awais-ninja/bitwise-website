"use client";

import FAQItem from "@/app/components/contact/FaqItems";
import React from "react";

const page = () => {
  const faqData = [
    {
      question: "What services does Bitwise offer?",
      answer:
        "Bitwise offers a range of services including digital marketing, website development, and IT solutions. We specialize in enhancing your online presence and optimizing your digital strategy.",
    },
    {
      question: "How can I contact Bitwise?",
      answer:
        "You can contact Bitwise via email at <a href='mailto:awaisahmad262003@gmail.com'>awaisahmad262003@gmail.com</a>, or call us at +92 304 9978 288. You can also reach us through our LinkedIn profile: <a href='https://www.linkedin.com/in/awais-ahmad-mirza/' target='_blank' rel='noopener noreferrer'>Awais Ahmad</a>.",
    },
    {
      question: "What is the response time for inquiries?",
      answer:
        "We aim to respond to all inquiries within 24-48 hours. If you have an urgent request, please indicate that in your message, and we will prioritize it.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes, we offer custom solutions tailored to your specific needs. Whether you require a unique digital marketing strategy or a bespoke website design, we can create a plan that fits your requirements.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing varies depending on the scope and complexity of the project. We offer competitive rates and provide detailed quotes based on your needs. Contact us for a personalized quote.",
    },
    {
      question: "Can I see examples of your previous work?",
      answer:
        "Absolutely! We have a portfolio showcasing some of our past projects. You can view it on our website or request specific examples relevant to your industry.",
    },
    {
      question: "What is your policy on revisions?",
      answer:
        "We offer a revision policy to ensure your satisfaction. The number of revisions included will be outlined in our agreement. Additional revisions may be subject to extra charges.",
    },
    {
      question: "How do I get started with Bitwise?",
      answer:
        "To get started, simply reach out to us via our contact form or email. We will schedule a consultation to discuss your needs, goals, and how we can assist you.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "Bitwise specializes in various industries including technology, finance, healthcare, and e-commerce. Our team has experience working with clients across different sectors to deliver tailored solutions.",
    },
    {
      question: "Do you offer ongoing support after the project is completed?",
      answer:
        "Yes, we offer ongoing support and maintenance services after the project is completed. Our support packages are designed to ensure your digital solutions continue to function smoothly.",
    },
    {
      question: "How do you ensure the security of my website?",
      answer:
        "We implement best practices for website security, including SSL certificates, regular security updates, and secure coding techniques. We also offer additional security services based on your needs.",
    },
    {
      question: "Can you help with SEO and content marketing?",
      answer:
        "Yes, we provide comprehensive SEO services and content marketing strategies to help improve your online visibility and drive traffic to your website.",
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We use a range of modern technologies including HTML, CSS, JavaScript, React, Node.js, and Next.js. We choose the best technology stack based on your project requirements.",
    },
    {
      question: "Do you offer training on how to use the new website or tools?",
      answer:
        "Yes, we offer training sessions to help you understand how to use and manage your new website or tools effectively. Our training is tailored to your needs and level of expertise.",
    },
    // Trending and potential trending questions
    {
      question: "What are the latest trends in digital marketing for 2024?",
      answer:
        "In 2024, key digital marketing trends include the rise of AI-driven marketing tools, increased focus on personalized content, the growing importance of data privacy, and the use of interactive and immersive content formats such as AR and VR.",
    },
    {
      question:
        "How is artificial intelligence changing the web development landscape?",
      answer:
        "Artificial intelligence is transforming web development by automating coding processes, enhancing user experience with AI-driven design, and improving website performance through intelligent analytics and predictive algorithms.",
    },
    {
      question:
        "What are the benefits of integrating chatbots into my website?",
      answer:
        "Integrating chatbots into your website can provide 24/7 customer support, improve user engagement, automate routine tasks, and gather valuable data on user interactions to enhance your overall service and marketing strategies.",
    },
    {
      question: "How can I improve my website's accessibility?",
      answer:
        "Improving website accessibility involves implementing best practices such as providing alt text for images, ensuring keyboard navigation, using high-contrast colors, and making sure your website is compatible with screen readers and other assistive technologies.",
    },
    {
      question: "What role does user experience (UX) play in SEO?",
      answer:
        "User experience (UX) is crucial for SEO as search engines prioritize websites that offer a seamless and engaging experience. Factors like page load speed, mobile-friendliness, and intuitive navigation all impact your SEO rankings.",
    },
    {
      question:
        "How do you ensure compliance with data protection regulations?",
      answer:
        "We ensure compliance with data protection regulations by implementing robust data security measures, conducting regular audits, and adhering to standards such as GDPR, CCPA, and other relevant data privacy laws.",
    },
    {
      question: "What is the impact of voice search on SEO?",
      answer:
        "Voice search is influencing SEO by increasing the demand for conversational and natural language queries. Optimizing for voice search involves focusing on long-tail keywords, providing clear and concise answers, and improving local SEO.",
    },
  ];

  return (
    <div>
      <section className="my-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8 text-primary">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
