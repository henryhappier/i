import SectionWrapper from './SectionWrapper';
import { useLanguage } from '../LanguageContext';
import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about">
      <div className="container" style={{ padding: 'var(--section-padding)' }}>
        <h2 className="section-heading">
          <span className="number">01.</span> {t('about.heading')}
        </h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <span>HM</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
