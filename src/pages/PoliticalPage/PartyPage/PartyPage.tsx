"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import RepresentativesSection from "./RepresentativesSection";
import { Footer } from '../PoliticalPage/Footer';
import styles from "./PartyPage.module.css";
import { Header } from "../PoliticalPage/Header";

function PartyPage() {
    return (
        <div className={styles.container}>
            <Header logo="Катариум" activeNavItem="Партии" />
            <HeroSection />
            <RepresentativesSection />
            <Footer siteTitle="Катариум" copyright="2023. Все права защищены" backLinkText="Вернуться в контур системы" />
        </div>
    );
}

export default PartyPage;
