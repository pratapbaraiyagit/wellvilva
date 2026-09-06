import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* Left Links */}
        <nav className={styles.desktopNavLeft}>
          <Link to="/shop" className={styles.navLink}>SHOP</Link>
          <Link to="/about" className={styles.navLink}>ABOUT</Link>
        </nav>

        {/* Center Logo */}
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="Wellviva Organics" className={styles.logoImg} />
        </Link>

        {/* Right Links & Actions */}
        <div className={styles.actionsRight}>
          <nav className={styles.desktopNavRight}>
            <Link to="/contact" className={styles.navLink}>CONTACT</Link>
            <Link to="/cart" className={styles.navLink}>CART (2)</Link>
            <Link to="/login" className={styles.navLink} style={{
              border: '1px solid var(--color-primary)',
              borderRadius: '999px',
              padding: '0.4rem 1.25rem',
              fontWeight: 600
            }}>LOGIN</Link>
          </nav>
          
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className={styles.mobileHeader}>
              <Link to="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
                <span className={styles.logoText}>WELLVIVA</span>
              </Link>
              <button 
                className={styles.closeBtn} 
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>
            
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className={styles.mobileNavLink}>
                  {link.name}
                </Link>
              ))}
              <Link to="/cart" className={styles.mobileNavLink}>Cart</Link>
              <button className={styles.mobileNavLink}>Login</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
