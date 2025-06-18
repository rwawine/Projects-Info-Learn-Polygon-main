"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import RepresentativesSection from "./RepresentativesSection";
import { Footer } from '../PoliticalPage/Footer';
import styles from "./PartyPage.module.css";
import { Header } from "../PoliticalPage/Header";
import { useLanguage } from '../../../context/LanguageContext';

function PartyPage() {
    const { language, translations } = useLanguage();
    return (
        <div className={styles.container}>
            <Header logo={translations[language].partyPage.title} activeNavItem={translations[language].partyPage.activeNavItem} />
            <HeroSection />
            <RepresentativesSection />
            <Footer siteTitle={translations[language].partyPage.title} copyright={translations[language].partyPage.copyright} backLinkText={translations[language].partyPage.backLinkText} />
        </div>
    );
}

export default PartyPage;
