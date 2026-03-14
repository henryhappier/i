import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import { useLanguage } from '../LanguageContext';
import styles from './Contact.module.css';

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/henryhappier' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: FiTwitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: FiMail, label: 'Email', href: 'mailto:hello@example.com' },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="contact">
      <div className="container" style={{ padding: 'var(--section-padding)' }}>
        <h2 className="section-heading">
          <span className="number">06.</span> {t('contact.heading')}
        </h2>
        <div className={styles.content}>
          <p className={styles.text}>{t('contact.text')}</p>
          <a href="mailto:hello@example.com" className={styles.emailBtn}>
            {t('contact.emailBtn')}
          </a>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.label}
              >
                <social.icon size={20} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
