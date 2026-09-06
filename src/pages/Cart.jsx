import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = () => {
  // Dummy data to show a populated cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Ashwagandha Capsules', price: 699, sku: 'WVO-ASH-01', quantity: 2, image: 'https://images.unsplash.com/photo-1611078892607-4228966848fc?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Organic Honey', price: 499, sku: 'WVO-HON-02', quantity: 1, image: 'https://images.unsplash.com/photo-1587049352847-81a56d773c1c?auto=format&fit=crop&q=80&w=200' }
  ]);

  const [shippingMethod, setShippingMethod] = useState('free');

  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingMethod === 'flat' ? 83 : 0;
  const total = subtotal + shippingCost;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className={styles.cartPage}>
      
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className={styles.pageTitle}>Shopping Cart</h1>
            <p className={styles.breadcrumb}><Link to="/">Home</Link> &rsaquo; Cart</p>
          </motion.div>
        </div>
      </div>

      <div className={`container ${styles.cartContainer}`}>
        
        {cartItems.length === 0 ? (
          <motion.div 
            className={styles.emptyCart}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className={styles.emptyIcon}>🛍️</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any natural goodness yet.</p>
            <Link to="/shop" className={`btn btn-primary ${styles.continueBtn}`}>
              Explore Products
            </Link>
          </motion.div>
        ) : (
          <div className={styles.cartLayout}>
            
            {/* Left: Cart Items */}
            <motion.div 
              className={styles.cartMain}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.tableHeader}>
                <span>Product</span>
                <span>Price</span>
                <span>SKU</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>

              <div className={styles.itemList}>
                <AnimatePresence>
                  {cartItems.map(item => (
                    <motion.div 
                      key={item.id} 
                      className={styles.cartItem}
                      variants={fadeUp}
                      exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                      layout
                    >
                      <div className={styles.itemProduct}>
                        <button onClick={() => removeItem(item.id)} className={styles.removeBtn}>
                          <Trash2 size={18} />
                        </button>
                        <div className={styles.itemImgWrapper}>
                          <img src={item.image} alt={item.name} />
                        </div>
                        <span className={styles.itemName}>{item.name}</span>
                      </div>
                      
                      <div className={styles.itemPrice}>₹{item.price.toFixed(2)}</div>
                      <div className={styles.itemSku}>{item.sku}</div>
                      
                      <div className={styles.itemQuantity}>
                        <div className={styles.quantityControls}>
                          <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14}/></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14}/></button>
                        </div>
                      </div>
                      
                      <div className={styles.itemSubtotal}>
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <motion.div variants={fadeUp} className={styles.cartActions}>
                <div className={styles.couponGroup}>
                  <Tag size={18} className={styles.couponIcon} />
                  <input type="text" placeholder="Coupon code" />
                  <button className={styles.applyBtn}>Apply</button>
                </div>
                
                <button onClick={clearCart} className={styles.clearBtn}>
                  <Trash2 size={16} /> Clear Cart
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Cart Totals */}
            <motion.div 
              className={styles.cartSidebar}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.totalsCard}>
                <h3 className={styles.totalsTitle}>Cart Totals</h3>
                
                <div className={styles.totalsRow}>
                  <span className={styles.rowLabel}>Subtotal</span>
                  <span className={styles.rowValue}>₹{subtotal.toFixed(2)}</span>
                </div>
                
                <div className={styles.shippingSection}>
                  <span className={styles.rowLabel}>Shipping</span>
                  <div className={styles.shippingOptions}>
                    <label className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="shipping" 
                        checked={shippingMethod === 'free'} 
                        onChange={() => setShippingMethod('free')}
                      />
                      <span>Free shipping</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="shipping" 
                        checked={shippingMethod === 'flat'} 
                        onChange={() => setShippingMethod('flat')}
                      />
                      <span>Flat rate: ₹83.00</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="shipping" 
                        checked={shippingMethod === 'local'} 
                        onChange={() => setShippingMethod('local')}
                      />
                      <span>Local pickup</span>
                    </label>
                  </div>
                  <p className={styles.shippingAddress}>
                    Shipping to <strong>West Bengal</strong>. <a href="#">Change address</a>
                  </p>
                </div>
                
                <div className={styles.finalTotal}>
                  <span>Total</span>
                  <span className={styles.totalPrice}>₹{total.toFixed(2)}</span>
                </div>

                <div className={styles.checkoutActions}>
                  <motion.button 
                    className={styles.checkoutBtn}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Proceed To Checkout
                  </motion.button>
                  <Link to="/shop">
                    <motion.button 
                      className={styles.continueShoppingBtn}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Continue Shopping
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
