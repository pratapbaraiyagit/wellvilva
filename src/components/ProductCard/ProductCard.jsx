import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className={styles.imageContainer}>
        {product.tag && (
          <span className={styles.tag}>{product.tag}</span>
        )}
        <div className={styles.imageWrapper}>
          <div className={`img-placeholder ${styles.imagePlaceholder}`}>
            Product Image
          </div>
        </div>
        
        {/* Minimal Add to Cart Overlay */}
        <div className={styles.overlay}>
          <button className={`btn btn-primary ${styles.quickAddBtn}`}>
            Add to Bag
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.price}>₹{product.price}</span>
          {product.oldPrice && (
            <span className={styles.oldPrice}>₹{product.oldPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
