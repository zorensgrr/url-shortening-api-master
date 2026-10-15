import { useState } from 'react';
import shortlyLogo from '../../images/logo.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ];

  return (
    <header className="relative z-20 mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img
            src={shortlyLogo}
            alt="Shortly"
            className="h-auto w-30 shrink-0"
          />

          {/* Desktop navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex gap-8 text-sm font-semibold text-(--gray-500)">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-150 hover:text-(--gray-900)"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop authentication buttons */}
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <button
            type="button"
            className="cursor-pointer text-(--gray-500) transition-colors duration-150 hover:text-(--gray-900)"
          >
            Login
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-full bg-(--color-primary-blue) px-6 py-3 text-white transition-colors duration-150 hover:bg-(--color-primary-blue-hover)"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="relative flex size-10 items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-1 w-6 rounded-full bg-(--gray-500) transition-transform duration-200 ${
              isMenuOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute h-1 w-6 rounded-full bg-(--gray-500) transition-opacity duration-200 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute h-1 w-6 rounded-full bg-(--gray-500) transition-transform duration-200 ${
              isMenuOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-6 right-6 top-full rounded-xl bg-(--color-primary-purple) p-8 text-center shadow-xl md:hidden"
        >
          <ul className="flex flex-col gap-6 font-bold text-white">
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="transition-colors hover:text-(--color-primary-blue)"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="my-6 h-px bg-white/20" />

          <div className="flex flex-col items-center gap-5 font-semibold text-white">
            <button type="button" onClick={closeMenu}>
              Login
            </button>

            <button
              type="button"
              onClick={closeMenu}
              className="w-full rounded-full bg-(--color-primary-blue) px-6 py-3 text-white transition-colors hover:bg-(--color-primary-blue-hover)"
            >
              Sign Up
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
