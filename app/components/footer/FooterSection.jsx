const { default: Link } = require("@/app/primitives/Link");

const FooterSection = ({ title, links }) => (
  <div className="mb-8 sm:mb-0">
    <h3 className="text-lg font-semibold mb-4 text-primary">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <Link
            href={link.href}
            className="text-black hover:text-primary font-medium"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
