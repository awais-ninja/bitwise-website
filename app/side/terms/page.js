import Link from "@/app/primitives/Link";

const page = () => {
  return (
    <div>
      <section className="my-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8 text-primary">
          Terms of Service
        </h1>
        <div className="space-y-6 text-gray-700">
          <p>
            Welcome to <strong>Bitwise</strong>! By accessing or using our
            website and services, you agree to comply with and be bound by the
            following terms and conditions. Please read these carefully.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the services of <strong>Bitwise</strong>, you
            accept and agree to be bound by these Terms of Service. If you do
            not agree to these terms, you may not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            2. Modifications to Terms
          </h2>
          <p>
            <strong>Bitwise</strong> reserves the right to modify these terms at
            any time. Any changes will be effective upon posting. Your continued
            use of our services after changes have been posted constitutes your
            acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            3. User Responsibilities
          </h2>
          <p>
            When using our website, you agree to provide accurate and complete
            information. You are responsible for maintaining the confidentiality
            of your account and password and for any activities under your
            account. You must notify us immediately if you suspect any
            unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            4. Privacy Policy
          </h2>
          <p>
            Your privacy is important to us. Our{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            explains how we collect, use, and protect your information. By using
            our services, you agree to the practices described in our Privacy
            Policy.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            5. Prohibited Activities
          </h2>
          <div>
            You agree not to:
            <ul className="list-disc list-inside ml-4">
              <li>
                Engage in any illegal activities while using our services.
              </li>
              <li>Infringe on any intellectual property rights of others.</li>
              <li>
                Disrupt or interfere with the security or functionality of the
                website.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the website
                or services.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-primary">
            6. Intellectual Property
          </h2>
          <p>
            All content on the website, including text, graphics, logos, images,
            and software, is the property of <strong>Bitwise</strong> or its
            licensors. You may not reproduce, distribute, or create derivative
            works of any content without our prior written permission.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            7. Limitation of Liability
          </h2>
          <p>
            <strong>Bitwise</strong> will not be liable for any direct,
            indirect, incidental, or consequential damages resulting from your
            use of or inability to use our website or services. This includes
            but is not limited to damages for loss of profits, data, or other
            intangible losses.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            8. Termination
          </h2>
          <p>
            We may terminate or suspend your account and access to our services
            at our sole discretion, without prior notice or liability, for any
            reason, including if you breach these Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            9. Governing Law
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of [Your Country/State], without regard to its conflict of
            law provisions. You agree to submit to the jurisdiction of the
            courts located in [Your Location] for any legal matters arising out
            of these terms.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            10. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about these Terms of Service,
            please contact us at:
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
    </div>
  );
};

export default page;
