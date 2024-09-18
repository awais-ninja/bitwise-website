import FAQItem from "../contact/FaqItems";

const FAQ = ({ data }) => {
  return data?.map((faq) => {
    return (
      <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
    );
  });
};

export default FAQ;
