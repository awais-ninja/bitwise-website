import ContactHeroSection from "../components/contact/ContactHeroSection";
import faqData from "../data/contact/faqData";
import FAQItem from "../components/contact/FaqItems";
import ContactForm from "../components/contact/ContactForm";
import Link from "../primitives/Link";
import { ReadyToStart } from "../components/aboutPage";
import HeroForm from "../components/hero/HeroForm";

export const metadata = {
  title: "Contact",
};

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.9994675754156!2d-0.1327431231043131!3d51.4214364169793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876068541ec0001%3A0x3f9fa2f12b7170d5!2sBrainloggers%20Web%20%26%20Graphic%20Designers%20and%20IT%20Consultants!5e0!3m2!1sen!2s!4v1726656751378!5m2!1sen!2s"
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

        <HeroForm />

        <section className="my-12">
          <h2 className="text-2xl text-primary font-semibold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-wrap -mx-5 gap-4">
            {faqData.map((item, index) => (
              <FAQItem
                key={item.key}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>
        <ReadyToStart />
      </div>
    </>
  );
};

export default ContactUs;
