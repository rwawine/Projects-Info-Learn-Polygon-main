"use client";
import * as React from "react";
import styles from "../HomePage.module.css";
import { CurrencyBar } from "../CurrencyBar";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import NewsSection from "./NewsSections";
import { Link } from "react-router-dom";
import { EmailConfirm } from "../EmailConfirm/EmailConfirm";
import { useLanguage } from '../../../context/LanguageContext';

function NewsPage() {
    const { language, translations } = useLanguage();
    const categories = [
        { text: translations[language].newsPageCategory.category1, link: "/news/category" },
        { text: translations[language].newsPageCategory.category2, link: "/news/category" },
        { text: translations[language].newsPageCategory.category3, link: "/news/category" },
        { text: translations[language].newsPageCategory.category4, link: "/news/category" }
    ];
    return (
        <div className={styles.homePage}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <header className={styles.headerSection}>
                        <CurrencyBar
                            date={translations[language].newsPageCategory.date}
                            usdRate="USD: 75.34 ₽ (-0.42)"
                            eurRate="EUR: 82.16 ₽ (-0.18)"
                            cnyRate="CNY: 10.45 ₽ (+0.05)"
                            weather={translations[language].newsPageCategory.weather}
                        />
                    </header>
                    <Link className={styles.logo} to="/news"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ae2ee72a836aa2c1561aa578f2f047d64e8744?placeholderIfAbsent=true" className={styles.logo} alt="Logo" />
                    </Link>


                    <Navigation categories={categories} />
                </div>

                <main className={styles.contentWrapper}>
                    <NewsSection />
                </main>

                <Footer />
            </div>
            <EmailConfirm />
        </div>
    );
}

export default NewsPage;
