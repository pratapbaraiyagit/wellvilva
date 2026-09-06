import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const blogPosts = [
  {
    id: 1,
    title: "The Ancient Wisdom of Ayurveda in Modern Skincare",
    excerpt: "Discover how thousands of years of herbal knowledge can transform your daily beauty routine and bring natural balance to your skin.",
    category: "Wellness",
    date: "October 12, 2026",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    id: 2,
    title: "5 Herbs to Boost Your Immune System Naturally",
    excerpt: "As the seasons change, fortify your body's natural defenses with these powerful adaptogens.",
    category: "Health",
    date: "October 05, 2026",
    image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&q=80&w=1000",
    featured: false
  },
  {
    id: 3,
    title: "Understanding Holistic Wellness",
    excerpt: "Why treating the mind, body, and spirit as one interconnected system is the key to lasting health.",
    category: "Lifestyle",
    date: "September 28, 2026",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
    featured: false
  },
  {
    id: 4,
    title: "A Beginner's Guide to Essential Oils",
    excerpt: "Everything you need to know to safely and effectively incorporate aromatherapy into your home.",
    category: "Education",
    date: "September 15, 2026",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=1000",
    featured: false
  },
  {
    id: 5,
    title: "The Truth About Organic Certification",
    excerpt: "What does the organic label really mean, and why is it so important for herbal supplements?",
    category: "Sustainability",
    date: "September 02, 2026",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000",
    featured: false
  }
];

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={styles.blogPage}>
      {/* Editorial Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <h1 className={styles.title}>The Journal</h1>
            <p className={styles.subtitle}>Insights, guides, and inspiration for natural living.</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className={styles.featuredSection}>
        <div className="container">
          <motion.div 
            className={styles.featuredPost}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.featuredImageWrapper}>
              <img src={blogPosts[0].image} alt={blogPosts[0].title} className={styles.featuredImage} />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.category}>{blogPosts[0].category}</span>
              <h2>{blogPosts[0].title}</h2>
              <p>{blogPosts[0].excerpt}</p>
              <div className={styles.meta}>
                <span>{blogPosts[0].date}</span>
                <Link to="#" className={styles.readMore}>Read Article &rarr;</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Posts */}
      <section className={styles.gridSection}>
        <div className={`container ${styles.blogGrid}`}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={styles.gridWrapper}
          >
            {blogPosts.slice(1).map((post) => (
              <motion.article key={post.id} variants={itemVariants} className={styles.postCard}>
                <Link to="#" className={styles.cardLink}>
                  <div className={styles.cardImageWrapper}>
                    <img src={post.image} alt={post.title} className={styles.cardImage} />
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.category}>{post.category}</span>
                    <h3>{post.title}</h3>
                    <div className={styles.meta}>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterBox}>
            <h2>Join the Community</h2>
            <p>Get exclusive wellness tips and early access to new products delivered straight to your inbox.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
