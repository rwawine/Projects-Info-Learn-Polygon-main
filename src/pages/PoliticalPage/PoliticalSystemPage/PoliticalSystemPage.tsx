"use client";
import * as React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";
import styles from "./PoliticalSystemPage.module.css";

function PoliticalSystemPage() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <Hero />
            <MainContent />
            <Footer />
        </div>
    );
}

export default PoliticalSystemPage;
