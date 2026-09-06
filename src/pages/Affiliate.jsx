import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Affiliate.module.css';

const Affiliate = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <div className={styles.affiliatePage}>
      
      {/* Header Area */}
      <div className={styles.pageHeader}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.headerText}
          >
            <h1 className={styles.pageTitle}>Become an Affiliate</h1>
            <p className={styles.pageSubtitle}>Join our network and build sustainable income.</p>
          </motion.div>
        </div>
      </div>

      <div className={`container ${styles.formContainer}`}>
        <motion.div 
          className={styles.formCard}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <form>
            
            {/* Section 1: Personal Details */}
            <motion.div variants={fadeUp} className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumber}>1</div>
                <h2 className={styles.sectionTitle}>Personal Details</h2>
              </div>
              
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>Sponsor ID *</label>
                  <input type="text" placeholder="Enter Sponsor ID" required />
                </div>
                <div className={styles.inputGroup}>
                  <label>Sponsor Name *</label>
                  <input type="text" placeholder="Enter Sponsor Name" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label>Position</label>
                  <select className={styles.selectInput}>
                    <option>Left</option>
                    <option>Right</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your Full Name" required />
                </div>

                <div className={styles.inputGroup}>
                  <label>Mobile Number *</label>
                  <input type="tel" placeholder="+91" required />
                </div>
                <div className={styles.inputGroup}>
                  <label>Email ID</label>
                  <input type="email" placeholder="email@example.com" />
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label>Address *</label>
                  <textarea placeholder="Enter your full address" rows="3" required></textarea>
                </div>

                <div className={styles.inputGroup}>
                  <label>State</label>
                  <select className={styles.selectInput}>
                    <option>- Select State -</option>
                    <option>West Bengal</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>City</label>
                  <select className={styles.selectInput}>
                    <option>- Select City -</option>
                    <option>Kolkata</option>
                    <option>Mumbai</option>
                    <option>New Delhi</option>
                  </select>
                </div>
                
                <div className={styles.inputGroup}>
                  <label>Pin Code *</label>
                  <input type="text" placeholder="e.g. 743502" required />
                </div>
              </div>
            </motion.div>

            <hr className={styles.divider} />

            {/* Section 2: Bank Details */}
            <motion.div variants={fadeUp} className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumber}>2</div>
                <h2 className={styles.sectionTitle}>Bank & Tax Details</h2>
              </div>
              
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>Bank Name</label>
                  <input type="text" placeholder="Enter Bank Name" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Branch Name</label>
                  <input type="text" placeholder="Enter Branch Name" />
                </div>

                <div className={styles.inputGroup}>
                  <label>Account Name</label>
                  <input type="text" placeholder="Name on Account" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Account Number</label>
                  <input type="text" placeholder="Enter Account Number" />
                </div>

                <div className={styles.inputGroup}>
                  <label>Account Type</label>
                  <select className={styles.selectInput}>
                    <option>Saving</option>
                    <option>Current</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>IFSC Code</label>
                  <input type="text" placeholder="e.g. SBIN0001234" />
                </div>

                <div className={styles.inputGroup}>
                  <label>PAN Number *</label>
                  <input type="text" placeholder="Enter PAN Number" required />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.formActions}>
              <div className={styles.checkboxGroup}>
                <input type="checkbox" id="agreement" required />
                <label htmlFor="agreement">I accept the terms and agreement.</label>
              </div>

              <div className={styles.actionButtons}>
                <span className={styles.loginHint}>
                  Already have an account? <Link to="/login" className={styles.loginLink}>Sign In</Link>
                </span>
                <button type="submit" className={styles.submitBtn}>
                  Register Now
                </button>
              </div>
            </motion.div>

          </form>
        </motion.div>
      </div>
      
    </div>
  );
};

export default Affiliate;
