import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <div className={styles.contactPage}>
      
      {/* Deep Green Header Background */}
      <div className={styles.headerBackground}>
        <div className="container">
          <motion.div 
            className={styles.headerText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.pageTitle}>Get in Touch</h1>
            <p className={styles.pageSubtitle}>We'd love to hear from you. Drop us a line.</p>
          </motion.div>
        </div>
      </div>

      {/* Floating Main Card */}
      <div className="container">
        <motion.div 
          className={styles.mainCard}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Contact Info */}
          <div className={styles.infoSection}>
            <motion.h2 variants={fadeUp} className={styles.infoTitle}>Contact Information</motion.h2>
            <motion.p variants={fadeUp} className={styles.infoDesc}>
              Fill up the form and our team will get back to you within 24 hours.
            </motion.p>

            <div className={styles.infoList}>
              <motion.div variants={fadeUp} className={styles.infoItem}>
                <div className={styles.iconBox}><MapPin size={22} /></div>
                <div>
                  <h4>Head Office</h4>
                  <p>Wellviva Organics, Ground Floor, Plot No. 302, JL No. 98, Bhangar, South 24 Parganas, WB – 743502</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className={styles.infoItem}>
                <div className={styles.iconBox}><Phone size={22} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 82508 94500</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className={styles.infoItem}>
                <div className={styles.iconBox}><Mail size={22} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@wellvivaorganics.com</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className={styles.infoItem}>
                <div className={styles.iconBox}><Clock size={22} /></div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={fadeUp} className={styles.businessEnquiry}>
              <h4>Business & Partnership Enquiries</h4>
              <p>For distributorship, affiliate, or collaboration opportunities, please contact us. Our team will connect with you shortly.</p>
            </motion.div>
          </div>

          {/* Right: Form Section */}
          <div className={styles.formSection}>
            <motion.form variants={staggerContainer} className={styles.form}>
              <div className={styles.formRow}>
                <motion.div variants={fadeUp} className={styles.inputGroup}>
                  <label>First Name</label>
                  <input type="text" placeholder="John" required />
                </motion.div>
                <motion.div variants={fadeUp} className={styles.inputGroup}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" required />
                </motion.div>
              </div>
              
              <motion.div variants={fadeUp} className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </motion.div>
              
              <motion.div variants={fadeUp} className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" required />
              </motion.div>
              
              <motion.div variants={fadeUp} className={styles.inputGroup}>
                <label>Your Message</label>
                <textarea placeholder="How can we help you?" rows="4" required></textarea>
              </motion.div>
              
              <motion.button 
                variants={fadeUp}
                type="submit" 
                className={styles.submitBtn}
                whileHover={{ scale: 1.02, backgroundColor: 'var(--color-accent-dark)' }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
          
        </motion.div>
      </div>
      
    </div>
  );
};

export default Contact;
