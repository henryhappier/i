import { FiArrowRight } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import { useLanguage } from '../LanguageContext';
import styles from './Blog.module.css';

export default function Blog() {
  const { t, tBlog } = useLanguage();
  const blogPosts = tBlog();

  return (
    <SectionWrapper id="blog">
      <div className="container" style={{ padding: 'var(--section-padding)' }}>
        <h2 className="section-heading">
          <span className="number">05.</span> {t('blog.heading')}
        </h2>
        <div className={styles.posts}>
          {blogPosts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.meta}>
                <time className={styles.date}>{post.date}</time>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.summary}>{post.summary}</p>
              <span className={styles.readMore}>
                {t('blog.readMore')} <FiArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
