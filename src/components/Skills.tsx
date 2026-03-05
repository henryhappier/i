import SectionWrapper from './SectionWrapper';
import { skills, categories } from '../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="container" style={{ padding: 'var(--section-padding)' }}>
        <h2 className="section-heading">
          <span className="number">02.</span> Skills & Technologies
        </h2>
        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.grid}>
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div key={skill.name} className={styles.skill}>
                      <span className={styles.arrow}>▹</span>
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
