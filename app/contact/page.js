"use client";

import ContactHeroSection from "../components/contact/ContactHeroSection";
import faqData from "../data/contact/faqData";
import FAQItem from "../components/contact/FaqItems";
import ContactForm from "../components/contact/ContactForm";
import Link from "../primitives/Link";
// FAQ data array

const ContactSection = () => (
  <div className="bg-slate-200 shadow-md rounded-lg p-6 text-center">
    <h2 className="text-xl text-primary font-semibold mb-4">
      Have any questions about us?
    </h2>
    <p className="text-black mb-4">
      We&apos;re here to help! Contact us to learn more about how BitWise can
      elevate your digital presence and drive growth for your business.
    </p>
    <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-black transition-colors">
      <Link href="/"> Get in Touch</Link>
    </button>
  </div>
);

const ContactUs = () => {
  return (
    <>
      <ContactHeroSection />
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <section className="my-12">
          <div className="text-3xl font-semibold mb-6 text-center text-primary">
            Find Us Here
          </div>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1243.9984587544322!2d-0.131211994742029!3d51.421483260644216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487606854113d385%3A0x50f0368ad0f6a156!2sAAziz%20%26%20Co.%20Accountants%20and%20Tax%20Consultants!5e0!3m2!1sen!2s!4v1726349025472!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>

        <ContactForm />

        <section className="my-12">
          <h2 className="text-2xl text-primary font-semibold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-wrap -mx-5 gap-4">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>
        <ContactSection />
      </div>
    </>
  );
};

export default ContactUs;
