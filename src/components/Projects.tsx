import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import { useLanguage } from '../LanguageContext';
import styles from './Projects.module.css';

export default function Projects() {
  const { t, tProjects } = useLanguage();
  const projects = tProjects();

  return (
    <SectionWrapper id="projects">
      <div className="container" style={{ padding: 'var(--section-padding)' }}>
        <h2 className="section-heading">
          <span className="number">04.</span> {t('projects.heading')}
        </h2>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.folder}>
                  <span>&#123; &#125;</span>
                </div>
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((techItem) => (
                  <span key={techItem} className={styles.tag}>
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
