"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import RepresentativesSection from "./RepresentativesSection";
import Footer from "./Footer";
import styles from "./KatariumLanding.module.css";
import { Header } from "../PoliticalPage/Header";

function PartyPage() {
    return (
        <div className={styles.container}>
            <Header logo="Катариум" activeNavItem="Партии" />
            <HeroSection />
            <RepresentativesSection />
            <Footer />
        </div>
    );
}

export default PartyPage;
