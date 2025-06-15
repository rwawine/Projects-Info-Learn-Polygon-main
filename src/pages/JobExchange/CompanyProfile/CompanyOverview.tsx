"use client";
import * as React from "react";
import styles from "./CompanyOverview.module.css";
import { CompanyStats } from "./CompanyStats.tsx";
import { ProductsSection } from "./ProductsSection.tsx";

function CompanyOverview() {
  return (
    <main className={styles.container}>
      <CompanyStats />
      <ProductsSection />
    </main>
  );
}

export default CompanyOverview;
