import SectionWrapper from './SectionWrapper';
import styles from './About.module.css';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="container" style={{ padding: 'var(--section-padding)' }}>
        <h2 className="section-heading">
          <span className="number">01.</span> About Me
        </h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm an engineering leader with over a decade of experience
              building software and scaling teams. I started my career writing
              code — designing APIs, optimizing databases, and shipping
              features — and transitioned into leadership where I could
              multiply impact by enabling others to do their best work.
            </p>
            <p>
              Today, I lead engineering organizations where I focus on creating
              environments where engineers thrive: clear technical vision,
              strong engineering culture, and the right balance between
              autonomy and alignment.
            </p>
            <p>
              When I'm not working, you'll find me tinkering with side projects,
              reading about distributed systems, or exploring the latest in AI
              and developer tooling.
            </p>
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
