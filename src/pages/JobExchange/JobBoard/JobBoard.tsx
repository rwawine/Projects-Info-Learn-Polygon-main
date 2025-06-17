"use client";
import * as React from "react";
import styles from "./JobBoard.module.css";
import { Header } from "./Header.tsx";
import HeroSection from "./HeroSection.tsx";
import BlogSection from "./BlogSection.tsx";
import Footer from "./Footer.tsx";

function JobBoard() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <Header />
        <HeroSection />
        <BlogSection />
        <Footer />
      </div>
    </main>
  );
}

export default JobBoard;
