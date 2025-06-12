"use client";
import * as React from "react";
import styles from "../HomePage.module.css";
import { CurrencyBar } from "../CurrencyBar";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import  NewsSection  from "./NewsSections";
import { Link } from "react-router-dom";
import { EmailConfirm } from "../EmailConfirm/EmailConfirm";

function NewsPage() {
    const categories = [
        { text: "Экономика", link: "/news/category" },
        { text: "Технологии", link: "/news/category" },
        { text: "Общество", link: "/news/category" },
        { text: "Другое", link: "/news/category" }
      ];
    return (
        <div className={styles.homePage}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <header className={styles.headerSection}>
                        <CurrencyBar
                            date="Вторник, 04 мая 2025"
                            usdRate="USD: 75.34 ₽ (-0.42)"
                            eurRate="EUR: 82.16 ₽ (-0.18)"
                            cnyRate="CNY: 10.45 ₽ (+0.05)"
                            weather="Москва: +22°C, облачно"
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
