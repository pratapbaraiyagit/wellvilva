import React from 'react';
import { motion } from 'framer-motion';
import styles from './LegalPage.module.css';

const LegalPage = ({ title, lastUpdated, sections }) => {
  return (
    <div className={styles.legalPage}>
      {/* Editorial Hero */}
      <section className={styles.heroSection}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.contentContainer}`}>
          <motion.div 
            className={styles.article}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {sections.map((section, index) => (
              <div key={index} className={styles.contentBlock}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((para, pIndex) => (
                  <p key={pIndex}>{para}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
