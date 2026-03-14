import { useLanguage } from "../LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <a
          href="/i/resume.pdf"
          className={styles.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('footer.resumeLink')}
        </a>
        <p className={styles.credit}>
          🛠️ {t('footer.credit')} ❤️ {t('footer.creditBy')} &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
