import Link from "@/app/primitives/Link";

const page = () => {
  return (
    <div>
      <section className="my-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8 text-primary">
          Help Center
        </h1>
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-primary">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                What services does Bitwise offer?
              </h3>
              <p>
                Bitwise offers a range of services including digital marketing,
                website development, and IT solutions. We specialize in
                enhancing your online presence and optimizing your digital
                strategy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                How can I contact Bitwise?
              </h3>
              <p>
                You can contact Bitwise via email at
                <Link
                  href="mailto:awais.brainloggers@gmail.com"
                  className="text-primary hover:underline"
                >
                  awais.brainloggers@gmail.com
                </Link>
                , or call us at +92 304 9978 288. You can also reach us through
                our LinkedIn profile:
                <Link
                  href="https://www.linkedin.com/in/awais-ahmad-mirza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Awais Ahmad
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                What is the response time for inquiries?
              </h3>
              <p>
                We aim to respond to all inquiries within 24-48 hours. If you
                have an urgent request, please indicate that in your message,
                and we will prioritize it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Do you offer custom solutions?
              </h3>
              <p>
                Yes, we offer custom solutions tailored to your specific needs.
                Whether you require a unique digital marketing strategy or a
                bespoke website design, we can create a plan that fits your
                requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                What is your pricing structure?
              </h3>
              <p>
                Our pricing varies depending on the scope and complexity of the
                project. We offer competitive rates and provide detailed quotes
                based on your needs. Contact us for a personalized quote.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-primary mt-8">
            Contact Support
          </h2>
          <p>
            For any support-related questions or issues, please reach out to our
            support team:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              Email:{" "}
              <Link
                href="mailto:awais.brainloggers@gmail.com"
                className="text-primary hover:underline"
              >
                awais.brainloggers@gmail.com
              </Link>
            </li>
            <li>Phone: +92 304 9978 288</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8">
            Additional Resources
          </h2>
          <p>Explore the following resources for more information:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <Link href="/side/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/side/privacy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/side/cookies"
                className="text-primary hover:underline"
              >
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/side/faq" className="text-primary hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default page;
