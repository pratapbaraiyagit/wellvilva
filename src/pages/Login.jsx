import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Auth.module.css';

const Login = () => {
  return (
    <div className={styles.authPage}>
      <motion.div 
        className={styles.authCard}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className={styles.authHeader}>
          <h1 className={styles.authTitle}>Welcome Back</h1>
          <p className={styles.authSubtitle}>Please enter your details to sign in.</p>
        </div>

        <form className={styles.authForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          
          <div className={styles.inputGroup}>
            <div className={styles.passwordHeader}>
              <label htmlFor="password">Password</label>
              <a href="#" className={styles.forgotPassword}>Forgot password?</a>
            </div>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>

          <motion.button 
            type="submit" 
            className={`btn btn-primary ${styles.submitBtn}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </form>

        <div className={styles.authFooter}>
          <p>
            Don’t have an account? <Link to="/register" className={styles.authLink}>Sign up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
