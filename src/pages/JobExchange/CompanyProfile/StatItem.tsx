"use client";
import * as React from "react";
import styles from "./CompanyOverview.module.css";

interface StatItemProps {
  label: string;
  value: string;
}

export function StatItem({ label, value }: StatItemProps) {
  return (
    <div className={styles.statItem}>
      <dt className={styles.statLabel}>
        {label}
      </dt>
      <dd className={styles.statValue}>
        {value}
      </dd>
    </div>
  );
}
