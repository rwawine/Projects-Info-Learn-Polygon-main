"use client";
import * as React from "react";
import { Hero } from "./Hero";
import { MainContent } from "./MainContent";
import { Footer } from "../PoliticalPage/Footer";
import styles from "./PoliticalSystemPage.module.css";
import { useLanguage } from '../../../context/LanguageContext';
import { Header } from "../PoliticalPage/Header";

function PoliticalSystemPage() {
    const { language, translations } = useLanguage();
    return (
        <div className={styles.pageContainer}>
            <Header logo={translations[language].PoliticalSystemPagePoliticalSystemPage.title} activeNavItem={translations[language].PoliticalSystemPagePoliticalSystemPage.activeNavItem} />
            <Hero />
            <MainContent />
            <Footer siteTitle={translations[language].PoliticalSystemPagePoliticalSystemPage.siteTitle} copyright={translations[language].PoliticalSystemPagePoliticalSystemPage.copyright} backLinkText={translations[language].PoliticalSystemPagePoliticalSystemPage.backLinkText} />
        </div>
    );
}

export default PoliticalSystemPage;
