import SectionWrapper from './SectionWrapper';
import { experiences } from '../data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="container" style={{ padding: 'var(--section-padding)' }}>
        <h2 className="section-heading">
          <span className="number">03.</span> Experience
        </h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.marker}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.card}>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>
                  @ {exp.company}{' '}
                  <span className={styles.period}>{exp.period}</span>
                </p>
                <ul className={styles.description}>
                  {exp.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
