import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from './Shop.module.css';

const Shop = () => {
  const allProducts = [
    { id: 1, name: 'Herbal Tea', price: '299', oldPrice: '499', tag: 'Bestseller' },
    { id: 2, name: 'Organic Honey', price: '499', oldPrice: '899', tag: 'Bestseller' },
    { id: 3, name: 'Ashwagandha Capsules', price: '699', oldPrice: '899', tag: 'Bestseller' },
    { id: 4, name: 'Moringa Powder', price: '399', oldPrice: '499', tag: 'Bestseller' },
    { id: 5, name: 'Turmeric Capsules', price: '599', oldPrice: '799', tag: 'New' },
    { id: 6, name: 'Aloe Vera Juice', price: '349', oldPrice: '549', tag: 'New' },
    { id: 7, name: 'Giloy Juice', price: '329', oldPrice: '429', tag: 'New' },
    { id: 8, name: 'Neem Tablets', price: '279', oldPrice: '479', tag: 'New' },
  ];

  return (
    <div className={styles.shopPage}>
      <div className={`container ${styles.shopContainer}`}>
        
        <div className={styles.shopHeader}>
          <h1 className={styles.pageTitle}>Shop All</h1>
          <div className={styles.filterBar}>
            <span className="label-text">Showing {allProducts.length} items</span>
            <button className={styles.filterBtn}>Filter + Sort</button>
          </div>
        </div>
        
        <div className={styles.productGrid}>
          {allProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Shop;
