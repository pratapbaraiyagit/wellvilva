import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from './Home.module.css';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Pure. Natural. Effective.",
      subtitle: "Scientifically crafted Ayurvedic products for daily wellness.",
      image: "https://www.mywellviva.com/main.png"
    },
    {
      title: "Wellness for Every Family",
      subtitle: "Safe, certified, and powerful health solutions for all ages.",
      image: "https://www.mywellviva.com/Main_banner.jpeg"
    },
    {
      title: "Find Balance, Naturally.",
      subtitle: "Experience holistic wellness with our premium herbal and organic health products.",
      image: "https://www.mywellviva.com/banner2.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const trendingProducts = [
    { id: 1, name: 'Herbal Tea', price: '299', oldPrice: '499', tag: 'Bestseller' },
    { id: 2, name: 'Organic Honey', price: '499', oldPrice: '899', tag: 'Bestseller' },
    { id: 3, name: 'Ashwagandha Capsules', price: '699', oldPrice: '899', tag: 'Bestseller' },
    { id: 4, name: 'Moringa Powder', price: '399', oldPrice: '499', tag: 'Bestseller' },
  ];

  const newProducts = [
    { id: 5, name: 'Turmeric Capsules', price: '599', oldPrice: '799', tag: 'New' },
    { id: 6, name: 'Aloe Vera Juice', price: '349', oldPrice: '549', tag: 'New' },
    { id: 7, name: 'Giloy Juice', price: '329', oldPrice: '429', tag: 'New' },
    { id: 8, name: 'Neem Tablets', price: '279', oldPrice: '479', tag: 'New' },
  ];

  const mostPurchasedProducts = [
    { id: 9, name: 'Chyawanprash', price: '449', oldPrice: '549', tag: 'Top' },
    { id: 10, name: 'Protein Powder', price: '899', oldPrice: '1099', tag: 'Top' },
    { id: 11, name: 'Wheatgrass Powder', price: '379', oldPrice: '479', tag: 'Top' },
    { id: 12, name: 'Spirulina Tablets', price: '649', oldPrice: '849', tag: 'Top' },
  ];

  return (
    <div className={styles.home}>
      {/* Editorial Hero Slider */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroBackgroundWrapper} 
          style={{ y: y1, opacity }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={styles.heroBackgroundImage}
              style={{
                backgroundImage: `url(${slide.image})`,
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            >
              <div className={styles.heroOverlay}></div>
            </div>
          ))}
        </motion.div>
        
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className={styles.slideContent}
              >
                <h1 className={styles.heroTitle}>
                  {slides[currentSlide].title}
                </h1>
                <p className={styles.heroText}>
                  {slides[currentSlide].subtitle}
                </p>
                <div className={styles.heroActions}>
                  <Link to="/shop" className="btn btn-primary" style={{display: 'inline-block', backgroundColor: 'white', color: 'var(--color-text)', borderRadius: '999px', padding: '1rem 2.5rem', border: 'none', textDecoration: 'none'}}>Shop Now</Link>
                  <Link to="/about" className="btn btn-outline" style={{display: 'inline-block', borderColor: 'white', color: 'white', borderRadius: '999px', padding: '1rem 2.5rem', backgroundColor: 'transparent', textDecoration: 'none'}}>Learn More</Link>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Pagination Dots */}
            <div className={styles.sliderDots}>
              {slides.map((_, index) => (
                <button 
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bento Stats Section */}
      <section className={styles.bentoSection}>
        <div className={`container ${styles.bentoGrid}`}>
          <motion.div 
            className={styles.bentoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.bentoNumber}>10K+</span>
            <span className={styles.bentoLabel}>Happy Customers</span>
          </motion.div>
          
          <motion.div 
            className={`${styles.bentoCard} ${styles.bentoDark}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className={styles.bentoNumber}>100%</span>
            <span className={styles.bentoLabel}>Natural Products</span>
          </motion.div>
          
          <motion.div 
            className={`${styles.bentoCard} ${styles.bentoDark}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={styles.bentoNumber}>ISO</span>
            <span className={styles.bentoLabel}>Certified Quality</span>
          </motion.div>

          <motion.div 
            className={styles.bentoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className={styles.bentoNumber}>COD</span>
            <span className={styles.bentoLabel}>Cash on Delivery</span>
          </motion.div>
        </div>
      </section>

      {/* Product Sections */}
      <ProductSection title="Trending Products" products={trendingProducts} />
      <ProductSection title="New Products" products={newProducts} />
      <ProductSection title="Most Purchased" products={mostPurchasedProducts} />
      
      {/* CTA Section */}
      <section className={styles.interstitial}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.interstitialTitle} style={{marginBottom: '2.5rem'}}>
              Ready to transform your wellness journey naturally?
            </h2>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <Link to="/shop" className="btn btn-primary" style={{backgroundColor: 'white', color: 'var(--color-primary)', textDecoration: 'none'}}>Explore Collection</Link>
              <Link to="/affiliate" className="btn btn-outline" style={{borderColor: 'white', color: 'white', textDecoration: 'none'}}>Become a Partner</Link>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

const ProductSection = ({ title, products }) => (
  <section className={styles.productSection}>
    <div className="container">
      <div className={styles.sectionHeader}>
        <h2 className="section-title" style={{textAlign: 'left', marginBottom: '3rem'}}>{title}</h2>
      </div>
      
      <div className={styles.productGrid}>
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Home;
