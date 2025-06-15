"use client";
import * as React from "react";
import styles from "./Hero.module.css";

import heroImage from "../../../assets/PoliticalPartySystem.png";

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <img
        src={heroImage}
        alt=""
        className={styles.heroImage}
      />
    </section>
  );
}
