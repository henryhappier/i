import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import styles from './Navbar.module.css';

const linkKeys = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.blog', href: '#blog' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`}>
        <a href="#" className={styles.logo}>
          {'<HM />'}
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {linkKeys.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.link}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.linkNumber}>0{i + 1}.</span>
                {t(link.key)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/i/resume.pdf"
              className={styles.resumeBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('nav.resume')}
            </a>
          </li>
        </ul>

        <div className={styles.controls}>
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {lang === 'en' ? '中' : 'EN'}
          </button>

          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
