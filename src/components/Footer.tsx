import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <a
          href="/i/resume.pdf"
          className={styles.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>
        <p className={styles.credit}>
          🛠️ Built with ❤️ by Henry Ma &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
