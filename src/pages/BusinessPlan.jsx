import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';
import styles from './BusinessPlan.module.css';

const BusinessPlan = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <div className={styles.businessPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroGrid}`}>
          <motion.div 
            className={styles.textContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className={styles.title}>Partner With Us</motion.h1>
            <motion.h2 variants={itemVariants} className={styles.subtitle}>
              Turn your passion for wellness into a thriving business.
            </motion.h2>
            <motion.p variants={itemVariants} className={styles.paragraph}>
              The Wellviva Organics Affiliate Program is designed for health enthusiasts, influencers, and entrepreneurs who want to share premium, natural products while earning industry-leading commissions.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/affiliate" className="btn btn-primary" style={{marginTop: '2rem'}}>Apply Now</Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000" alt="Business Meeting" className={styles.heroImage} />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why Choose Wellviva?</h2>
            <p>We provide everything you need to succeed.</p>
          </div>
          
          <motion.div 
            className={styles.benefitsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants} className={styles.benefitCard}>
              <div className={styles.iconWrapper}><TrendingUp size={28} /></div>
              <h3>High Commissions</h3>
              <p>Earn up to 25% commission on every sale you generate through your unique referral links.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className={styles.benefitCard}>
              <div className={styles.iconWrapper}><Briefcase size={28} /></div>
              <h3>Marketing Support</h3>
              <p>Access our library of high-converting professional banners, images, and marketing copy.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className={styles.benefitCard}>
              <div className={styles.iconWrapper}><Users size={28} /></div>
              <h3>Dedicated Dashboard</h3>
              <p>Track your clicks, conversions, and payouts in real-time with our advanced affiliate software.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className={styles.benefitCard}>
              <div className={styles.iconWrapper}><Award size={28} /></div>
              <h3>Premium Products</h3>
              <p>Promote certified, high-quality Ayurvedic products that naturally generate repeat customers.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.stepsSection}>
        <div className="container">
          <div className={styles.stepsContainer}>
            <div className={styles.stepsText}>
              <h2>How It Works</h2>
              <p>Getting started is simple, free, and entirely online.</p>
            </div>
            
            <div className={styles.stepsList}>
              <motion.div 
                className={styles.stepItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h3>Apply Online</h3>
                  <p>Fill out our simple application form. We review all applications within 24-48 hours.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.stepItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h3>Share Your Link</h3>
                  <p>Get your unique tracking link and promote Wellviva on your blog, social media, or website.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.stepItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h3>Earn Revenue</h3>
                  <p>Receive weekly payouts via Bank Transfer or PayPal for every successful referral.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPlan;
