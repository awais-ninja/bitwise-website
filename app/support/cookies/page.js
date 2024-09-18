import Link from "@/app/primitives/Link";

const page = () => {
  return (
    <div>
      <section className="my-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8 text-primary">
          Cookies Policy
        </h1>
        <div className="space-y-6 text-gray-700">
          <p>
            At <strong>Wyze Tech</strong>, we use cookies to enhance your
            browsing experience and ensure our website functions smoothly. This
            Cookies Policy explains what cookies are, how we use them, and the
            options you have regarding their use.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            What are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your device (computer,
            tablet, or mobile phone) when you visit a website. These files help
            the website remember your device and store information about your
            preferences, which helps in providing a better user experience.
          </p>

          <h2 className="text-2xl font-semibold text-primary">
            How We Use Cookies
          </h2>
          <div>
            We use cookies for various purposes, such as:
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary
                to enable basic website functions like page navigation, ensuring
                the proper operation of our site.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies help us
                analyze how users interact with our website, allowing us to
                improve its functionality and the user experience.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies remember your
                preferences and choices, making your future visits more tailored
                and enjoyable.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> These cookies are used to
                deliver advertisements that are relevant to your interests.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-primary">
            Managing Your Cookies
          </h2>
          <div>
            You can manage your cookies through your browser settings. Please
            note that disabling cookies may affect the functionality of some
            parts of the website.
          </div>
          <div>
            Here are links to instructions for managing cookies in popular
            browsers:
            <ul className="list-disc list-inside ml-4">
              <li>
                <Link
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Chrome
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mozilla Firefox
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Internet Explorer
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.apple.com/en-us/HT201265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Safari
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-primary">
            Changes to This Cookies Policy
          </h2>
          <p>
            We may update this Cookies Policy from time to time to reflect
            changes in our practices or for operational, legal, or regulatory
            reasons. Please review this page periodically for any updates.
          </p>

          <h2 className="text-2xl font-semibold text-primary">Contact Us</h2>
          <div>
            If you have any questions about this Cookies Policy or how we use
            cookies at <strong>Wyze Tech</strong>, feel free to reach out to us:
            <ul className="list-disc list-inside ml-4">
              <li>
                Email:
                <Link
                  href="mailto:info@wyzetech.com"
                  className="text-primary hover:underline"
                >
                  info@wyzetech.com
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
