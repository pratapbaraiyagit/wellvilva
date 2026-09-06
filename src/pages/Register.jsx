import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Auth.module.css';

const Register = () => {
  return (
    <div className={styles.authPage}>
      <motion.div 
        className={styles.authCard}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className={styles.authHeader}>
          <h1 className={styles.authTitle}>Create Account</h1>
          <p className={styles.authSubtitle}>Join us to experience natural wellness.</p>
        </div>

        <form className={styles.authForm}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="referral">Referral Code <span className={styles.optional}>(Optional)</span></label>
            <input type="text" id="referral" placeholder="Enter referral code" />
          </div>

          <motion.button 
            type="submit" 
            className={`btn btn-primary ${styles.submitBtn}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.button>
        </form>

        <div className={styles.authFooter}>
          <p>
            Already have an account? <Link to="/login" className={styles.authLink}>Login</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
