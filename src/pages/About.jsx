import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Heart, ShieldCheck, Check } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  const promises = [
    "Nature-inspired formulations",
    "Scientifically balanced & Ayurvedic principles",
    "Ethical sourcing & responsible manufacturing",
    "Customer first approach",
    "Opportunity-driven growth for partners"
  ];

  return (
    <div className={styles.aboutPage}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroGrid}`}>
          
          <motion.div 
            className={styles.textContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className={styles.title}>About Us</motion.h1>
            <motion.h2 variants={itemVariants} className={styles.subtitle}>
              Nurturing Your Health, Naturally
            </motion.h2>
            
            <motion.p variants={itemVariants} className={styles.companyInfo}>
              <strong>Wellviva Organics – A Brand owned by Ziyr India Marketing Pvt. Ltd</strong>
            </motion.p>
            
            <motion.p variants={itemVariants} className={styles.paragraph}>
              At Wellviva Organics, we believe that true wellness begins with nature. Rooted in the timeless wisdom of Ayurveda and supported by modern science, we create high-quality wellness and personal care products that nurture health naturally and safely.
            </motion.p>
            <motion.p variants={itemVariants} className={styles.paragraph}>
              From carefully sourced herbs to thoughtfully crafted formulations, every Wellviva product delivers visible results while respecting the body and the environment.
            </motion.p>

            <motion.div variants={containerVariants} className={styles.features}>
              <motion.div variants={itemVariants} className={styles.featureItem}>
                <div className={styles.iconWrapper}><Leaf size={24} /></div>
                <h4>Pure Ingredients</h4>
                <p>Ethically sourced herbs & natural actives.</p>
              </motion.div>
              <motion.div variants={itemVariants} className={styles.featureItem}>
                <div className={styles.iconWrapper}><Heart size={24} /></div>
                <h4>Holistic Wellness</h4>
                <p>Mind, body & skin balance.</p>
              </motion.div>
              <motion.div variants={itemVariants} className={styles.featureItem}>
                <div className={styles.iconWrapper}><ShieldCheck size={24} /></div>
                <h4>Trust & Transparency</h4>
                <p>Quality you can rely on.</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className={styles.imageCollage}>
            <motion.div 
              className={`${styles.imgBox} ${styles.img1}`}
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              style={{ y: y1 }}
            >
              <img src="https://www.mywellviva.com/about/bottle.webp" alt="Wellviva Product" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </motion.div>
            
            <motion.div 
              className={`${styles.imgBox} ${styles.img2}`}
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
              style={{ y: y2 }}
            >
              <img src="https://www.mywellviva.com/about/healthy.jpg" alt="Healthy Lifestyle" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </motion.div>
            
            <motion.div 
              className={`${styles.imgBox} ${styles.img3}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <img src="https://www.mywellviva.com/about/ayurvedic.webp" alt="Ayurvedic Ingredients" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <div className="container">
          <motion.div 
            className={styles.quoteContent}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <h2 className={styles.sectionTitle}>More Than a Brand</h2>
            <p className={styles.quoteText}>
              Wellviva Organics is more than a wellness brand — it is a growing community of conscious consumers and entrepreneurs. Through our direct selling and affiliate model, we empower individuals to build sustainable income while promoting health-focused lifestyles.
            </p>
            <blockquote className={styles.blockquote}>
              "Harnessing the goodness of nature for a healthier you."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Promise Section */}
      <section className={styles.promiseSection}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle} 
            style={{textAlign: 'center', marginBottom: '4rem'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Promise
          </motion.h2>
          
          <div className={styles.promiseGrid}>
            {promises.map((promise, index) => (
              <motion.div 
                key={index}
                className={styles.promiseCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={styles.checkIcon}><Check size={20} strokeWidth={3} /></div>
                <span>{promise}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={styles.bottomTagline}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Wellviva Organics — Live Well. Naturally.
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
