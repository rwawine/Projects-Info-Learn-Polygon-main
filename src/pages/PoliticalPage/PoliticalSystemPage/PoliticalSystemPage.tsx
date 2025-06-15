"use client";
import * as React from "react";
import { Hero } from "./Hero";
import { MainContent } from "./MainContent";
import { Footer } from "../PoliticalPage/Footer";
import styles from "./PoliticalSystemPage.module.css";

import { Header } from "../PoliticalPage/Header";

function PoliticalSystemPage() {
    return (
        <div className={styles.pageContainer}>
            <Header logo="Катариум" activeNavItem="Политическое устройство" />
            <Hero />
            <MainContent />
            <Footer siteTitle="Катариум" copyright="2023. Все права защищены" backLinkText="Вернуться в контур системы" />
        </div>
    );
}

export default PoliticalSystemPage;
