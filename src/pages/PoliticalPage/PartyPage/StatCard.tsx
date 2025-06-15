"use client";
import * as React from "react";
import styles from "./StatCard.module.css";

interface StatCardProps {
  number: string;
  description: string;
  variant: "primary" | "secondary";
}

function StatCard({ number, description, variant }: StatCardProps) {
  return (
    <div className={styles.statCard}>
      <div className={variant === "primary" ? styles.numberPrimary : styles.numberSecondary}>
        {number}
      </div>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
}

export default StatCard;
