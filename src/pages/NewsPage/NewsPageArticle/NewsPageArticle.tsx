"use client";
import * as React from "react";
import styles from "../HomePage.module.css";
import { CurrencyBar } from "../CurrencyBar";
import { Navigation } from "../Navigation";
import { NewsCard } from "../NewsCard";
import { Footer } from "../Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleContent } from "./ArticleContent";
import { Link } from "react-router-dom";
import { useLanguage } from '../../../context/LanguageContext';

function NewsPage() {
    const { language, translations } = useLanguage();
    const categories = [
        { text: translations[language].newsPageArticle.category1, link: "/news/category" },
        { text: translations[language].newsPageArticle.category2, link: "/news/category" },
        { text: translations[language].newsPageArticle.category3, link: "/news/category" },
        { text: translations[language].newsPageArticle.category4, link: "/news/category" }
    ];
    const breadcrumbItems = [
        {
            text: translations[language].newsPageArticle.category1,
            onClick: () => console.log("Navigate to Economics")
        },
        {
            text: translations[language].newsPageArticle.articleTitle,
            onClick: () => console.log("Navigate to current article")
        }
    ];

    const tags = [
        "#" + translations[language].newsPageArticle.tag1,
        "#" + translations[language].newsPageArticle.tag2
    ];

    const articleContent = translations[language].newsPageArticle.ArticleContent;

    const handleBackClick = () => {
        console.log("Navigate back");
    };
    return (
        <div className={styles.homePage}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <header className={styles.headerSection}>
                        <CurrencyBar
                            date={translations[language].newsPageArticle.date}
                            usdRate="USD: 75.34 ₽ (-0.42)"
                            eurRate="EUR: 82.16 ₽ (-0.18)"
                            cnyRate="CNY: 10.45 ₽ (+0.05)"
                            weather={translations[language].newsPageArticle.weather}
                        />
                    </header>

                    <Link className={styles.logo} to="/news"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ae2ee72a836aa2c1561aa578f2f047d64e8744?placeholderIfAbsent=true" className={styles.logo} alt="Logo" />
                    </Link>

                    <Navigation categories={categories} />
                </div>

                <main className={styles.contentWrapper}>

                    <section className={styles.breadcrumbSection}>
                        <button className={styles.backButton} onClick={handleBackClick}>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d49518388612af27d9cb86355e60d3a42a66ee5b?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                                className={styles.backIcon}
                                alt="Back arrow"
                            />
                            <span className={styles.backText}>{translations[language].newsPageArticle.backButton}</span>
                        </button>
                        <Breadcrumbs items={breadcrumbItems} />
                    </section>

                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc5623cd3347923dc485de69c6ba6bac870f10c0?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
                        className={styles.heroImage}
                        alt="Article hero image"
                    />

                    <div className={styles.articleContainer}>
                        <ArticleHeader
                            tags={tags}
                            authorName={translations[language].newsPageArticle.authorName}
                            publishDate={translations[language].newsPageArticle.publishDate}
                        />

                        <ArticleContent
                            title={translations[language].newsPageArticle.articleTitle}
                            content={articleContent}
                        />
                    </div>

                    <section className={styles.sectionWrapper}>
                        <header className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>{translations[language].newsPageArticle.similarArticles}</h2>
                            <span className={styles.sectionDivider} />
                        </header>

                        <div className={styles.mostReadSection}>
                            <div className={styles.mostReadGrid}>
                                <div className={styles.mostReadColumn}>
                                    <NewsCard
                                        title={translations[language].newsPageArticle.articleTitle2}
                                        author={translations[language].newsPageArticle.authorName2}
                                        date={translations[language].newsPageArticle.date2}
                                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8b3e42cf976ec3f8d5563e7fb3dc7127030c47f8?placeholderIfAbsent=true"
                                    />
                                </div>
                                <div className={styles.mostReadColumn}>
                                    <NewsCard
                                        title={translations[language].newsPageArticle.articleTitle3}
                                        author={translations[language].newsPageArticle.authorName3}
                                        date={translations[language].newsPageArticle.date3}
                                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e2de9f08e1ffda012cd697ceec9a2f8db9f02a9a?placeholderIfAbsent=true"
                                    />
                                </div>
                                <div className={styles.mostReadColumn}>
                                    <NewsCard
                                        title={translations[language].newsPageArticle.articleTitle4}
                                        author={translations[language].newsPageArticle.authorName4}
                                        date={translations[language].newsPageArticle.date4}
                                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ecff5d6b25a654605c24b065595a837c583f02be?placeholderIfAbsent=true"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default NewsPage;
