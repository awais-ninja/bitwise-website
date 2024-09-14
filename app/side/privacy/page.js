import Link from "next/link";

const Page = () => {
  return (
    <section className="my-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-8 text-primary">
        Privacy Policy
      </h1>
      <div className="space-y-6 text-gray-700">
        <p>
          At <strong>Bitwise</strong>, we are committed to protecting your
          privacy and ensuring that your personal information is handled in a
          safe and responsible manner. This Privacy Policy explains what
          personal data we collect, how we use it, and the rights you have
          regarding your data.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          Information We Collect
        </h2>
        <p>
          We collect the following types of information:
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Personal Information:</strong> This includes your name,
              email address, phone number, and any other information you provide
              directly through forms on our website.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect data on how you use our
              website, including your IP address, browser type, pages visited,
              and the time and date of your visit.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to improve your browsing
              experience. Please refer to our{" "}
              <Link
                href="/cookies-policy"
                className="text-primary hover:underline"
              >
                Cookies Policy
              </Link>{" "}
              for more information.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          How We Use Your Information
        </h2>
        <p>
          We may use the information we collect for the following purposes:
          <ul className="list-disc list-inside ml-4">
            <li>To provide and maintain our services.</li>
            <li>To improve our website and user experience.</li>
            <li>
              To send marketing communications, updates, and promotional offers
              (with your consent).
            </li>
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To comply with legal obligations and resolve disputes.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          How We Share Your Information
        </h2>
        <p>
          We respect your privacy, and we do not sell or rent your personal
          information to third parties. However, we may share your data with:
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Service Providers:</strong> We may share your information
              with trusted third-party service providers who assist us in
              operating our website or conducting our business.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required by law or to protect the rights, property,
              or safety of Bitwise, our users, or others.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          Your Data Protection Rights
        </h2>
        <p>
          You have certain rights regarding your personal information under data
          protection laws, including:
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Access:</strong> You have the right to request a copy of
              the personal data we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You can request that we correct any
              inaccurate or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> You have the right to request the
              deletion of your personal data in certain circumstances.
            </li>
            <li>
              <strong>Objection:</strong> You can object to the processing of
              your personal data for direct marketing purposes.
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> If we are processing your
              personal data based on your consent, you have the right to
              withdraw that consent at any time.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          How We Protect Your Data
        </h2>
        <p>
          We take data security seriously and use reasonable technical and
          organizational measures to protect your personal information from
          unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          Retention of Your Data
        </h2>
        <p>
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy or to comply with
          legal requirements.
        </p>

        <h2 className="text-2xl font-semibold text-primary">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for operational, legal, or regulatory reasons.
          Please review this page periodically for any updates.
        </p>

        <h2 className="text-2xl font-semibold text-primary">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how
          we handle your data, feel free to reach out to us:
          <ul className="list-disc list-inside ml-4">
            <li>
              Email:
              <Link
                href="mailto:awais.brainloggers@gmail.com"
                className="text-primary hover:underline"
              >
                awais.brainloggers@gmail.com
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
