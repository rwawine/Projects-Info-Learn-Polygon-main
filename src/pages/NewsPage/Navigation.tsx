"use client";
import * as React from "react";
import styles from "./HomePage.module.css";

interface NavigationProps {
  categories: Array<{
    text: string;
    link: string;
  }>;
  activeCategory?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ categories, activeCategory }) => {
  return (
    <nav className={styles.navigationSection}>
           <span className={styles.headerDivider} />
      <div className={styles.navigationMenu}>
        {categories.map((category, index) => (
          <a 
            key={index} 
            className={
              `${styles.navItem} ${activeCategory === category.text ? styles.activeCategory : ''}`
            }
            href={category.link}
          >
            {category.text}
          </a>
        ))}
      </div>
      <span className={styles.headerDivider} />
    </nav>
  );
};
