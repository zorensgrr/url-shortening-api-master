import shortlyLogo from '../../images/logo.svg';
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import pinterestIcon from '../../images/icon-pinterest.svg';
import instagramIcon from '../../images/icon-instagram.svg';

const footerGroups = [
  {
    title: 'Features',
    links: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Developers', 'Support'],
  },
  {
    title: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact'],
  },
];

const socialLinks = [
  { name: 'Facebook', icon: facebookIcon },
  { name: 'Twitter', icon: twitterIcon },
  { name: 'Pinterest', icon: pinterestIcon },
  { name: 'Instagram', icon: instagramIcon },
];

function Footer() {
  return (
    <footer
      id="resources"
      className="bg-(--gray-950) px-6 py-12 text-white lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
        <img
          src={shortlyLogo}
          alt="Shortly"
          className="h-auto w-30 shrink-0 brightness-0 invert"
        />
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-12 sm:text-left">
          {footerGroups.map(group => (
            <div key={group.title}>
              <h2 className="mb-5 font-bold">{group.title}</h2>

              <ul className="flex flex-col gap-3 text-sm text-(--gray-500)">
                {group.links.map(link => (
                  <li
                    key={link}
                    className="cursor-pointer transition-colors duration-150 hover:text-(--color-primary-blue)"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="flex items-center gap-6">
          {socialLinks.map(social => (
            <li
              key={social.name}
              className="cursor-pointer transition-transform duration-150 hover:-translate-y-1"
            >
              <img src={social.icon} alt={social.name} className="h-6 w-6" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
