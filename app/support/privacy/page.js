import Link from "next/link";

const Page = () => {
  return (
    <section className="my-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-8 text-primary">
        Privacy Policy
      </h1>
      <div className="space-y-6 text-gray-700">
        <p>
          Welcome to <strong>Wyze Tech</strong>. Your privacy is of utmost
          importance to us. This Privacy Policy outlines how we collect, use,
          and safeguard your personal information when you visit our website and
          use our services.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          1. Information We Collect
        </h2>
        <p>
          We collect the following types of information:
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Personal Information:</strong> This includes your name,
              email address, phone number, and other information you voluntarily
              provide to us.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect data on your interactions
              with our website, such as IP address, browser type, pages viewed,
              and time spent on the site.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your browsing
              experience. For details, please refer to our{" "}
              <Link
                href="/cookies-policy"
                className="text-primary hover:underline"
              >
                Cookies Policy
              </Link>
              .
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          2. How We Use Your Information
        </h2>
        <p>
          The information we collect is used for the following purposes:
          <ul className="list-disc list-inside ml-4">
            <li>To provide and improve our services.</li>
            <li>
              To communicate with you, including sending updates and marketing
              materials (with your consent).
            </li>
            <li>To respond to your inquiries and provide support.</li>
            <li>
              To ensure the security of our website and comply with legal
              obligations.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          3. Sharing Your Information
        </h2>
        <p>
          We do not sell or rent your personal information. We may share your
          data with:
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Service Providers:</strong> Third parties that assist us
              in operating our website and conducting business.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required by law or to
              protect the rights, property, or safety of Wyze Tech or others.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          4. Your Data Protection Rights
        </h2>
        <p>
          Under data protection laws, you have the following rights:
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Access:</strong> Request a copy of the personal data we
              hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Request correction of any inaccurate
              or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> Request the deletion of your personal
              data under certain conditions.
            </li>
            <li>
              <strong>Objection:</strong> Object to processing of your data for
              direct marketing purposes.
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> Withdraw your consent to
              data processing where applicable.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          5. Data Security
        </h2>
        <p>
          We implement reasonable security measures to protect your data from
          unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          6. Data Retention
        </h2>
        <p>
          We retain your data only for as long as necessary to fulfill the
          purposes outlined in this policy or to comply with legal requirements.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          7. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. Please review this
          page regularly to stay informed about any changes.
        </p>

        <h2 className="text-2xl font-semibold text-primary">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact us at:
          <ul className="list-disc list-inside ml-4">
            <li>
              Email:
              <Link
                href="mailto:info@wyze-tech.com"
                className="text-primary hover:underline"
              >
                info@wyze-tech.com
              </Link>
            </li>
            <li>Phone: +92 304 9978 288</li>
            <li>
              LinkedIn:
              <Link
                href="https://www.linkedin.com/in/awais-ahmad-mirza/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Awais Ahmad
              </Link>
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Page;
