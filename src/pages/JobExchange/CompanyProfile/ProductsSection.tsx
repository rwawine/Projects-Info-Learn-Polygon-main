"use client";
import * as React from "react";
import styles from "./CompanyOverview.module.css";
import { useLanguage } from '../../../context/LanguageContext';

export function ProductsSection() {
  const { language, translations } = useLanguage();
  return (
    <section className={styles.productsSection}>
      <h2 className={styles.sectionTitle}>
        {translations[language].productsSection.title}
      </h2>
      <p className={styles.productsDescription}>
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
        tellus. Phasellus viverra nulla ut metus varius laoreet.
      </p>
    </section>
  );
}
