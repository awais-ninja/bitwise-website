import Link from "@/app/primitives/Link";
export const metadata = {
  title: "Customer Support",
};

const Page = () => {
  return (
    <div>
      <section className="my-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8 text-primary">
          Customer Support
        </h1>
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-primary">Get in Touch</h2>
          <p>
            If you need assistance or have any questions, our customer support
            team is here to help you. You can reach us through the following
            methods:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              Email: {""}
              <Link
                href="mailto:info@wyze-tech.com"
                className="text-primary hover:underline"
              >
                info@wyze-tech.com
              </Link>
            </li>
            <li>Phone: +92 304 9978 288</li>
            <li>Live Chat: Available on our website during business hours</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8">
            Report an Issue
          </h2>
          <p>
            If you encounter any problems or issues with our services or
            website, please report them using the following methods:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              Email your issue details to {""}
              <Link
                href="mailto:info@wyze-tech.com"
                className="text-primary hover:underline"
              >
                info@wyze-tech.com
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8">
            Frequently Asked Questions
          </h2>
          <p>
            For quick answers to common questions, please visit our FAQs page:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <Link
                href="/support/faq"
                className="text-primary hover:underline"
              >
                FAQs
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8">
            Support Hours
          </h2>
          <p>Our support team is available during the following hours:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Monday to Friday: 9 AM - 6 PM (UTC+5)</li>
            <li>Saturday: 10 AM - 4 PM (UTC+5)</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
