import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        {/* Col 1: Brand Info */}
        <div className={styles.footerColLg}>
          <h3 className={styles.brandName}>Wellviva Organics</h3>
          <span className={styles.tagline}>Live Well. Naturally.</span>
          <p className={styles.brandDesc}>
            At Wellviva Organics, we create high-quality herbal, personal care, and wellness products inspired by Ayurveda and supported by modern science. Our mission is to promote natural living while empowering individuals with meaningful business opportunities.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/affiliate">Become a Affiliate</Link></li>
            <li><Link to="/business-plan">Business Plan</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 3: Policies */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Policies</h4>
          <ul className={styles.linkList}>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/refund">Refund & Cancellation</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className={styles.footerColLg}>
          <h4 className={styles.colTitle}>Contact Information</h4>
          
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <p>Ground Floor, Plot No. 302, JL No. 98, Bhangar, South 24 Parganas, West Bengal – 743502, India</p>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <p>+91 82508 94500</p>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <p>info@wellvivaorganics.com</p>
            </div>
          </div>

          <div className={styles.socialSection}>
            <h5 className={styles.socialTitle}>Connect With Us</h5>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <MessageCircle size={16} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          
          {/* Payment Methods */}
          <div className={styles.paymentMethods}>
            <img src="https://www.mywellviva.com/payments/visa.svg" alt="Visa" className={styles.paymentImg} />
            <img src="https://www.mywellviva.com/payments/master.png" alt="MasterCard" className={styles.paymentImg} />
            <img src="https://www.mywellviva.com/payments/paytm.png" alt="Paytm" className={styles.paymentImg} />
            <img src="https://www.mywellviva.com/payments/rupay.jpg" alt="RuPay" className={styles.paymentImg} />
            <img src="https://www.mywellviva.com/payments/upi.png" alt="UPI" className={styles.paymentImg} />
          </div>

          <div className={styles.divider}></div>
          
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Wellviva Organics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
