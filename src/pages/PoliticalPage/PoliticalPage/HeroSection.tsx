"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>{title}</h2>
        <p className={styles.heroDescription}>{description}</p>
      </div>
    </section>
  );
};
