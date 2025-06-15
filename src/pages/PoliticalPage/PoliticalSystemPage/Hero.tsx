"use client";
import * as React from "react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <img
        src="https://placehold.co/1520x619/f0f0f0/f0f0f0"
        alt=""
        className={styles.heroImage}
      />
    </section>
  );
}
